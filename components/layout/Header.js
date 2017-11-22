import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@vitruvian-tech/app-studio-core/components/layout';

const SECONDS_IDLE = 60 * 15;

export default class extends Header {
  static propTypes = {
    onTransitionComplete: PropTypes.func,
    runOnMount: PropTypes.bool,
    timer: PropTypes.bool,
    children: PropTypes.any,
    classNames: PropTypes.object
  };

  static defaultProps = {
    className: '',
    classNames: {},
    runOnMount: false
  };

  state = {
    index: 0,
    animating: true
  };

  timer = null;

  clearTimer = () => {
    window.clearTimeout(this.timer);
    this.timer = null;
    return this;
  };

  startTimer = () => {
    this.timer = setTimeout(this.next.bind(this), SECONDS_IDLE * 1000);
    return this;
  };

  next = () => this.setState({index: Math.min(this.state.index + 1, 6)});

  previous = () => this.setState({index: Math.max(this.state.index - 1, 0)});

  begin = () => this.setState({ animating: true });

  complete = () => {
    const { timer, onTransitionComplete } = this.props;

    this.setState({ animating: false });

    if (timer) {
      this.clearTimer().startTimer();
    }

    if (onTransitionComplete) {
      onTransitionComplete(this.state);
    }
  };

  render() {
    const { className, classNames, children, runOnMount } = this.props;
    const {index, animating} = this.state;

    const getFlipState = (direction = 'next') => {
      return {
        disabled: (index === children.length - 1 && direction === 'next') || (!index && direction === 'previous')
      };
    };

    return (
      <Header className={['slide', className, animating ? `${classNames.animating || ''} animating` : ''].join(' ')}>
        <div className="brand">
          <h1>VitruvianTech</h1>
          <h2>
            <span className="color-primary-blue">Sentient</span>&nbsp;
            <span className="color-primary-green">Secure</span>&nbsp;
            <span className="color-primary-yellow">Quality</span>&nbsp;
            <span><small className="color-secondary-red">for</small></span>&nbsp;
            <span className="color-secondary-red">All</span>
          </h2>
        </div>
        {children.length ? (
          <div>
            <VelocityTransitionGroup runOnMount={runOnMount} enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.whirlIn', duration: 75, begin: this.begin, complete: this.complete }}>
              {children[index]}
            </VelocityTransitionGroup>
            <div className="flippers">
              <button {...getFlipState('previous')} onClick={this.previous} className="flip left">&larr;</button>
              <button {...getFlipState('next')} onClick={this.next} className="flip right">&rarr;</button>
            </div>
          </div>
        ) : children}
      </Header>
    );
  }
}
