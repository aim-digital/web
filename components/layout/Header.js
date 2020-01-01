import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {Logo} from '@fox-zero/web/components/layout';

@connect((state, props) => ({ slide: state['@boilerplatejs/core'].Transition.slide || props.slide || 0 }), {transition})

export default class extends Header {
  static propTypes = {
    onTransitionComplete: PropTypes.func,
    onTransitionBegin: PropTypes.func,
    runOnMount: PropTypes.bool,
    cycle: PropTypes.bool,
    timer: PropTypes.number,
    children: PropTypes.any,
    classNames: PropTypes.object,
    slide: PropTypes.number.isRequired,
    transition: PropTypes.func.isRequired,
    images: PropTypes.array
  };

  static defaultProps = {
    className: '',
    classNames: {},
    runOnMount: false,
    cycle: false,
    images: []
  };

  state = {
    index: 0,
    previous: undefined,
    animating: true
  };

  timer = null;

  componentWillUnmount() {
    this.setState({ animating: false, index: 0, previous: undefined });

    if (this.props.timer) {
      this.clearTimer();
    }
  }

  componentDidUpdate() {
    if (this.props.timer) {
      this.clearTimer().startTimer();
    }
  }

  componentWillReceiveProps(next) {
    const { slide } = this.props;

    if (!this.state.animating) {
      this.setState({ previous: slide !== next.slide ? slide : undefined });
    }
  }

  clearTimer = () => {
    window.clearTimeout(this.timer);
    this.timer = null;
    return this;
  };

  startTimer = () => {
    this.timer = setTimeout(this.next.bind(this), this.props.timer * 1000);
    return this;
  };

  next = () => this.props.transition('slide', this.props.slide === this.props.children.length - 1 ? 0 : this.props.slide + 1);

  previous = () => this.props.transition('slide', this.props.slide === 0 ? this.props.children.length - 1 : this.props.slide - 1);

  begin = () => {
    const { onTransitionBegin } = this.props;

    this.setState({ animating: true });

    if (onTransitionBegin) {
      onTransitionBegin(this.state);
    }
  };

  complete = () => {
    const { onTransitionComplete } = this.props;

    this.setState({ animating: false });

    if (onTransitionComplete) {
      onTransitionComplete(this.state);
    }
  };

  get elements() {
    const { slide } = this.props;
    const app = document.querySelector('#app');
    const parallax = app.querySelector('.section.container > .parallax');
    const section = parallax.querySelector(`.section-${slide}`);
    return { app, parallax, section };
  }

  scrollTo = () => {
    const OFFSET = 250;
    const { slide } = this.props;
    const { app, parallax, section } = this.elements;
    const top = section.getBoundingClientRect().top - OFFSET - (slide * OFFSET);

    if (app.scrollTo) {
      app.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      parallax && parallax.scrollTo({ top, left: 0, behavior: 'smooth' });
    } else {
      app.scrollTop = 0;
      parallax && (parallax.scrollTop = top);
    }
  };

  render() {
    const { className, classNames, children, runOnMount, slide, images, cycle } = this.props;
    const { animating, previous } = this.state;
    const { elements } = this;

    const getFlipState = (direction = 'next') => {
      return {
        disabled: cycle && ((slide === children.length - 1 && direction === 'next') || (!slide && direction === 'previous'))
      };
    };

    return (
      <Header className={['slide', className, animating ? `${classNames.animating || ''} animating` : ''].join(' ')}>
        {images.map((image, i) => <div key={i} className={`hero ${i === slide ? 'current' : i === previous ? 'previous' : ''} hero-${i}`} style={{ opacity: 0, backgroundImage: `url(${image})` }}/>)}
        <Logo/>
        {children.length ? (
          <div>
            <VelocityTransitionGroup runOnMount={runOnMount} enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.whirlIn', duration: 250, begin: this.begin, complete: this.complete }}>
              {children[slide]}
            </VelocityTransitionGroup>
            <div className="flippers">
              <button {...getFlipState('previous')} onClick={this.previous} className="flip left">&larr;</button>
              <button {...getFlipState('next')} onClick={this.next} className="flip right">&rarr;</button>
              {elements.section && elements.section.getBoundingClientRect && <div className="scroll">
                <button onClick={this.scrollTo}><span/></button>
              </div>}
            </div>
          </div>
        ) : children}
      </Header>
    );
  }
}
