import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Footer} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';

@connect(state => ({}), { transition })

export default class extends Footer {
  static propTypes = {
    transition: PropTypes.func.isRequired
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
    const { transition } = this.props;
    const { scrollTo } = this;
    const update = (header, slide) => () => transition({ header }).then(() => transition({ slide })).then(scrollTo);

    return (
      <Footer>
        <div className="colors container">
          <div className="row">
            <div className="blue col-sm-3"></div>
            <div className="green col-sm-3"></div>
            <div className="yellow col-sm-3"></div>
            <div className="red col-sm-3"></div>
          </div>
        </div>
        <div className="content container">
          <div className="row">
            <div className="col-xs-12 logo text-center">
              <Link to="/" onClick={update(0, 0)}>
                <img src="/@fox-zero/web/images/icon.png" title="FoxZero Media"/>
              </Link>
            </div>
            <div className="col-sm-9 col-xs-12">
              <ul className="col-sm-3 col-xs-6">
                <li>
                  <h4><i>@</i> Follow Us</h4>
                  <ul className="social">
                    <li>
                      <a title="Facebook: @fox.zero.media" href="https://www.facebook.com/fox.zero.media" target="_blank">
                        <i className="fa fa-facebook-official"/>
                      </a>
                    </li>
                    <li>
                      <a title="Twitter: @fox_zero_media" href="https://twitter.com/fox_zero_media" target="_blank">
                        <i className="fa fa-twitter"/>
                      </a>
                    </li>
                    <li>
                      <a title="Instagram: @fox_zero_media" href="https://www.instagram.com/fox_zero_media" target="_blank">
                        <i className="fa fa-instagram"/>
                      </a>
                    </li>
                    <li>
                      <a title="GitHub: FoxZero™" href="https://github.com/fox-zero" target="_blank">
                        <i className="fa fa-github"/>
                      </a>
                    </li>
                    <li>
                      <a title="LinkedIn: FoxZero™" href="https://www.linkedin.com/company/fox-zero-media" target="_blank">
                        <i className="fa fa-linkedin-square"/>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-universal-access"/> About</h4>
                  <ul>
                    <li><Link to="/services" onClick={update(0, 1)}>What We Do</Link></li>
                    <li><Link to="/leadership" onClick={update(0, 5)}>Who We Are</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-usd"/> Pricing</h4>
                  <ul>
                    <li><Link to="/plans" onClick={update(0, 2)}>Plans &amp; Products</Link></li>
                    <li><Link to="/rates" onClick={update(0, 3)}>Hourly Rates</Link></li>
                    <li><Link to="/hosting" onClick={update(0, 4)}>Hosting Packages</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-envelope"/> Contact</h4>
                  <ul>
                    <li><Link to="/communications" onClick={update(1, 0)}>Connect with Us</Link></li>
                    <li><Link to="/headquarters" onClick={update(1, 1)}>Base of Operations</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-xs-12">
              <h4><i className="fa fa-info-circle"/> Support</h4>
              <p>For sales and customer service, please call or text <a title="Phone/SMS: +1 (855) FOX-ZERO" href="tel:+18553473369" target="_blank">+1 (855) FOX-ZERO</a>, or <a title="Email: hello@foxzero.io" href="mailto:hello@foxzero.io?subject=Hello!">email us</a>.</p>
              <p>Operating hours:<br />9am-6pm (EDT) / M-F</p>
            </div>
            <div className="col-xs-12 text-center">
              <img src="/@fox-zero/web/images/logo-transparent.png" title="FoxZero Media"/>
              <p><small>&copy; FoxZero Media (a VitruvianTech® brand)</small></p>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}
