import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="brand">
        <div className="name">
          <span>VitruvianTech</span>
        </div>
        <div className="tagline">
          <span className="color-primary-blue">Roman</span>&nbsp;
          <span className="color-primary-green">Inspired</span>&nbsp;
          <span className="color-primary-yellow">Software</span>&nbsp;
          <span className="color-secondary-red">Designers</span>
        </div>
      </div>
    );
  }
}
