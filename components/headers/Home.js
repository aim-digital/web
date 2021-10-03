import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Header} from '@fox-zero/web/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import {open} from '@fox-zero/web/actions/Solution';
import {solutions} from '@fox-zero/web/data';
import * as analytics from '@fox-zero/web/lib/analytics';

@connect(state => ({
  timer: state['@boilerplatejs/core'].Transition.timer,
  slide: state['@boilerplatejs/core'].Transition.slide,
  sources: state['@boilerplatejs/core'].Transition['analytics.sources'],
  impression: state['@boilerplatejs/core'].Transition['page.impression']
}), {load, open, transition})

export default class extends Header {
  static propTypes = {
    timer: PropTypes.number,
    sources: PropTypes.any,
    slide: PropTypes.number,
    impression: PropTypes.bool,
    load: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    transition: PropTypes.func.isRequired
  };

  static defaultProps = {
    timer: 0,
    slide: 0
  };

  state = {
    loading: false
  };

  impressions = [];

  openSolution = async (solution) => {
    const { load, open, transition, sources } = this.props;
    const { slug, section, media } = solution;
    let entry;
    transition('timer.pause', true);
    analytics.Section.Header.Click.track(section, sources);
    this.setState({ loading: true });
    (new Image()).src = media[0].url;
    entry = await load('posts', { slug: encodeURIComponent(slug) });
    this.setState({ loading: false });
    transition('modal.open', true);
    open({ ...solution, ...{ sources: (sources || []).concat(['Section.Header.Click']) }, ...entry });
  };

  transitionBegin = () => {};

  transitionComplete = () => {
    const { impressions, props } = this;
    const { impression, slide, sources } = props;

    if (!impression && !impressions[slide]) {
      impressions[slide] = true;
      analytics.Section.Header.Impression.track(solutions[slide].section, sources);
    }
  };

  renderTitle = (i, heading) => {
    const { loading } = this.state;
    const solution = solutions[i];
    const { section, title, summary, slug } = solution;

    return (
      <div className="content" key={`slide-${i}`}>
        <h1>{section}</h1>
        <h2 className={`${slug}-header`}><span>{heading || title}</span></h2>
        <section className="preview">
          <button onClick={() => this.openSolution(solution)} title="Click to learn more">
            <i className={`fa fa-ellipsis-h ${loading ? 'loading' : ''}`}/>
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

    return (
        <Header timer={timer}
          runOnMount={__CLIENT__}
          onTransitionComplete={this.transitionComplete}
          onTransitionBegin={this.transitionBegin}
          images={solutions.map(solution => solution.media[0].url)}>
          {[
            <>Zero Latency<br />Software Agency</>,
            <>Top Tier<br />Engineers</>,
            <>Managed Chaos,<br />Timeboxed.</>,
            <>SQUAD™ Pricing</>,
            <>Wingman™ Bond<br />Protection</>,
            <>Talk to Me.</>
          ].map((title, i) => renderTitle(i, title))}
        </Header>
    );
  }
}
