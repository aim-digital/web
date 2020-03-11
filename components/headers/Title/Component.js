import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
// import ReactGA from 'react-ga';
import {Header} from '@fox-zero/web/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import {open} from '@fox-zero/web/actions/Solution';
import {solutions} from '@fox-zero/web/data';

@connect(state => ({ timer: state['@boilerplatejs/core'].Transition.timer }), {load, open, transition})

export default class extends Header {
  static propTypes = {
    timer: PropTypes.number,
    load: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    transition: PropTypes.func.isRequired
  };

  static defaultProps = {
    timer: 0
  };

  state = {
    loaded: false
  };

  openSolution = async (solution) => {
    const { load, open, transition } = this.props;
    const { slug } = solution;
    await transition('timer.pause', true);
    open({ ...solution, ...await load('posts', { slug: encodeURIComponent(slug), published: true }) });
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
    const solution = solutions[i];
    const { section, title, summary } = solution;

    return (
      <div className={`${className} content`} key={`slide-${i}`}>
        <h1>{section}</h1>
        <h2>{heading || title}</h2>
        <section className="preview">
          <button onClick={() => this.openSolution(solution)} title="Click to open overlay screen">
            <i className="fa fa-ellipsis-h"/>
            <span>Read <span>More</span></span>
          </button>
          <div/>
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
            <>Hosting, LTS,<br />Monitoring</>,
            <>Introducing<br />FAST™ PLM</>,
            <>Velocity™<br />Plan Pricing</>,
            <>Wingman™<br />Surety Coverage</>,
            <>Point &amp; Pay™<br />Sprint Pricing</>,
            <>Tactical Project<br />Management</>
          ].map((title, i) => renderTitle(i, content, title))}
        </Header>
    );
  }
}
