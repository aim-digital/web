import React from 'react';
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
      <Header className={styles.slide} onTransitionComplete={this.transitionComplete}>
        {[
          <div className={[styles.content, 'content', styles.links].join(' ')} key="0">
            <section className={['preview'].join(' ')}>
              <h3>Communications</h3>
              <ul className={'columns'}>
                <li>
                  <a title="Email: services@vitruvian.tech" href="mailto:services@vitruvian.tech?subject=<VitruvianTech>%20Connect">
                    <i className="fa fa-envelope"/> services@vitruvian...
                  </a>
                </li>
                <li>
                  <a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/> +1 (646) 204-1732
                  </a>
                </li>
                <li>
                  <a title="Facebook: @VitruvianTechTV" href="https://www.facebook.com/VitruvianTechTV" target="_blank">
                    <i className="fa fa-facebook-official"/> @VitruvianTechTV
                  </a>
                </li>
                <li>
                  <a title="GitHub: VitruvianTech" href="https://github.com/VitruvianTech" target="_blank">
                    <i className="fa fa-github"/> VitruvianTech
                  </a>
                </li>
                <li>
                  <a title="Twitter: @VitruvianTechTV" href="https://twitter.com/VitruvianTechTV" target="_blank">
                    <i className="fa fa-twitter"/> @VitruvianTechTV
                  </a>
                </li>
                <li>
                  <a title="LinkedIn: VitruvianTech" href="https://www.linkedin.com/company/vitruvian-technology-corp." target="_blank">
                    <i className="fa fa-linkedin-square"/> VitruvianTech
                  </a>
                </li>
                <li>
                  <a title="Instagram: @VitruvianTechTV" href="https://www.instagram.com/VitruvianTechTV" target="_blank">
                    <i className="fa fa-instagram"/> @VitruvianTechTV
                  </a>
                </li>
                <li>
                  <a title="AngelList: VitruvianTech" href="https://angel.co/vitruvian-technology-1" target="_blank">
                    <i className="fa fa-angellist"/> VitruvianTech
                  </a>
                </li>
                <li style={{ marginLeft: '6px' }} className={'more'} data-next="Headquarters"/>
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
                  <small><i className="fa fa-clock-o"/> <strong>10am-6pm (EDT)</strong></small>
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
