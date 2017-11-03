import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Header} from '@vitruvian-tech/app-studio-vitruvian-tech/components/layout';

@connect(state => ({post: state['@vitruvian-tech/app-studio-contentful'].Entry.data}))

export default class extends Header {
  static propTypes = {
    post: PropTypes.object
  };

  render() {
    const styles = require('./Component.scss');
    const {post} = this.props;

    return (
      <Header className={styles.slide}>
        <div className={styles.title}>
          <h1>{post.title}</h1>
          <h2>{post.tagline}</h2>
        </div>
      </Header>
    );
  }
}
