import _ from 'lodash';
import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Page} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {dismiss} from '@fox-zero/web/actions/Nav';
import {open, close} from '@fox-zero/web/actions/Solution';
import {Footer} from '@fox-zero/web/components/layout';
import {Solution} from '@fox-zero/web/components/buttons';
import {update} from '@boilerplatejs/hubspot/actions/Contact';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import * as modals from '@fox-zero/web/components/modals';
import * as forms from '@boilerplatejs/core/components/forms';
import ReactGA from 'react-ga';
import {solutions} from '@fox-zero/web/data';
import {Parallax, ParallaxLayer} from '@react-spring/addons/parallax.cjs';

const HEADER_TIMER = 20;

const SOLUTION_DELAY = 100;
const SOLUTION_AVG = solutions.length / 2;

const PARALLAX_SCALE = 850;
const PARALLAX_SPEED = 0.2;

const RE_SECTION_KEY = /.*\:(.*)$/;
const SECTION_OFFSET = 250;
const SECTION_DEFAULT = 'services';
const SECTIONS = {
  services: { slide: 0 },
  value: { slide: 1 },
  strategy: { slide: 2 },
  process: { slide: 3 },
  warranty: { slide: 4 },
  pricing: { slide: 5 }
};

@connect(state => {
  const { slide = 0 } = state['@boilerplatejs/core'].Transition;
  const { current: solution = null } = state['@fox-zero/web'].Solution;
  return ({
    param: state.router.params,
    slide, query: state.router.location.query,
    initial: state['@boilerplatejs/core'].Transition['slide.initial'],
    solution
  });
}, {transition, dismiss, update, load, open, close})

