import React, {Component} from 'react';
import ReactGA from 'react-ga';
import {Header} from '@vitruvian-tech/machete-bundle/components/layout';

export default class extends Header {
  transitionComplete = state => {
    ReactGA.event({
      category: 'Contact Header',
      action: 'View',
      label: `Slide ${state.index + 1}`
    });
  };

  render() {
    const styles = require('./Component.scss');
    const map = require('./images/map.png');

    return (
      <Header timer className={styles.slide} onTransitionComplete={this.transitionComplete}>
        {[
          <div className={[styles.content, 'content', styles.links].join(' ')} key="0">
            <section className={['preview'].join(' ')}>
              <h3>Communications</h3>
              <ul className={'columns'}>
                <li>
                  <a title="Email: services@vitruvian.tech" href="mailto:services@vitruvian.tech?subject=<VitruvianTech>%20Connect">
                    <i className="fa fa-envelope"/> Email
                  </a>
                </li>
                <li>
                  <a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/> (646) 204-1732
                  </a>
                </li>
                <li>
                  <a title="LinkedIn: VitruvianTech" href="https://www.linkedin.com/company/vitruvian-technology-corp." target="_blank">
                    <i className="fa fa-linkedin-square"/> VitruvianTech
                  </a>
                </li>
                <li>
                  <a title="AngelList: VitruvianTech" href="https://angel.co/vitruvian-technology-1" target="_blank">
                    <i className="fa fa-angellist"/> VitruvianTech
                  </a>
                </li>
                <li>
                  <a title="Facebook: @VitruvianTechHQ" href="https://www.facebook.com/VitruvianTechHQ/" target="_blank">
                    <i className="fa fa-facebook-official"/> VitruvianTechHQ
                  </a>
                </li>
                <li>
                  <a title="Twitter: @VitruvianTechHQ" href="https://twitter.com/VitruvianTechHQ" target="_blank">
                    <i className="fa fa-twitter"/> VitruvianTechHQ
                  </a>
                </li>
                <li>
                  <a title="GitHub: @vitruvian-tech" href="https://github.com/vitruvian-tech" target="_blank">
                    <i className="fa fa-github"/> vitruvian-tech
                  </a>
                </li>
                <li>
                  <a title="Instagram: @vitruvian.tech" href="https://www.instagram.com/vitruvian.tech/" target="_blank">
                    <i className="fa fa-instagram"/> vitruvian.tech
                  </a>
                </li>
                <li className={'more'}/>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.location].join(' ')} key="1">
            <section className={['preview'].join(' ')}>
              <h3>Headquarters</h3>
              <ul>
                <li>
                  <img className={styles.map} src={map} alt="Based in Long Island City, NYC" title="Based in Long Island City, NYC"/>
                </li>
                <li className={styles.caption}>
                  <small><i className="fa fa-globe"/> <strong>Long Island City, NYC</strong></small>
                  <span className={styles.code}>Location</span>
                </li>
                <li className={styles.caption}>
                  <small><i className="fa fa-clock-o"/> <strong>10am-6pm (GMT-5)</strong></small>
                  <span className={styles.code}>Hours of Operation</span>
                </li>
                <li className={styles.caption}>
                  <small><a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/> <strong>+1 (646) 204-1732</strong>
                  </a>
                  </small>
                  <span className={styles.code}>Support Line</span>
                </li>
              </ul>
            </section>
          </div>
        ]}
      </Header>
    );
  }
}
