import React from 'react';
import ReactGA from 'react-ga';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@fox-zero/web/components/layout';

const IMAGES = [
  require('./images/S1-BT782_panmkt_M_20190124042812.jpg'),
  require('./images/thynks-full-service-agency_0000s_0000_bigstock-Artist-Photographer-Retouches-91840682.png'),
  require('./images/1540844130883.jpg'),
  require('./images/Insurance-Umbrella-Broker-16.9.jpg'),
  require('./images/istockphoto-995684292-612x612.jpg'),
  require('./images/20th-Sept-1200x540-Blog-Featured-Image.jpg')
];

export default class extends Header {
  state = {
    loaded: false
  };

  transitionBegin = () => {
    this.setState({ loaded: false });
  };

  transitionComplete = state => {
    this.setState({ loaded: true });

    ReactGA.event({
      category: 'Title Header',
      action: 'View',
      label: `Slide ${state.index + 1}`
    });
  };

  render() {
    const styles = require('./Component.scss');

    return (
        <Header timer={20} runOnMount className={styles.slide} onTransitionComplete={this.transitionComplete} onTransitionBegin={this.transitionBegin} images={IMAGES}>
          {[
            <div className={[styles.content, 'content', styles.services].join(' ')} key="0">
              <section className={['preview'].join(' ')}>
                <h3>100% Power<br />Every Hour</h3>
                <p><strong>The high-performance/zero-latency<br />trusted digital media agency.™</strong></p>
                <VelocityTransitionGroup enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.shrinkIn', duration: 750 }}>
                  {this.state.loaded && (
                    <div className={`${styles.logo}`} style={{ position: 'static !important' }}>
                      <div className={`${styles.corporate} corporate`}>
                        <div className="name">
                          <span>VitruvianTech</span>
                        </div>
                        <div className="tagline">
                          <span className="color-primary-blue">Roman</span>&nbsp;
                          <span className="color-primary-green">Inspired</span>&nbsp;
                          <span className="color-primary-yellow">Software</span>&nbsp;
                          <span className="color-secondary-red">Designers</span>
                        </div>
                      </div>
                    </div>
                  )}
                </VelocityTransitionGroup>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.services].join(' ')} key="1">
              <section className={['preview'].join(' ')}>
                <h3>Introducing<br />FAST™ PLM</h3>
                <p>With over 100 years of combined experience in the software development and digital marketing industries, our senior partners have curated a well-oiled "one-stop-shop" product lifecycle management (PLM) process, without the added weight of current industry standards.</p>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.pricing, styles.products].join(' ')} key="2">
              <section className={['preview'].join(' ')}>
                <h3>Plans</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id est vel orci vestibulum dictum. Morbi eu vulputate velit, eu eleifend mauris. Sed luctus, lectus sit amet dapibus porttitor, ipsum purus auctor leo, eget viverra lectus nulla nec eros. Nam sed justo sagittis, tincidunt dui a, lacinia sapien.</p>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.pricing].join(' ')} key="3">
              <section className={['preview'].join(' ')}>
                <h3>Rates</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id est vel orci vestibulum dictum. Morbi eu vulputate velit, eu eleifend mauris. Sed luctus, lectus sit amet dapibus porttitor, ipsum purus auctor leo, eget viverra lectus nulla nec eros. Nam sed justo sagittis, tincidunt dui a, lacinia sapien.</p>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.pricing, styles.products].join(' ')} key="4">
              <section className={['preview'].join(' ')}>
                <h3>Hosting</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce id est vel orci vestibulum dictum. Morbi eu vulputate velit, eu eleifend mauris. Sed luctus, lectus sit amet dapibus porttitor, ipsum purus auctor leo, eget viverra lectus nulla nec eros. Nam sed justo sagittis, tincidunt dui a, lacinia sapien.</p>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.team].join(' ')} key="5">
              <section className={['preview'].join(' ')}>
                <h3>Leadership</h3>
                <ul>
                  <li>
                    <a href="mailto:pete@vitruvian.tech?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/peter-c-romano-3360b311" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <a href="https://angel.co/peteromano" target="_blank">
                      <i className="fa fa-angellist"/>
                    </a>
                    <a href="https://www.facebook.com/peteromano/" target="_blank">
                      <i className="fa fa-facebook-official"/>
                    </a>
                    <a href="https://github.com/peteromano" target="_blank">
                      <i className="fa fa-github"/>
                    </a>
                    <span>Peter C. Romano<small> / Founder</small></span>
                  </li>
                  <li>
                    <a href="mailto:reza@evolvinx.com?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/reza-khan-7b15ab9a" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Reza Khan<small> / Infrastructure</small></span>
                  </li>
                  <li>
                    <a href="mailto:pamelaschwilk@gmail.com?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pamelaschwilk/" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Pamela Schwilk<small> / Marketing</small></span>
                  </li>
                  <li>
                    <a href="http://www.pamelasisson.com/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pamelasisson/" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Pamela Sisson<small> / Design</small></span>
                  </li>
                  <li>
                    <a href="mailto:Valk82@gmail.com?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/valeria-kalaidjian-70627738/" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Valeria Kalaidjian<small> / Administration</small></span>
                  </li>
                  <li style={{'padding': '1.25em 0 0'}}>
                    <p className={'humility' + ' ' + 'instruction'}>"You just gotta show up, and be consistent. 'Perfection' is merely the <em>pursuit</em> of perfection, with quality engineered over time by a well-planned, incremental process. After all, great management leads to quality, and our objective is to secure quality for all."<i> -Peter C. Romano, Founder</i></p>
                    <p className={'humility'} style={{'margin': '0'}}><small><strong>Scroll down</strong> or <strong>swipe right</strong> to <strong>contact us</strong> today! &darr;&rarr;</small></p>
                  </li>
                  <li className={'more'} data-next="Network"/>
                </ul>
              </section>
            </div>
          ]}
        </Header>
    );
  }
}
