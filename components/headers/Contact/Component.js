import React from 'react';
import ReactGA from 'react-ga';
import {Header} from '@aim-digital/web/components/layout';

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
      <Header className={styles.slide} onTransitionComplete={this.transitionComplete} images={[map, map]}>
        {[
          <div className={[styles.content, 'content', styles.links].join(' ')} key="0">
            <section className={['preview'].join(' ')}>
              <h3>Communications</h3>
              <ul className={'columns'}>
                <li>
                  <a title="Email: hello@aimdigital.media" href="mailto:hello@aimdigital.media?subject=Hello!">
                    <i className="fa fa-envelope"/> hello@aimdigital...
                  </a>
                </li>
                <li>
                  <a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/> +1 (646) 204-1732
                  </a>
                </li>
                <li>
                  <a title="Facebook: @AIMDigitalTV" href="https://www.facebook.com/AIMDigitalTV" target="_blank">
                    <i className="fa fa-facebook-official"/> @AIMDigitalTV
                  </a>
                </li>
                <li>
                  <a title="GitHub: AIM™ Digital" href="https://github.com/AIM-Digital" target="_blank">
                    <i className="fa fa-github"/> AIM™ Digital
                  </a>
                </li>
                <li>
                  <a title="Twitter: @AIMDigitalTV" href="https://twitter.com/AIMDigitalTV" target="_blank">
                    <i className="fa fa-twitter"/> @AIMDigitalTV
                  </a>
                </li>
                <li>
                  <a title="LinkedIn: AIM™" href="https://www.linkedin.com/company/american-interactive-media" target="_blank">
                    <i className="fa fa-linkedin-square"/> AIM™
                  </a>
                </li>
                <li>
                  <a title="Instagram: @AIMDigitalTV" href="https://www.instagram.com/AIMDigitalTV" target="_blank">
                    <i className="fa fa-instagram"/> @AIMDigitalTV
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
