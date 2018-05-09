import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Section} from '@machete-platform/core-bundle/components/layout';

@connect(state => ({post: state['@machete-platform/contentful-bundle'].Entry.data}))

export default class extends Section {
  static propTypes = {
    post: PropTypes.object
  };

  render() {
    const {post} = this.props;

    return (
      <Section className={`post`}>
        <h3>{post.title}</h3>
        <h2>{post.tagline}</h2>
        <p className="humility">{post.summary}</p>
      </Section>
    );
  }
}
