import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
// import ReactGA from 'react-ga';
import {Header} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

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
        <Header timer={timer}
          runOnMount={__CLIENT__}
          className={slide}
          onTransitionComplete={this.transitionComplete}
          onTransitionBegin={this.transitionBegin}
          images={solutions.map(solution => solution.media[0].url)}>
          {[
            <>100% Power<br />Every Hour</>,
            <>Full Service<br />Digital Agency</>,
            <>Long-Term<br />Support</>,
            <>Introducing<br />FAST™ PLM</>,
            <>Velocity™<br />Plan Pricing</>,
            <>Wingman™<br />Double Coverage</>,
            <>FoxZero™ JIRA<br />Tracker</>,
            <>Point &amp; Pay™<br />Sprint Pricing</>
          ].map((title, i) => renderTitle(i, content, title))}
        </Header>
    );
  }
}
