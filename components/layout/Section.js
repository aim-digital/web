import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import {open} from '@fox-zero/web/actions/Solution';
import {Section} from '@boilerplatejs/core/components/layout';
import {Solution} from '@fox-zero/web/components/buttons';
import * as analytics from '@fox-zero/web/lib/analytics';
import marked from 'marked';

@connect(state => ({sources: state['@boilerplatejs/core'].Transition['analytics.sources']}), {transition, load, open})

export default class extends Section {
  static propTypes = {
    children: PropTypes.any,
    sources: PropTypes.any,
    transition: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    solution: PropTypes.object,
    title: PropTypes.any,
    right: PropTypes.bool
  };

  openSolution = async () => {
    const { load, open, solution, sources, transition } = this.props;
    const { slug, section, media } = solution;
    analytics.Section.Page.Click.track(section, sources);
    (new Image()).src = media[0].url;
    transition('modal.open', true);
    open({ ...solution, ...{ sources: (sources || []).concat(['Section.Page.Click']) }, ...await load('posts', { slug: encodeURIComponent(slug) }) });
  };

  render() {
    const { children, solution, title, right } = this.props;
    const headerClass = right ? 'text-right' : '';

    return (
      <Section>
        <h2 className={headerClass}>{solution.section}</h2>
        <h3 className={`${headerClass} ${solution.slug}-header`}><span>{title || solution.title}</span></h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <p><span>{solution.summary}</span></p>
              {children || <>
                {(solution.content || []).map((content, i) => {
                  return <Fragment key={`page-content-${i}`}>
                    {content.type === 'paragraph' && <div className="paragraph" dangerouslySetInnerHTML={{ __html: marked(content.copy) }} />}
                    {content.type === 'image' && <div className="image"><img alt={content.value} src={content.url || content.media[0].url} />{content.value ? <div>{content.value}</div> : <></>}</div>}
                  </Fragment>
                })}
              </>}
              <div>
                <Solution
                  onClick={this.openSolution}
                  icon={solution.icon}
                  tooltip="Click to learn more">
                  {solution.cta || 'Read more'} about our<br /><span>{solution.ctaCategory || [solution.section.toLowerCase(), solution.category.toLowerCase()].join(' ')}</span>
                </Solution>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
