import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import NukaCarousel from 'nuka-carousel';
import {VelocityTransitionGroup} from 'velocity-react';
import {Page} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import {Footer} from '@vitruvian-tech/machete-bundle/components/layout';

const SECTIONS = ['home', 'missions', 'services', 'leadership', 'virtues', 'network', 'plans', 'rates', 'hosting', 'communications', 'headquarters'];

@connect(state => {
  const section = Math.max(SECTIONS.indexOf(state['@machete-platform/core-bundle'].Router.params.section), 0);
  const { header = 0, slide = 0 } = state['@machete-platform/core-bundle'].Transition;
  return { header, slide, section };
}, {transition})

export default class extends Page {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    header: PropTypes.number.isRequired,
    slide: PropTypes.number.isRequired,
    classNames: PropTypes.object,
    section: PropTypes.number.isRequired
  };

  static defaultProps = {
    className: '',
    classNames: {}
  };

  state = {
    animating: false
  };

  transition = (type, index) => this.props[type] === index ? Promise.resolve() : this.props.transition({ [type]: index });

  afterSlide = header => this.transition('slide', 0).then(() => this.transition('header', header));

  begin = () => this.setState({ animating: true });

  complete = () => this.setState({ animating: false });

  render() {
    const { headers, sections, section, className, classNames = {}, header } = this.props;
    const { animating } = this.state;
    const single = headers.length === 1;

    return (
        <Page className={`${className} ${animating ? `${classNames.animating || ''} animating` : ''}`} {...this.props}>
          {headers.length ? (
              <section className={`${single ? 'single' : ''} header container`}>
                {single ? headers : (
                    <NukaCarousel initialSlideWidth={970} afterSlide={this.afterSlide} slideIndex={header}>
                      {headers}
                    </NukaCarousel>
                )}
              </section>
          ) : <span/>}
          <section className="section container">
            <VelocityTransitionGroup enter={{ easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.fadeIn', duration: 750, begin: this.begin, complete: this.complete }}>
              {!section ? sections : sections[section]}
            </VelocityTransitionGroup>
          </section>
          <Footer/>
        </Page>
    );
  }
}
