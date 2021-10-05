import React, { Fragment } from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Section} from '@boilerplatejs/core/components/layout';
import marked from 'marked';

@connect(state => ({ content: state['@boilerplatejs/strapi'].Entry.content }))
export default class extends Section {
  static propTypes = {
    content: PropTypes.object
  };

  render() {
    const { content: { content } } = this.props;

    return (
      <Section>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              {(content || []).map((content, i) => {
                return <Fragment key={`page-content-${i}`}>
                  {content.type === 'paragraph' && <div className="paragraph" dangerouslySetInnerHTML={{ __html: marked(content.copy) }} />}
                  {content.type === 'image' && <div className="image"><img alt={content.value} src={content.url || content.media[0].url} />{content.value ? <div>{content.value}</div> : <></>}</div>}
                </Fragment>
              })}
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
