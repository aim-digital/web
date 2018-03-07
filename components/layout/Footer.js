import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Footer} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';

@connect(state => ({}), { transition })

export default class extends Footer {
  static propTypes = {
    transition: PropTypes.func.isRequired
  };

  scrollTo = () => {
    if (global.scrollTo) {
      global.scrollTo(0, 0);
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
              <Link to="/home" onClick={update(0, 0)}>
                <img src="/@vitruvian-tech/machete-bundle/images/logo.png" alt="Roman Inspired Software Designers" title="Vitruvian Technology, Corp."/>
              </Link>
            </div>
            <div className="col-sm-9 col-xs-12">
              <ul className="col-sm-3 col-xs-6">
                <li>
                  <h4><i>@</i> Follow Us</h4>
                  <ul className="social">
                    <li>
                      <a title="Facebook: @VitruvianTechHQ" href="https://www.facebook.com/VitruvianTechHQ/" target="_blank">
                        <i className="fa fa-facebook-official"/>
                      </a>
                    </li>
                    <li>
                      <a title="Twitter: @VitruvianTechHQ" href="https://twitter.com/VitruvianTechHQ" target="_blank">
                        <i className="fa fa-twitter"/>
                      </a>
                    </li>
                    <li>
                      <a title="Instagram: @vitruvian.tech" href="https://www.instagram.com/vitruvian.tech/" target="_blank">
                        <i className="fa fa-instagram"/>
                      </a>
                    </li>
                    <li>
                      <a title="GitHub: @vitruvian-tech" href="https://github.com/vitruvian-tech" target="_blank">
                        <i className="fa fa-github"/>
                      </a>
                    </li>
                    <li>
                      <a title="LinkedIn: VitruvianTech" href="https://www.linkedin.com/company/vitruvian-technology-corp." target="_blank">
                        <i className="fa fa-linkedin-square"/>
                      </a>
                    </li>
                    <li>
                      <a title="AngelList: VitruvianTech" href="https://angel.co/vitruvian-technology-1" target="_blank">
                        <i className="fa fa-angellist"/>
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-universal-access"/> About</h4>
                  <ul>
                    <li><Link to="/home/missions" onClick={update(0, 1)}>Work</Link></li>
                    <li><Link to="/home/services" onClick={update(0, 2)}>What we do</Link></li>
                    <li><Link to="/home/leadership" onClick={update(0, 6)}>Who we are</Link></li>
                    <li><Link to="/home/network" onClick={update(0, 7)}>Partner network</Link></li>
                    <li><Link to="/home/virtues" onClick={update(0, 0)}><em>Vitruvian Virtues</em></Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-usd"/> Pricing</h4>
                  <ul>
                    <li><Link to="/home/plans" onClick={update(0, 3)}>Plans and products</Link></li>
                    <li><Link to="/home/rates" onClick={update(0, 4)}>Hourly rates</Link></li>
                    <li><Link to="/home/hosting" onClick={update(0, 5)}>Hosting packages</Link></li>
                  </ul>
                </li>
              </ul>
              <ul className="col-sm-3 col-xs-6">
                <li className="subnav">
                  <h4><i className="fa fa-envelope"/> Contact</h4>
                  <ul>
                    <li><Link to="/home/communications" onClick={update(1, 0)}>Connect with us</Link></li>
                    <li><Link to="/home/headquarters" onClick={update(1, 1)}>Base of operations</Link></li>
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-xs-12">
              <h4><i className="fa fa-info-circle"/> Support</h4>
              <p>For sales and customer service, please call or text <a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank">+1 (646) 204-1732</a>, or email us at <a title="Email: services@vitruvian.tech" href="mailto:services@vitruvian.tech?subject=<VitruvianTech>%20Connect">services@vitruvian.tech</a>.</p>
              <p>Operating hours:<br /><em>M-F 10am-6pm (GMT-5)</em></p>
            </div>
            <div className="col-xs-12 text-center">
              <img src="/@vitruvian-tech/machete-bundle/images/insignia.png" alt="The Digital Special Forces for custom software and marketing solutions." title="Vitruvian Technology, Corp."/>
              <p><small>&copy; 2018 Vitruvian Technology, Corp.<br />(a subsidiary of Vitruvian Holdings, LLC.)</small></p>
            </div>
          </div>
        </div>
      </Footer>
    );
  }
}
