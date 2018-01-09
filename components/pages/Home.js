import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {VelocityTransitionGroup} from 'velocity-react';
import {Page} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import {Footer} from '@vitruvian-tech/machete-bundle/components/layout';
import NukaCarousel from 'nuka-carousel';

const SECTIONS = {
  home: { index: 0, header: 0, slide: 0, param: '', next: 'missions' },
  missions: { index: 1, header: 0, slide: 1, param: 'missions', next: 'services', prev: 'home' },
  services: { index: 2, header: 0, slide: 2, param: 'services', next: 'plans', prev: 'missions' },
  plans: { index: 3, header: 0, slide: 3, param: 'plans', next: 'rates', prev: 'services' },
  rates: { index: 4, header: 0, slide: 4, param: 'rates', next: 'hosting', prev: 'plans' },
  hosting: { index: 5, header: 0, slide: 5, param: 'hosting', next: 'leadership', prev: 'rates' },
  leadership: { index: 6, header: 0, slide: 6, param: 'leadership', next: 'network', prev: 'hosting' },
  network: { index: 7, header: 0, slide: 7, param: 'network', next: 'communications', prev: 'leadership' },
  communications: { index: 8, header: 1, slide: 0, param: 'communications', next: 'headquarters', prev: 'network' },
  headquarters: { index: 9, header: 1, slide: 1, param: 'headquarters', prev: 'communications' }
};

@connect(state => {
  const { header = 0, slide = 0 } = state['@machete-platform/core-bundle'].Transition;
  return ({ param: state.router.params, header, slide });
}, {transition})

export default class extends Page {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    classNames: PropTypes.object,
    param: PropTypes.object,
    header: PropTypes.number.isRequired,
    slide: PropTypes.number.isRequired,
    section: PropTypes.string
  };

  static defaultProps = {
    className: '',
    classNames: {}
  };

  state = {
    animating: false
  };

  componentWillMount = () => this.updateHeader();

  componentWillUpdate = props => {
    if (this.props.param.section != props.param.section) {
      this.updateHeader(props);
    }
  };

  updateHeader = (props = this.props) => {
    const { transition } = this;
    const { header, slide } = SECTIONS[props.section || props.param.section] || SECTIONS.home;
    transition('header', header).then(() => transition('slide', slide));
  };

  transition = (type, index) => this.props[type] === index ? Promise.resolve() : this.props.transition({ [type]: index });

  afterSlide = header => this.transition('slide', 0).then(() => this.transition('header', header));

  begin = () => this.setState({ animating: true });

  complete = () => this.setState({ animating: false });

  wrap = sections => sections.map((section, i) => <div key={String(i)}>{section}</div>);

  render() {
    const { headers, sections, className, classNames = {}, param, header, section } = this.props;
    const { animating } = this.state;
    const single = headers.length === 1;
    const { index, prev, next } = SECTIONS[section || param.section] || SECTIONS.home;

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
          <section className="section container" style={{ minHeight: '90px', position: 'relative', display: 'none' }}>
            <VelocityTransitionGroup enter={{ easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.fadeIn', duration: 750, begin: this.begin, complete: this.complete }}>
              {this.wrap(sections)[section ? 0 : index]}
            </VelocityTransitionGroup>
            <div style={{ position: 'absolute', bottom: '0' }}>
              {prev && <Link to={`/home/${SECTIONS[prev].param}`}>&larr; Previous</Link>} {next && <Link to={`/home/${SECTIONS[next].param}`}>Next &rarr;</Link>}
            </div>
          </section>
          <Footer/>
        </Page>
    );
  }
}
