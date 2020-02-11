import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@boilerplatejs/core/components/layout';
import {Progress} from '@boilerplatejs/core/components/layout';
import {load} from '@fox-zero/web/actions/Nav';
import {transition} from '@boilerplatejs/core/actions/Transition';

@connect(() => ({}), {load, transition})

export default class extends Nav {
  static propTypes = {
    load: PropTypes.func.isRequired,
    transition: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.load();

  scrollTo = slide => {
    const { transition } = this.props;
    const app = document.querySelector('#app');
    const parallax = app.querySelector('.section.container > .parallax');

    if (parallax.scrollTop >= (global.innerHeight - 40)) {
      if (app.scrollTo) {
        app.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        parallax && parallax.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      } else {
        app.scrollTop = 0;
        parallax && (parallax.scrollTop = 0);
      }
    } else {
      transition('slide', slide);
    }
  };

  render() {
    const preventDefault = e => e.preventDefault();
    const { scrollTo } = this;
    const update = i => () => scrollTo(i);

    return (
      <section className="nav">
        <div className="nav"/>
        <Progress />
        <nav>
          <a href="#" className="toggle" role="button" onClick={preventDefault}/>
          <div className="social">
            <a title="Facebook: @agent.foxzero" href="https://www.facebook.com/agent.foxzero" target="_blank">
              <i className="fa fa-facebook-official"/>
            </a>
            <a title="Twitter: @agent_foxzero" href="https://twitter.com/agent_foxzero" target="_blank">
              <i className="fa fa-twitter"/>
            </a>
            <a title="Instagram: @agent_foxzero" href="https://www.instagram.com/agent_foxzero" target="_blank">
              <i className="fa fa-instagram"/>
            </a>
            <a title="GitHub: FoxZero™" href="https://www.github.com/fox-zero" target="_blank">
              <i className="fa fa-github"/>
            </a>
            <a title="LinkedIn: FoxZero™" href="https://www.linkedin.com/company/foxzero" target="_blank">
              <i className="fa fa-linkedin-square"/>
            </a>
          </div>
          <ul>
            <li className="home">
              <Link rel="nofollow" to="/" className="logo" onClick={update(0)}/>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-cogs"/> Services</a>
              <ul>
                <li><Link rel="nofollow" to="/services/consulting" onClick={update(0)}><i className="fa fa-lightbulb-o"/> Consulting</Link></li>
                <li><Link rel="nofollow" to="/services/development" onClick={update(1)}><i className="fa fa-wrench"/> Development</Link></li>
                <li><Link rel="nofollow" to="/services/maintenance" onClick={update(2)}><i className="fa fa-heartbeat"/> Maintenance</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-cubes"/> Framework</a>
              <ul>
                <li><Link rel="nofollow" to="/framework/strategy" onClick={update(3)}><i className="fa fa-road"/> Strategy</Link></li>
                <li><Link rel="nofollow" to="/framework/process" onClick={update(4)}><i className="fa fa-tasks"/> Process</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link rel="nofollow" to="/pricing/subscription" onClick={update(6)}><i className="fa fa-refresh"/> Subscription</Link></li>
                <li><Link rel="nofollow" to="/pricing/warranty" onClick={update(5)}><i className="fa fa-umbrella"/> Warranty</Link></li>
                <li><Link rel="nofollow" to="/pricing/on-demand" onClick={update(7)}><i className="fa fa-power-off"/> On Demand</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/stream/music/music-tech-steven-tyler-collision-nola/5/4/2018">
                <i className="fa fa-television"/> FoxStream™ TV
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