export default class extends Page {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    dismiss: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    close: PropTypes.func.isRequired,
    classNames: PropTypes.object,
    solution: PropTypes.object,
    param: PropTypes.object,
    query: PropTypes.object,
    slide: PropTypes.number.isRequired,
    initial: PropTypes.any,
    section: PropTypes.string
  };

  static defaultProps = {
    className: '',
    classNames: {},
    solution: null,
    initial: null
  };

  state = {
    animating: false,
    contact: null,
    isMobile: true,
    isLandscape: false,
    ready: false,
    form: {
      message: null
    }
  };

  positions = [];
  scrollTop = 0;

  componentDidMount = () => {
    if (__CLIENT__) {
      const { props, elements } = this;
      const { transition } = props;
      const { app, parallax } = elements;
      document.querySelector('#app .nav + .page').addEventListener('click', this.props.dismiss);
      app.classList.add('home');
      parallax.addEventListener('scroll', this.onScroll = _.debounce(this.onScroll, 1000, { leading: true }));
      global.addEventListener('resize', this.updateViewport);
      global.setTimeout(() => { this.setState({ ready: true }); }, 1000);
      this.updateViewport();
      transition('timer', HEADER_TIMER);
    }
  }

  componentWillMount = () => {
    const { detail: index } = this.props.query;
    const detail = solutions[index];

    this.updateHeader();

    if (__CLIENT__) {
      if (detail) {
        this.openSolution(detail);
      }
    }
  };

  componentWillUnmount = () => {
    if (__CLIENT__) {
      const { app, parallax } = this.elements;
      document.querySelector('#app .nav + .page').removeEventListener('click', this.props.dismiss);
      this.props.transition({ progress: 0.2 });
      app.classList.remove('home');
      parallax.removeEventListener('scroll', this.onScroll);
      global.removeEventListener('resize', this.updateViewport);
    }
  }

  componentWillUpdate = props => {
    const { section } = this;
    const { transition, initial, param } = this.props;

    if (initial !== props.initial)
      transition('slide.initial', section ? SECTIONS[section].slide : null);

    if (param.section !== props.param.section)
      this.updateHeader(props);
  };

  componentDidUpdate = () => {
    if (!this.positions.length) {
      this.getSectionPositions();
    }
  };

  getSectionPositions = () => {
    const { length, elements } = this;
    const { parallax } = elements;

    for (let i = 0; i < length; i++)
      this.positions[i] = parallax.querySelector(`.section-${i}`).getBoundingClientRect().top - global.innerHeight - (i * SECTION_OFFSET);
  };

  onScroll = () => {
    const { positions, elements, section, props } = this;
    const { length } = positions;
    const { transition } = props;
    const { parallax: { scrollTop } } = elements;
    const first = positions[0];
    let timer, slide;

    if (scrollTop >= first) {
      timer = 0;

      for (let i = 0; i < length; i++)
        if (scrollTop >= positions[i])
          slide = section ? SECTIONS[section].slide : i;
    } else if (this.scrollTop >= first) {
      timer = HEADER_TIMER;
      slide = SECTIONS[section || SECTION_DEFAULT].slide;
    }

    this.scrollTop = scrollTop;

    if (typeof slide !== 'undefined') {
      transition('slide', slide);
      transition('timer', timer);
    }
  };

  get elements() {
    const { slide } = this.props;
    const app = document.querySelector('#app');
    const parallax = app.querySelector('.section.container > .parallax');
    const section = parallax.querySelector(`.section-${slide}`);
    return { app, parallax, section };
  }

  get solutions() {
    const { renderSolution } = this;

    return (
      <section className="solutions">
        <div className="left">{solutions.slice(0, SOLUTION_AVG).map(renderSolution(i => ({ delay: (5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(-200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: .75 } })))}</div>
        <div className="right">{solutions.slice(SOLUTION_AVG).map(renderSolution(i => ({ delay: (7.5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: .75 } })))}</div>
      </section>
    );
  }

  get header() {
    const { headers } = this.props;
    const single = headers.length === 1;

    return headers.length ? (
      <section className={`${single ? 'single' : ''} header container`}>
        {single ? headers : (headers[0])}
      </section>
    ) : <span/>;
  }

  get section() {
    const { props } = this;
    const section = props.section || props.param.section;
    return section ? (SECTIONS[section] ? section : SECTION_DEFAULT) : section;
  }

  get length() {
    return this.section ? 1 : this.props.sections.length;
  }

  get content() {
    const headerClass = this.length % 2 ? 'text-right' : '';

    return (
      <section className="section">
        <h2 className={headerClass}>Content</h2>
        <h3 className={headerClass}>FoxStream™ TV</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <img src="/@fox-zero/web/images/logo.png" />
              <p>Optimized for efficient innovation, design, development, hosting, and marketing services, we manage digital media products and web-based apps for Fortune 500 and VC-backed companies.</p>
              <div>
                <Link to="/stream/music/music-tech-steven-tyler-collision-nola/5/4/2018">
                  <i className="fa fa-television"/> <sup>Fox://</sup>Stream™ TV
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  updateViewport = () => {
    const { isLandscape: currentOrientation, ready } = this.state;
    const isLandscape = global.innerWidth > global.innerHeight;

    this.setState({ isMobile: global.innerWidth < 992, isLandscape });

    if (ready && isLandscape !== currentOrientation) {
      global.location.reload();
    }
  };

  openSolution = async (solution) => {
    const { load, open } = this.props;
    const { slug } = solution;
    open({ ...solution, ...await load('posts', { slug: encodeURIComponent(slug), published: true }) });
  };

  renderSolution = transition => (solution, i) => {
    const { slide } = this.props;
    const { ready } = this.state;

    return <Solution
      className={`${ready && slide === solution.index ? 'active' : ''}`}
      key={`detail-button-${i}`}
      icon={solution.icon}
      transition={transition(i)}
      onClick={() => {
        this.openSolution(solution);

        ReactGA.event({
          category: `Solution`,
          action: `Click`,
          label: solution.title
        });
      }}>
        <>
          <span>{solution.section} &bull;</span> {solution.title}
        </>
      </Solution>;
  }

  submit = values => {
    const { update } = this.props;
    const { email } = values;
    const ga = { category: 'Quote Form', action: 'Submit' };

    if (email) {
      ReactGA.event({ ...ga, label: `Attempt` });

      update({
        lead: true,
        newsletter: !(values.newsletter === false),
        properties: {
          email,
          message: values.comment,
          firstname: values.firstName,
          lastname: values.lastName
        }
      })
        .then(contact => this.setState({ contact, form: { message: null } }))
        .then(() => ReactGA.event({ ...ga, label: `Success` }))
        .catch(({message}) => this.setState({ form: { message } }));
    }
  };

  updateHeader = (props = this.props) => {
    const { transition } = this;
    const { header, slide } = SECTIONS[props.section || props.param.section] || SECTIONS.services;
    transition('header', header).then(() => transition('slide', slide));
    this.props.transition({ progress: 1 });
  };

  transition = (type, index) => this.props[type] === index ? Promise.resolve() : this.props.transition({ [type]: index });

  wrap = sections => sections.map((section, i) => <div key={String(i)}>{section}</div>);

  render() {
    const { className, classNames = {}, solution, close, sections } = this.props;
    const { animating, contact, isMobile, isLandscape } = this.state;
    const { section, length } = this;
    const { message } = this.state.form;
    const filter = component => section ? component.key.replace(RE_SECTION_KEY, '$1').toLowerCase() === section.toLowerCase() : true;
    const scale = global.innerHeight ? PARALLAX_SCALE / global.innerHeight : 1;
    const factor = offset => 1.1 + (offset * scale) + (offset * 0.4);
    const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

    return (
        <Page {...this.props} className={`home ${className} ${animating ? `${classNames.animating || ''} animating` : ''}`}>
          <section className="section container">
            {__CLIENT__ ? <Parallax className={`parallax ${isLandscape ? 'landscape' : ''}`} pages={factor(length + 2.3)} style={{ left: 0 }}>
              <ParallaxLayer offset={1} speed={1} style={{ backgroundColor: '#805E73' }} />
              <ParallaxLayer offset={2} speed={1} style={{ backgroundColor: '#87BCDE' }} />
              <ParallaxLayer offset={0} speed={0} factor={10} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
              <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={5} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '80%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={3.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={4} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={url('earth')} style={{ width: '60%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={6.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={url('earth')} style={{ width: '60%' }} />
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={0}
                style={{ height: '96vh' }}>
                {this.header}
              </ParallaxLayer>
              {!isMobile && <ParallaxLayer
                offset={0}
                speed={-1}
                style={{ pointerEvents: 'none', zIndex: 1 }}>
                {this.solutions}
              </ParallaxLayer>}
              {sections
                .filter(filter)
                .map((component, i) => (
                  <ParallaxLayer
                    className={`section-${i}`}
                    key={`section-${i}`}
                    offset={factor(i)}
                    factor={scale}
                    speed={PARALLAX_SPEED}>
                    {component}
                  </ParallaxLayer>
                ))}
              <ParallaxLayer
                offset={factor(length + 0.1)}
                speed={PARALLAX_SPEED}>
                <section className="quote">
                  <div>
                    <h3>Get a Free Consultation</h3>
                    <p>Say hello to our guaranteed services and fair prices!</p>
                    {contact ?
                      <div className="success"><strong>Thank you, {contact.firstname.value}, for your inquiry!</strong><br />We will contact you within 24 hours.</div> :
                      <forms.Contact quote newsletterText="Join the FoxStream™ newsletter for project management tips, industry trends, free-to-use software, and more." onSubmit={this.submit}/>}
                    {message && <div className="error">{message}</div>}
                  </div>
                </section>
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(length + 0.85)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.content}
              </ParallaxLayer>
              <Footer/>
            </Parallax> : <>
              {sections.filter(filter)}
              {this.content}
              <Footer/>
            </>}
          </section>
          <modals.Solution show={!!solution} solution={solution || {}} onHide={close}/>
        </Page>
    );
  }
}
