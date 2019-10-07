import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@boilerplatejs/core/components/layout';
import {Progress} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {load} from '@aim-digital/web/actions/Nav';
import * as Session from '@boilerplatejs/core/actions/Session';

@connect(state => ({ user: state['@boilerplatejs/core'].Session.user }), { transition, logout: Session.logout, load })

export default class extends Nav {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.load(2000);

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  scrollTo = () => {
    const app = document.querySelector('#app');
    const parallax = app.querySelector('.section.container > .parallax');

    if (app.scrollTo) {
      app.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      parallax && parallax.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    } else {
      app.scrollTop = 0;
      parallax && (parallax.scrollTop = 0);
    }
  };

  render() {
    const preventDefault = e => e.preventDefault();
    const { transition } = this.props;
    const { scrollTo } = this;
    const update = (header, slide) => () => transition({ header }).then(() => transition({ slide })).then(scrollTo);

    return (
      <section className="nav">
        <div className="nav"/>
        <Progress />
        <nav>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>
          <div className="social">
            <a title="Facebook: @AIMDigitalTV" href="https://www.facebook.com/AIMDigitalTV" target="_blank">
              <i className="fa fa-facebook-official"/>
            </a>
            <a title="Twitter: @AIMDigitalTV" href="https://twitter.com/AIMDigitalTV" target="_blank">
              <i className="fa fa-twitter"/>
            </a>
            <a title="Instagram: @AIMDigitalTV" href="https://www.instagram.com/AIMDigitalTV" target="_blank">
              <i className="fa fa-instagram"/>
            </a>
            <a title="GitHub: AIM™ Digital" href="https://www.github.com/AIM-Digital" target="_blank">
              <i className="fa fa-github"/>
            </a>
            <a title="LinkedIn: AIM™" href="https://www.linkedin.com/company/american-interactive-media" target="_blank">
              <i className="fa fa-linkedin-square"/>
            </a>
          </div>
          <ul>
            <li className="home">
              <Link rel="nofollow" to="/home" className="logo" onClick={update(0, 0)}/>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> About</a>
              <ul>
                <li><Link rel="nofollow" to="/home/services" onClick={update(0, 1)}>What We Do</Link></li>
                <li><Link rel="nofollow" to="/home/leadership" onClick={update(0, 5)}>Who We Are</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link rel="nofollow" to="/home/plans" onClick={update(0, 2)}>Plans &amp; Products</Link></li>
                <li><Link rel="nofollow" to="/home/rates" onClick={update(0, 3)}>Hourly Rates</Link></li>
                <li><Link rel="nofollow" to="/home/hosting" onClick={update(0, 4)}>Hosting Packages</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/tv/music/music-tech-steven-tyler-collision-nola/5/4/2018" onClick={update(0, 0)}>
                <i className="fa fa-television"/> <sup>AIM://</sup>TV
              </Link>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-envelope"/> Contact</a>
              <ul>
                <li><Link rel="nofollow" to="/home/communications" onClick={update(1, 0)}>Connect with Us</Link></li>
                <li><Link rel="nofollow" to="/home/headquarters" onClick={update(1, 1)}>Base of Operations</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
