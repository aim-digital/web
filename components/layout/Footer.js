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
                <img src="/@fox-zero/web/images/logo.png" title="Fox Zero™ - High-Performance/Zero-Latency Consultancy™"/>
              </Link>
            </div>
            <div className="col-sm-9 col-xs-12">
              <ul className="col-sm-3 col-xs-6">
                <li>
                  <h4><i>@</i> Follow Us</h4>
                  <ul className="social">
                    <li>
                      <a title="Facebook: @fox.zero.agency" href="https://www.facebook.com/fox.zero.agency" target="_blank">
                        <i className="fa fa-facebook-official"/>
                      </a>
                    </li>
                    <li>
                      <a title="Twitter: @fox_zero_agency" href="https://twitter.com/fox_zero_agency" target="_blank">
                        <i className="fa fa-twitter"/>
                      </a>
                    </li>
                    <li>
                      <a title="Instagram: @fox_zero_agency" href="https://www.instagram.com/fox_zero_agency" target="_blank">
                        <i className="fa fa-instagram"/>
                      </a>
                    </li>
                    <li>
                      <a title="GitHub: Fox Zero™" href="https://github.com/fox-zero" target="_blank">
                        <i className="fa fa-github"/>
                      </a>
                    </li>
                    <li>
                      <a title="LinkedIn: Fox Zero™" href="https://www.linkedin.com/company/fox-zero" target="_blank">
                        <i className="fa fa-linkedin-square"/>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-cogs"/> Services</h4>
                  <ul>
                    <li><Link to="/consulting" onClick={scrollTo}><i className="fa fa-lightbulb-o"/> Consulting</Link></li>
                    <li><Link to="/development" onClick={scrollTo}><i className="fa fa-wrench"/> Development</Link></li>
                    <li><Link to="/maintenance" onClick={scrollTo}><i className="fa fa-heartbeat"/> Maintenance</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-cubes"/> Framework</h4>
                  <ul>
                    <li><Link to="/strategy" onClick={scrollTo}><i className="fa fa-road"/> Strategy</Link></li>
                    <li><Link to="/process" onClick={scrollTo}><i className="fa fa-fighter-jet"/> Process</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-usd"/> Pricing</h4>
                  <ul>
                    <li><Link to="/subscription" onClick={scrollTo}><i className="fa fa-refresh"/> Subscription</Link></li>
                    <li><Link to="/warranty" onClick={scrollTo}><i className="fa fa-umbrella"/> Warranty</Link></li>
                    <li><Link to="/on-demand" onClick={scrollTo}><i className="fa fa-power-off"/> On Demand</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-xs-12">
              <h4><i className="fa fa-info-circle"/> Support</h4>
              <p>For sales and customer service, please call or text <a title="Phone/SMS: +1 (855) FOX-ZERO" href="tel:+18553473369" target="_blank">+1 (855) FOX-ZERO</a>, or <a title="Email: hello@foxzero.io" href="mailto:hello@foxzero.io?subject=Hello!">email us</a>.</p>
              <p><strong>Operating Hours:</strong><br />9am-6pm (EST), M-F</p>
            </div>
            <div className="col-xs-12 text-center">
              <img src="/@fox-zero/web/images/seal.png" title="Fox Zero (a VitruvianTech® brand)"/>
              <p><small>&copy; Fox Zero (a VitruvianTech® brand)</small></p>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}
