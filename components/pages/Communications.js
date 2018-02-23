import React, {Component} from 'react';
import Home from './Home';

export default class extends Home {
  render() {
    return <Home section="communications" {...this.props} hide/>;
  }
}
