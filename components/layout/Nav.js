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
            <a title="Facebook: @fox.zero.media" href="https://www.facebook.com/fox.zero.media" target="_blank">
              <i className="fa fa-facebook-official"/>
            </a>
            <a title="Twitter: @fox_zero_media" href="https://twitter.com/fox_zero_media" target="_blank">
              <i className="fa fa-twitter"/>
            </a>
            <a title="Instagram: @fox_zero_media" href="https://www.instagram.com/fox_zero_media" target="_blank">
              <i className="fa fa-instagram"/>
            </a>
            <a title="GitHub: FoxZero™" href="https://www.github.com/fox-zero" target="_blank">
              <i className="fa fa-github"/>
            </a>
            <a title="LinkedIn: FoxZero™" href="https://www.linkedin.com/company/fox-zero-media" target="_blank">
              <i className="fa fa-linkedin-square"/>
            </a>
          </div>
          <ul>
            <li className="home">
              <Link rel="nofollow" to="/" className="logo" onClick={update(0)}/>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> Services</a>
              <ul>
                <li><Link rel="nofollow" to="/services/consulting" onClick={update(0)}>Consulting</Link></li>
                <li><Link rel="nofollow" to="/services/development" onClick={update(1)}>Development</Link></li>
                <li><Link rel="nofollow" to="/services/strategy" onClick={update(2)}>Maintenance</Link></li>
                <li><Link rel="nofollow" to="/services/strategy" onClick={update(3)}>Strategy</Link></li>
                <li><Link rel="nofollow" to="/services/process" onClick={update(4)}>Process</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link rel="nofollow" to="/services/warranty" onClick={update(5)}>Warranty</Link></li>
                <li><Link rel="nofollow" to="/services/subscription" onClick={update(6)}>Subscription</Link></li>
                <li><Link rel="nofollow" to="/services/on-demand" onClick={update(7)}>On-Demand</Link></li>
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
