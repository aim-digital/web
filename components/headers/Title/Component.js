import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import ReactGA from 'react-ga';
import {Header} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

const IMAGES = [
  require('./images/S1-BT782_panmkt_M_20190124042812.jpg'),
  require('./images/thynks-full-service-agency_0000s_0000_bigstock-Artist-Photographer-Retouches-91840682.png'),
  require('./images/20th-Sept-1200x540-Blog-Featured-Image.jpg'),
  require('./images/istockphoto-995684292-612x612.jpg'),
  require('./images/Insurance-Umbrella-Broker-16.9.jpg'),
  require('./images/1540844130883.jpg')
];

@connect(state => ({ timer: state['@boilerplatejs/core'].Transition.timer }))

export default class extends Header {
  static propTypes = {
    timer: PropTypes.number
  };

  static defaultProps = {
    timer: 0
  };

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
    const { timer } = this.props;
    const styles = require('./Component.scss');

    return (
        <Header timer={timer} className={styles.slide} onTransitionComplete={this.transitionComplete} onTransitionBegin={this.transitionBegin} images={IMAGES}>
          {[
            <div className={[styles.content, 'content'].join(' ')} key="slide-0">
              <h3>
                <i className={`fa fa-${solutions[0].icon}`}></i>
                <span>Full-Service<br />Digital Agency</span>
              </h3>
              <section className={['preview'].join(' ')}>
                <p>{solutions[0].summary}</p>
                {/* <VelocityTransitionGroup enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.shrinkIn', duration: 750 }}>
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
                </VelocityTransitionGroup> */}
              </section>
            </div>,

            <div className={[styles.content, 'content'].join(' ')} key="slide-1">
              <h3>
                <i className={`fa fa-${solutions[1].icon}`}></i>
                <span>100% Power<br />Every Hour</span>
              </h3>
              <section className={['preview'].join(' ')}>
                <p>{solutions[1].summary}</p>
              </section>
            </div>,

            <div className={[styles.content, 'content'].join(' ')} key="slide-2">
              <h3>
                <i className={`fa fa-${solutions[2].icon}`}></i>
                <span>Introducing<br />FAST™ PLM</span>
              </h3>
              <section className={['preview'].join(' ')}>
                <p>{solutions[2].summary}</p>
              </section>
            </div>,

            <div className={[styles.content, 'content'].join(' ')} key="3">
              <h3>
                <i className={`fa fa-${solutions[3].icon}`}></i>
                <span>FoxZero™ JIRA<br />Tracker</span>
              </h3>
              <section className={['preview'].join(' ')}>
                <p>{solutions[3].summary}</p>
              </section>
            </div>,

            <div className={[styles.content, 'content'].join(' ')} key="slide-4">
              <h3>
                <i className={`fa fa-${solutions[4].icon}`}></i>
                <span>Perfect Aim™<br />100% Guarantee</span>
              </h3>
              <section className={['preview'].join(' ')}>
                <p>{solutions[4].summary}</p>
              </section>
            </div>,

            <div className={[styles.content, 'content'].join(' ')} key="slide-5">
              <h3>
                <i className={`fa fa-${solutions[5].icon}`}></i>
                <span>Velocity™<br />Subscription Plans</span>
              </h3>
              <section className={['preview'].join(' ')}>
                <p>{solutions[5].summary}</p>
                {/* <ul>
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
                </ul> */}
              </section>
            </div>
          ]}
        </Header>
    );
  }
}
