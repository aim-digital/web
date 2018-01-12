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
        <h2>{post.tagline}</h2>
        <p>{post.summary}</p>
      </Section>
    );
  }
}
