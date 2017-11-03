import React, {Component} from 'react';
import {PropTypes} from 'prop-types';

export default class extends Component {
  static propTypes = {
    name: PropTypes.string,
    title: PropTypes.string
  };

  render() {
    const {name, title} = this.props;
    return (
      <div>
        <h4>{name}</h4>
        <span>{title}</span>
      </div>
    );
  }
}
