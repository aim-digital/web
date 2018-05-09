import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Section} from '@machete-platform/core-bundle/components/layout';

@connect(state => ({post: state['@machete-platform/contentful-bundle'].Entry.data}))

export default class extends Section {
  static propTypes = {
    post: PropTypes.object
  };

  renderContent = () => {
    return this.props.post.content.map((content, i) => {
      return (<div key={i} className={content.type ? `${content.type} media` : 'paragraph'}>
        {content.body && <p>{content.body}</p>}
        {content.type === 'image' && <img width="100%" src={content.url || content.file.url} />}
        {content.type === 'video' && (<video width="100%" controls>
          <source src={content.url || content.file.url} type="video/mp4" />
        </video>)}
      </div>)
    });
  };

  render() {
    const {post} = this.props;

    return (
      <Section className={`post`}>
        <h3>{post.title}</h3>
        <h2>{post.tagline}</h2>
        <p className="humility">{post.summary}</p>
        <article>
          {this.renderContent()}
        </article>
      </Section>
    );
  }
}
