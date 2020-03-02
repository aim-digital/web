import React from 'react';
import ReactGA from 'react-ga';
import {Header} from '@fox-zero/web/components/layout';

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
                  <a title="Email: hello@foxzero.io" href="mailto:hello@foxzero.io?subject=Hello!">
                    <i className="fa fa-envelope"/> hello@foxzero.io
                  </a>
                </li>
                <li>
                  <a title="Phone/SMS: +1 (855) FOX-ZERO" href="tel:+18553699376" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/> +1 (855) FOX-ZERO
                  </a>
                </li>
                <li>
                  <a title="Facebook: @fox.zero.agency" href="https://www.facebook.com/fox.zero.agency" target="_blank">
                    <i className="fa fa-facebook-official"/> @fox_zero_agency
                  </a>
                </li>
                <li>
                  <a title="GitHub: Fox Zero™" href="https://github.com/fox-zero" target="_blank">
                    <i className="fa fa-github"/> FoxZero™ Digital
                  </a>
                </li>
                <li>
                  <a title="Twitter: @fox_zero_agency" href="https://twitter.com/fox_zero_agency" target="_blank">
                    <i className="fa fa-twitter"/> @fox_zero_agency
                  </a>
                </li>
                <li>
                  <a title="LinkedIn: Fox Zero™" href="https://www.linkedin.com/company/fox-zero" target="_blank">
                    <i className="fa fa-linkedin-square"/> Fox Zero™
                  </a>
                </li>
                <li>
                  <a title="Instagram: @fox_zero_agency" href="https://www.instagram.com/fox_zero_agency" target="_blank">
                    <i className="fa fa-instagram"/> @fox_zero_agency
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
                  <small><a title="Phone/SMS: +1 (855) FOX-ZERO" href="tel:+18553699376" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/> <strong>+1 (855) FOX-ZERO</strong>
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
