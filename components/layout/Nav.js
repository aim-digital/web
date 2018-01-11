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
    const { scrollTo } = this;
    const update = (header, slide) => () => transition({ header }).then(() => transition({ slide })).then(scrollTo);

    return (
      <section className="nav">
        <nav>
          <Link to="/home" className="logo" onClick={update(0, 0)}/>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>

          <ul>
            <li><Link to="/home/missions" onClick={update(0, 1)}><i className="fa fa-cogs"/> Work</Link></li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> About</a>
              <ul>
                <li><Link to="/home/services" onClick={update(0, 2)}>What we do</Link></li>
                <li><Link to="/home/leadership" onClick={update(0, 66)}>Who we are</Link></li>
                <li><Link to="/home/network" onClick={update(0, 7)}>Partner network</Link></li>
                <li><Link to="/home/virtues" onClick={update(0, 0)}><em>Vitruvian Virtues</em></Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link to="/home/plans" onClick={update(0, 3)}>Plans and products</Link></li>
                <li><Link to="/home/rates" onClick={update(0, 4)}>Hourly rates</Link></li>
                <li><Link to="/home/hosting" onClick={update(0, 5)}>Hosting packages</Link></li>
              </ul>
            </li>

            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-envelope"/> Contact</a>
              <ul>
                <li><Link to="/home/communications" onClick={update(1, 0)}>Connect with us</Link></li>
                <li><Link to="/home/headquarters" onClick={update(1, 1)}>Base of operations</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
