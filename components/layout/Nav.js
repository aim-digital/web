import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import {load} from '@vitruvian-tech/machete-bundle/controllers/Nav';
import * as Auth from '@machete-platform/core-bundle/controllers/Auth';

@connect(state => ({ user: state['@machete-platform/core-bundle'].Auth.user }), { transition, logout: Auth.logout, load })

export default class extends Nav {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    user: PropTypes.object,
    logout: PropTypes.func.isRequired
  };

  componentDidMount = () => {
    this.props.load();
  };

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
    const { transition } = this.props;
    const slide = (header, slide) => () => transition({ header }).then(() => transition({ slide }));

    return (
      <section className="nav">
        <nav>
          <Link to="/home" className="logo" onClick={() => { slide(0, 0)(); this.scrollTo(); }}/>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>

          <ul>
            <li><Link to="/home/missions" onClick={this.scrollTo}><i className="fa fa-cogs"/> Work</Link></li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> About</a>
              <ul>
                <li><Link to="/home/services" onClick={this.scrollTo}>What we do</Link></li>
                <li><Link to="/home/leadership" onClick={this.scrollTo}>Who we are</Link></li>
                <li><Link to="/home/network" onClick={this.scrollTo}>Partner network</Link></li>
                <li><Link to="/home/virtues" onClick={this.scrollTo}><em>Vitruvian Virtues</em></Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link to="/home/plans" onClick={this.scrollTo}>Plans and products</Link></li>
                <li><Link to="/home/rates" onClick={this.scrollTo}>Hourly rates</Link></li>
                <li><Link to="/home/hosting" onClick={this.scrollTo}>Hosting packages</Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-envelope"/> Contact</a>
              <ul>
                <li><Link to="/home/communications" onClick={this.scrollTo}>Connect with us</Link></li>
                <li><Link to="/home/headquarters" onClick={this.scrollTo}>Base of operations</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
