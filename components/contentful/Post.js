import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class extends Component {
  static propTypes = {
    className: PropTypes.string,
    post: PropTypes.object
  };

  static defaultProps = {
    className: ''
  };

  render() {
    const {className, post} = this.props;
    return (
      <section className={`post ${className}`}>
        <h1>{post.title}</h1>
        <h2>{post.tagline}</h2>
        <p>{post.summary}</p>
      </section>
    );
  }
}
