import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import * as Auth from '@machete-platform/core-bundle/controllers/Auth';

@connect(state => ({ user: state['@machete-platform/core-bundle'].Auth.user }), { transition, logout: Auth.logout })

export default class extends Nav {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => {
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

      if (item.querySelectorAll('ul').length) {
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
      items.forEach(item => item.classList.remove('active'));
    });

    // Bind click event on mask to exit nav active state
    document.querySelector('#app > div > .page').addEventListener('click', close);
    document.querySelector('.nav .logo').addEventListener('click', close);
  };

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  render() {
    const preventDefault = e => e.preventDefault();

    return (
      <section className="nav">
        <nav>
          <Link to="/home" className="logo"/>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>

          <ul>
            <li><Link to="/home/missions"><i className="fa fa-cogs"/> Work</Link></li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> About</a>
              <ul>
                <li><Link to="/home/services">What we do</Link></li>
                <li><Link to="/home/leadership">Who we are</Link></li>
                <li><Link to="/home/network">Partners and network</Link></li>
                <li><Link to="/home/virtues">Our <em>Vitruvian Virtues</em></Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link to="/home/plans">Plans and products</Link></li>
                <li><Link to="/home/rates">Hourly rates</Link></li>
                <li><Link to="/home/hosting">Hosting services</Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-envelope"/> Contact</a>
              <ul>
                <li><Link to="/home/communications">Connect with us</Link></li>
                <li><Link to="/home/headquarters">Base of operations</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
