import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Nav} from '@boilerplatejs/core/components/layout';
import {Progress} from '@boilerplatejs/core/components/layout';
import {load} from '@fox-zero/web/actions/Nav';

@connect(() => ({}), { load })

export default class extends Nav {
  static propTypes = {
    load: PropTypes.func.isRequired
  };

  componentDidMount = () => this.props.load(2000);

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
    const { scrollTo } = this;

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
              <Link rel="nofollow" to="/home" className="logo" onClick={scrollTo}/>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-universal-access"/> About</a>
              <ul>
                <li><Link rel="nofollow" to="/home/services" onClick={scrollTo}>What We Do</Link></li>
                <li><Link rel="nofollow" to="/home/leadership" onClick={scrollTo}>Who We Are</Link></li>
              </ul>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-usd"/> Pricing</a>
              <ul>
                <li><Link rel="nofollow" to="/home/plans" onClick={scrollTo}>Plans &amp; Products</Link></li>
                <li><Link rel="nofollow" to="/home/rates" onClick={scrollTo}>Hourly Rates</Link></li>
                <li><Link rel="nofollow" to="/home/hosting" onClick={scrollTo}>Hosting Packages</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/stream/music/music-tech-steven-tyler-collision-nola/5/4/2018">
                <i className="fa fa-television"/> <sup>Fox://</sup>Stream™ TV
              </Link>
            </li>
            <li className="subnav">
              <a href="#" onClick={preventDefault}><i className="fa fa-envelope"/> Contact</a>
              <ul>
                <li><Link rel="nofollow" to="/home/communications" onClick={scrollTo}>Connect with Us</Link></li>
                <li><Link rel="nofollow" to="/home/headquarters" onClick={scrollTo}>Base of Operations</Link></li>
              </ul>
            </li>
          </ul>
        </nav>
      </section>
    );
  }
}
