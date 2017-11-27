import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import Post from '@vitruvian-tech/machete-bundle/components/contentful/Post';
import {Section} from '@machete-platform/core-bundle/components/layout';

@connect(state => ({post: state['@machete-platform/contentful-bundle'].Entry.data}))

export default class extends Section {
  static propTypes = {
    post: PropTypes.object
  };

  render() {
    return (
      <Section>
        <Post {...this.props} />
      </Section>
    );
  }
}
