import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {Logo} from '@aim-digital/web/components/layout';

const SECONDS_IDLE = 60 * 15;

@connect((state, props) => ({ slide: state['@boilerplatejs/core'].Transition.slide || props.slide || 0 }), {transition})

export default class extends Header {
  static propTypes = {
    onTransitionComplete: PropTypes.func,
    onTransitionBegin: PropTypes.func,
    runOnMount: PropTypes.bool,
    timer: PropTypes.bool,
    children: PropTypes.any,
    classNames: PropTypes.object,
    slide: PropTypes.number.isRequired,
    transition: PropTypes.func.isRequired
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

  next = () => this.props.transition('slide', Math.min(this.props.slide + 1, this.props.children.length));

  previous = () => this.props.transition('slide', Math.max(this.props.slide - 1, 0));

  begin = () => {
    const { onTransitionBegin } = this.props;

    this.setState({ animating: true });

    if (onTransitionBegin) {
      onTransitionBegin(this.state);
    }
  };

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
    const { className, classNames, children, runOnMount, slide } = this.props;
    const {animating} = this.state;

    const getFlipState = (direction = 'next') => {
      return {
        disabled: (slide === children.length - 1 && direction === 'next') || (!slide && direction === 'previous')
      };
    };

    return (
      <Header className={['slide', className, animating ? `${classNames.animating || ''} animating` : ''].join(' ')}>
        <Logo/>
        {children.length ? (
          <div>
            <VelocityTransitionGroup runOnMount={runOnMount} enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.whirlIn', duration: 250, begin: this.begin, complete: this.complete }}>
              {children[slide]}
            </VelocityTransitionGroup>
            <div className="flippers">
              <button {...getFlipState('previous')} onClick={this.previous} className="flip left">&larr;</button>
              <button {...getFlipState('next')} onClick={this.next} className="flip right">&rarr;</button>
              <div className="scroll">
                <button><span/></button>
              </div>
            </div>
          </div>
        ) : children}
      </Header>
    );
  }
}
