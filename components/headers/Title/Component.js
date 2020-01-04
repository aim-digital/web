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

    // ReactGA.event({
    //   category: 'Title Header',
    //   action: 'View',
    //   label: `Slide ${state.index + 1}`
    // });
  };

  renderTitle = (i, className = '', heading) => {
    const { section, icon, title, summary } = solutions[i];

    return (
      <div className={`${className} content`} key={`slide-${i}`}>
        <h1>{section}</h1>
        <h2>
          <i className={`fa fa-${icon}`}></i>
          <span>{heading || title}</span>
        </h2>
        <section className="preview">
          <p>{summary}</p>
        </section>
      </div>
    );
  };

  render() {
    const { renderTitle, props } = this;
    const { timer } = props;
    const { slide, content } = require('./Component.scss');

    return (
        <Header timer={timer} className={slide} onTransitionComplete={this.transitionComplete} onTransitionBegin={this.transitionBegin} images={IMAGES}>
          {[
            <>Full-Service<br />Digital Agency</>,
            <>100% Power<br />Every Hour</>,
            <>Introducing<br />FAST™ PLM</>,
            <>FoxZero™ JIRA<br />Tracker</>,
            <>Perfect Aim™<br />100% Guarantee</>,
            <>Velocity™<br />Subscription Plans</>
          ].map((title, i) => renderTitle(i, content, title))}
        </Header>
    );
  }
}
