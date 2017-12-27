import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import * as Auth from '@machete-platform/core-bundle/controllers/Auth';

let load = () => {
  const TOGGLE_CLASS = 'nav-open';
  const body = document.body;
  const app = document.getElementById('app');
  const items = document.querySelectorAll('.nav nav ul > li');
  const links = document.querySelectorAll('.nav nav ul a');

  const close = () => {
    app.classList.remove(TOGGLE_CLASS, app.classList.contains(TOGGLE_CLASS));
    body.classList.remove(TOGGLE_CLASS, body.classList.contains(TOGGLE_CLASS));
    items.forEach(item => item.classList.remove('active'));
  };

  links.forEach(link => link.addEventListener('click', () => {
    const item = link.parentNode;
    const isActive = item.classList.contains('active');

    // Remove active state for all items
    items.forEach(item => item.classList.remove('active'));

    if(item.querySelectorAll('ul').length) {
      // If item has a subnav, set nav `active` class
      app.classList.add(TOGGLE_CLASS);
      body.classList.add(TOGGLE_CLASS);
      item.classList[isActive ? 'remove' : 'add']('active');

      if (isActive && window.innerWidth > 768) {
        body.classList.remove(TOGGLE_CLASS);
        app.classList.remove(TOGGLE_CLASS);
      }
    } else {
      // If item has no subnav, unset nav `active` class
      app.classList.remove(TOGGLE_CLASS);
      body.classList.remove(TOGGLE_CLASS);
      item.classList.remove('active');
    }
  }));

  // Bind click event for toggle ("hamburger") button to toggle nav active state
  document.querySelector('.nav .toggle').addEventListener('click', e => {
    e.preventDefault();
    body.classList.toggle(TOGGLE_CLASS);
    app.classList.toggle(TOGGLE_CLASS);
  });

  // Bind click event on mask to exit nav active state
  document.querySelector('#app > div > .page').addEventListener('click', close);
  document.querySelector('.nav .logo').addEventListener('click', close);

  load = () => ({});
};

@connect(state => ({ user: state['@machete-platform/core-bundle'].Auth.user }), { transition, logout: Auth.logout })

export default class extends Nav {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => load();

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const { transition } = this.props;
    const preventDefault = e => e.preventDefault();
    const slide = (header, slide) => () => transition({ header }).then(() => transition({ slide }));

    return (
      <section className="nav">
        <nav>
          <Link to="/" className="logo" onClick={slide(0, 0)}/>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>

          <ul>
            <li><Link to="/" onClick={slide(0, 1)}>Work</Link></li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>About</a>
              <ul>
                <li><Link to="/" onClick={slide(0, 2)}>What we do</Link></li>
                <li><Link to="/" onClick={slide(0, 6)}>Who we are (leadership)</Link></li>
                <li><Link to="/" onClick={slide(0, 0)}>Our <em>Vitruvian Virtues</em></Link></li>
                <li><Link to="/" onClick={slide(0, 7)}>Partners and network</Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>Pricing</a>
              <ul>
                <li><Link to="/" onClick={slide(0, 3)}>Plans and products</Link></li>
                <li><Link to="/" onClick={slide(0, 4)}>Hourly rates</Link></li>
                <li><Link to="/" onClick={slide(0, 5)}>Hosting services</Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>Contact</a>
              <ul>
                <li><Link to="/" onClick={slide(1, 0)}>Connect with us today!</Link></li>
                <li><Link to="/" onClick={slide(1, 1)}>Base of operations</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
