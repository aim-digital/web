import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import Post from '@vitruvian-tech/app-studio-vitruvian-tech/components/contentful/Post';
import {Section} from '@vitruvian-tech/app-studio-core/components/layout';

@connect(state => ({post: state['@vitruvian-tech/app-studio-contentful'].Entry.data}))

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
