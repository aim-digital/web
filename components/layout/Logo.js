import React, {Component} from 'react';

export default class extends Component {
  render() {
    return (
      <div className="logo">
        <img className="graphic" src="/@aim-digital/web/images/logo.png" />
        <img className="text" src="/@aim-digital/web/images/Logo-05.png" />
        {/*<div>
          <img src="/@aim-digital/web/images/logo.png" />
          <div className="corporate">
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
        </div>*/}
      </div>
    );
  }
}
