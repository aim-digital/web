import React from 'react';
import {Link} from 'react-router';
import {Footer} from '@boilerplatejs/core/components/layout';

export default class extends Footer {
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
    const { scrollTo } = this;

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
              <Link to="/" onClick={scrollTo}>
                <img src="/@fox-zero/web/images/icon.png" title="FoxZero Consulting"/>
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
                  <h4><i className="fa fa-universal-access"/> Services</h4>
                  <ul>
                    <li><Link to="/consulting" onClick={scrollTo}>Consulting</Link></li>
                    <li><Link to="/development" onClick={scrollTo}>Development</Link></li>
                    <li><Link to="/maintenance" onClick={scrollTo}>Maintenance</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-usd"/> Pricing</h4>
                  <ul>
                    <li><Link to="/insurance" onClick={scrollTo}>Insurance</Link></li>
                    <li><Link to="/subscription" onClick={scrollTo}>Subscription</Link></li>
                    <li><Link to="/on-demand" onClick={scrollTo}>On Demand</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-universal-access"/> Framework</h4>
                  <ul>
                    <li><Link to="/strategy" onClick={scrollTo}>Strategy</Link></li>
                    <li><Link to="/process" onClick={scrollTo}>Process</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-xs-12">
              <h4><i className="fa fa-info-circle"/> Support</h4>
              <p>For sales and customer service, please call or text <a title="Phone/SMS: +1 (855) FOX-ZERO" href="tel:+18553473369" target="_blank">+1 (855) FOX-ZERO</a>, or <a title="Email: hello@foxzero.io" href="mailto:hello@foxzero.io?subject=Hello!">email us</a>.</p>
              <p>Operating hours:<br />9am-6pm (EST) / M-F</p>
            </div>
            <div className="col-xs-12 text-center">
              <img src="/@fox-zero/web/images/logo-transparent.png" title="FoxZero Consulting"/>
              <p><small>&copy; FoxZero Consulting (a VitruvianTech® brand)</small></p>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}
