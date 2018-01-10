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

  render() {
    const preventDefault = e => e.preventDefault();
    const { transition } = this.props;
    const slide = (header, slide) => () => transition({ header }).then(() => transition({ slide }));

    return (
      <section className="nav">
        <nav>
          <Link to="/home" className="logo" onClick={slide(0, 0)}/>
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
