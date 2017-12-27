import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import * as Auth from '@machete-platform/core-bundle/controllers/Auth';
// import Navbar from 'react-bootstrap/lib/Navbar';
// import NavItem from 'react-bootstrap/lib/NavItem';
// import Nav from 'react-bootstrap/lib/Nav';
// import {LinkContainer} from 'react-router-bootstrap';

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

    return (
      <section className="nav">
        <nav>
          <Link to="/" className="logo" onClick={() => transition({ slide: 0, header: 0 })}/>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>

          <ul>
            <li><a href="#/work">Work</a></li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>About</a>

              <ul>
                <li><a href="#/about/what-we-do">What we do</a></li>
                <li><a href="#/about/how-we-work">How we work</a></li>
                <li><a href="#/about/leadership">Leadership</a></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>Careers</a>

              <ul>
                <li><a href="#/careers/client-services">Client Services</a></li>
                <li><a href="#/careers/creative">Creative</a></li>
                <li><a href="#/careers/motion-and-media">Motion &amp; Media</a></li>
                <li><a href="#/careers/operations">Operations</a></li>
                <li><a href="#/careers/people">People</a></li>
                <li><a href="#/careers/strategy">Strategy</a></li>
                <li><a href="#/careers/technology">Technology</a></li>
                <li><a href="#/careers/ux-and-product-design">UX &amp; Product Design</a></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>Ideas</a>

              <ul>
                <li><a href="#/ideas/reports">Reports</a></li>
                <li><a href="#/ideas/perspectives">Perspectives</a></li>
                <li><a href="#/ideas/books">Books</a></li>
                <li><a href="#/ideas/videos">Videos</a></li>
              </ul>
            </li>

            <li><a href="#/news">News</a></li>

            <li><a href="#/events">Events</a></li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}>Contact</a>

              <ul>
                <li><a href="#/contact/atlanta">Atlanta</a></li>
                <li><a href="#/contact/brooklyn">Brooklyn</a></li>
                <li><a href="#/contact/dc">DC</a></li>
                <li><a href="#/contact/london">London</a></li>
                <li><a href="#/contact/los-angeles">Los Angeles</a></li>
                <li><a href="#/contact/portland">Portland</a></li>
                <li><a href="#/contact/rio">Rio</a></li>
                <li><a href="#/contact/san-francisco">San Francisco</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
