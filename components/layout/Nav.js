import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@machete-platform/core-bundle/components/layout';
import {Progress} from '@vitruvian-tech/machete-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import {start} from '@vitruvian-tech/machete-bundle/controllers/Progress';
import {load} from '@vitruvian-tech/machete-bundle/controllers/Nav';
import * as Auth from '@machete-platform/core-bundle/controllers/Auth';

@connect(state => ({ user: state['@machete-platform/core-bundle'].Auth.user }), { transition, logout: Auth.logout, load, start })

export default class extends Nav {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    start: PropTypes.func.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.load();

  handleLogout = (event) => {
    event.preventDefault();
    this.props.logout();
  };

  scrollTo = () => {
    if (global.scrollTo) {
      global.scrollTo(0, 0);
    }
  };

  render() {
    const preventDefault = e => e.preventDefault();
    const { transition, start } = this.props;
    const { scrollTo } = this;
    const update = (header, slide) => () => transition({ header }).then(() => transition({ slide })).then(scrollTo);

    return (
      <section className="nav">
        <Progress />
        <nav>
          <Link rel="nofollow" to="/home" className="logo" onClick={update(0, 0)}/>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>
          <ul>
            <li>
              <Link rel="nofollow" to="/home/missions" onClick={update(0, 1)}><i className="fa fa-code"/> Work</Link>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> About</a>
              <ul>
                <li><Link rel="nofollow" to="/home/services" onClick={update(0, 2)}>What We Do</Link></li>
                <li><Link rel="nofollow" to="/home/leadership" onClick={update(0, 6)}>Who We Are</Link></li>
                <li><Link rel="nofollow" to="/home/network" onClick={update(0, 7)}>Partner Network</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link rel="nofollow" to="/home/plans" onClick={update(0, 3)}>Plans &amp; Products</Link></li>
                <li><Link rel="nofollow" to="/home/rates" onClick={update(0, 4)}>Hourly Rates</Link></li>
                <li><Link rel="nofollow" to="/home/hosting" onClick={update(0, 5)}>Hosting Packages</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-envelope"/> Contact</a>
              <ul>
                <li><Link rel="nofollow" to="/home/communications" onClick={update(1, 0)}>Connect with Us</Link></li>
                <li><Link rel="nofollow" to="/home/headquarters" onClick={update(1, 1)}>Base of Operations</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-commenting"/> Blog</a>
              <ul>
                <li>
                  <Link to="/post/music-tech-and-steven-tyler-collide-in-NOLA/05-04-2018/2H9AEB2WpicAiMiO88YsSY" onClick={start}>
                    <marquee><span>Music, Tech, and Steven Tyler Collide in NOLA</span> <span className="humility">/ Collision Conf. 2018</span></marquee>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
