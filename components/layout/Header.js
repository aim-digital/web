import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {Logo} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

const PROGRESS_INCREMENT = 100;

@connect((state, props) => ({
  slide: state['@boilerplatejs/core'].Transition.slide || props.slide || 0,
  pause: state['@boilerplatejs/core'].Transition['timer.pause'],
  initial: state['@boilerplatejs/core'].Transition['slide.initial']
}), {transition})

export default class extends Header {
  static propTypes = {
    onTransitionComplete: PropTypes.func,
    onTransitionBegin: PropTypes.func,
    runOnMount: PropTypes.bool,
    cycle: PropTypes.bool,
    pause: PropTypes.bool,
    timer: PropTypes.number,
    children: PropTypes.any,
    classNames: PropTypes.object,
    slide: PropTypes.number.isRequired,
    initial: PropTypes.any,
    transition: PropTypes.func.isRequired,
    images: PropTypes.array
  };

  static defaultProps = {
    className: '',
    classNames: {},
    runOnMount: false,
    cycle: false,
    images: [],
    timer: 0,
    initial: null,
    pause: false
  };

  state = {
    index: 0,
    previous: undefined,
    animating: true
  };

  timer = null;
  progress = null;

  componentWillUnmount() {
    this.setState({ animating: false, index: 0, previous: undefined });
    this.clearTimer();
  }

  componentDidUpdate() {
    if (this.props.pause) {
      this.clearTimer();
    } else {
      this.resetTimer();
    }
  }

  componentWillReceiveProps(next) {
    const { slide } = this.props;

    if (!this.state.animating) {
      this.setState({ previous: slide !== next.slide ? slide : undefined });
    }
  }

  resetTimer = () => {
    this.clearTimer();

    if (this.props.timer) {
      this.startTimer();
    }
  };

  getElements = () => {
    const { slide, initial } = this.props;
    const app = document.querySelector('#app');
    const parallax = app.querySelector('.section.container > .parallax');
    const section = parallax && parallax.querySelector(`.section-${initial === null ? slide : 0}`);
    return { app, parallax, section };
  }

  hasScroll = () => {
    const { slide, initial } = this.props;
    return (slide !== null && slide === initial) || (initial === null && this.getElements().section);
  }

  clearTimer = () => {
    if (__CLIENT__ && this.progress) {
      document.querySelector('.header.container header .preview > div').style.transform = `scale3d(0, 1, 1)`;
    }

    window.clearTimeout(this.timer);
    this.timer = null;
    window.clearInterval(this.progress);
    this.progress = null;

    return this;
  };

  startTimer = () => {
    const { timer } = this.props;
    const duration = timer * 1000;
    let progress = 0;

    this.timer = setTimeout(this.next.bind(this), duration);

    if (__CLIENT__) {
      const bar = document.querySelector('.header.container header .preview > div');

      this.progress = setInterval(() => {
        progress += PROGRESS_INCREMENT;
        bar.style.transform = `scale3d(${Math.min(progress / duration, 95)}, 1, 1)`;

        if (progress >= duration) {
          window.clearInterval(this.progress);
          this.progress = null;
        }
      }, PROGRESS_INCREMENT);
    }

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

  scrollTo = () => {
    const OFFSET = 250;
    const { slide, initial } = this.props;
    const { app, parallax, section } = this.getElements();
    const top = section.getBoundingClientRect().top - OFFSET - (initial === null ? slide * OFFSET : 0);

    if (app.scrollTo) {
      app.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      parallax && parallax.scrollTo({ top, left: 0, behavior: 'smooth' });
    } else {
      app.scrollTop = 0;
      parallax && (parallax.scrollTop = top);
    }
  };

  render() {
    const { className, classNames, children, runOnMount, slide, images, cycle, initial: initialSlide } = this.props;
    const { animating, previous } = this.state;
    const { length } = children;
    const initial = global.SLIDE_INITIAL || initialSlide || 0;

    const getFlipState = (direction = 'next') => {
      return {
        disabled: cycle && ((slide === children.length - 1 && direction === 'next') || (!slide && direction === 'previous'))
      };
    };

    return (
      <Header className={['slide', className, length && animating ? `${classNames.animating || ''} animating` : ''].join(' ')}>
        {images.map((image, i) => {
          const className = (i === (__SERVER__ ? initial : slide)) || images.length === 1 ? 'current' : i === previous ? 'previous' : '';
          return <div key={i} className={`hero ${className} hero-${i}`} style={{ opacity: 0, backgroundImage: className ? `url(${image})` : '' }}/>;
        })}
        <Logo/>
        {length ? (
          <div>
            {__SERVER__ ? children[initial] : (
              <VelocityTransitionGroup runOnMount={runOnMount} enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.whirlIn', duration: 250, begin: this.begin, complete: this.complete }}>
                {children[slide]}
              </VelocityTransitionGroup>
            )}
            <div className="flippers">
              <button {...getFlipState('previous')} onClick={this.previous} className="flip left" data-section={(solutions[!slide ? solutions.length - 1 : slide - 1]).section}>&larr;</button>
              <button {...getFlipState('next')} onClick={this.next} className="flip right" data-section={(solutions[slide === solutions.length - 1 ? 0 : slide + 1]).section}>&rarr;</button>
              <div className="scroll">
                <button disabled={__CLIENT__ && !this.hasScroll()} onClick={this.scrollTo}><span/></button>
              </div>
            </div>
          </div>
        ) : children}
      </Header>
    );
  }
}
