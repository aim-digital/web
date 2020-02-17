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

const HEADER_TIMER = 10;

const SOLUTION_DELAY = 100;
const SOLUTION_AVG = solutions.length / 2;

const PARALLAX_SCALE = 750;
const PARALLAX_SPEED = 0.2;

const RE_SECTION_KEY = /.*\:(.*)$/;
const SECTION_OFFSET = 250;
const SECTION_DEFAULT = 'consulting';
const SECTION_FORM = 6;
const SECTIONS = {
  'consulting': { slide: 0 },
  'development': { slide: 1 },
  'maintenance': { slide: 2 },
  'strategy': { slide: 3 },
  'subscription': { slide: 4 },
  'warranty': { slide: 5 },
  'on-demand': { slide: 6 },
  'process': { slide: 7 }
};

@connect(state => {
  const { slide = 0 } = state['@boilerplatejs/core'].Transition;
  const { current: solution = null } = state['@fox-zero/web'].Solution;
  return ({
    param: state.router.params,
    slide, query: state.router.location.query,
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
    section: PropTypes.string
  };

  static defaultProps = {
    className: '',
    classNames: {},
    solution: null
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
      const { elements } = this;
      const { app, parallax } = elements;
      document.querySelector('#app .nav + .page').addEventListener('click', this.props.dismiss);
      app.classList.add('home');
      parallax.addEventListener('scroll', this.onScroll = _.debounce(this.onScroll, 950, { leading: true, trailing: true }));
      global.addEventListener('resize', this.updateViewport);
      global.setTimeout(() => { this.setState({ ready: true }); }, 1000);
      this.updateViewport();
      this.cycleHeader();
    }
  }

  componentWillMount = () => {
    const { section, props } = this;
    const { transition, query } = props;
    const { detail } = query;
    const initial = section ? SECTIONS[section].slide : null;

    this.updateHeader();
    transition('slide.initial', initial);

    if (__CLIENT__) {
      if (detail || detail === null) {
        this.openSolution(solutions[initial || 0]);
      }
    } else {
      global.SLIDE_INITIAL = initial;
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
    const { transition, param } = this.props;
    const section = props.param.section;

    if (param.section !== section) {
      this.updateHeader(props);
      transition('slide.initial', section ? SECTIONS[section].slide : null);
    }
  };

  componentDidUpdate = () => {
    if (!this.positions.length) {
      this.getSectionPositions();
    }
  };

  cycleHeader = (timer = HEADER_TIMER) => {
    const { transition } = this.props;

    if (__CLIENT__) {
      transition('timer', this.sections.length > 1 ? timer : 0);
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
      // slide = SECTIONS[section || SECTION_DEFAULT].slide;
      slide = section ? SECTIONS[section].slide : (props.slide === this.length - 1 ? 0 : props.slide + 1);
    }

    this.scrollTop = scrollTop;

    if (typeof slide !== 'undefined') {
      transition('slide', slide);
      this.cycleHeader(timer);
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
        <div className="left">{solutions.slice(0, SOLUTION_AVG).map(renderSolution(i => ({ delay: (5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(-200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: .8 } })))}</div>
        <div className="right">{solutions.slice(SOLUTION_AVG).map(renderSolution(i => ({ delay: (7.5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: .8 } })))}</div>
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

  get sections() {
    return this.props.sections.filter(this.filter);
  }

  get length() {
    return this.section ? 1 : this.props.sections.length;
  }

  get content() {
    const headerClass = this.length % 2 ? 'text-right' : '';

    return (
      <section className="section">
        <h2 className={headerClass}>Content</h2>
        <h3 className={headerClass}>Channel<br />FoxStream™</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <p><span>Optimized for efficient innovation, design, development, hosting, and marketing services, we manage digital media products and web-based apps for Fortune 500 and VC-backed companies.</span></p>
              <img src="/@fox-zero/web/images/logo.png" />
              <p>With over 100 years of combined experience in the software development and digital marketing industries, our senior partners have curated a well-oiled "one-stop-shop" product lifecycle management (PLM) process, without the added weight of current industry standards.</p>
              <div>
                <Link className="link" to="/stream/music/music-tech-steven-tyler-collision-nola/5/4/2018">
                  <Solution
                    icon="television">
                    View <span>FoxStream™ TV</span>
                  </Solution>
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
    const { header, slide } = SECTIONS[props.section || props.param.section] || SECTIONS[SECTION_DEFAULT];
    transition('header', header).then(() => transition('slide', slide));
    this.props.transition({ progress: 1 });
  };

  transition = (type, index) => this.props[type] === index ? Promise.resolve() : this.props.transition({ [type]: index });

  wrap = sections => sections.map((section, i) => <div key={String(i)}>{section}</div>);

  filter = component => {
    const { section } = this;
    return section ? component.key.replace(RE_SECTION_KEY, '$1').toLowerCase() === section.toLowerCase().replace('-', '') : true;
  }

  render() {
    const { props, state, sections, length } = this;
    const { className, classNames = {}, solution, close } = props;
    const { animating, contact, isMobile, isLandscape } = state;
    const { message } = state.form;
    const hasMany = sections.length > 1;
    const scale = global.innerHeight ? PARALLAX_SCALE / global.innerHeight : 1;
    const factor = offset => 1.1 + (offset * scale) + (offset * 0.4);
    const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

    const renderLayer = (index = 0, offset = 0) => (component, i) => (
      <ParallaxLayer
        className={`section-${i + index}`}
        key={`section-${i + index}`}
        offset={factor(i + index + offset)}
        factor={scale}
        speed={PARALLAX_SPEED}>
        {component}
      </ParallaxLayer>
    );

    return (
        <Page {...this.props} className={`home ${className} ${animating ? `${classNames.animating || ''} animating` : ''}`}>
          <section className="section container">
            {__CLIENT__ ? <Parallax className={`parallax ${isLandscape ? 'landscape' : ''}`} pages={factor(length + 2.35)} style={{ left: 0 }}>
              <ParallaxLayer offset={factor(0)} speed={1} style={{ backgroundColor: '#76a8c7', opacity: '.35', height: '125vh' }} />
              <ParallaxLayer offset={factor(2)} speed={1} style={{ backgroundColor: '#009fdd', opacity: '.5', height: '125vh' }} />
              <ParallaxLayer offset={factor(4)} speed={0.35} style={{ backgroundColor: '#FC6600', opacity: '.35', height: '125vh' }} />
              <ParallaxLayer offset={factor(6)} speed={1} style={{ backgroundColor: '#76a8c7', opacity: '.35', height: '125vh' }} />
              <ParallaxLayer offset={factor(8)} speed={1} style={{ backgroundColor: '#009fdd', opacity: '.5', height: '125vh' }} />
              <ParallaxLayer offset={0} speed={0} factor={10} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
              <ParallaxLayer offset={5} speed={0} factor={10} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
              <ParallaxLayer offset={10} speed={0} factor={10} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
              <ParallaxLayer offset={12} speed={0} factor={10} style={{ backgroundImage: url('stars', true), backgroundSize: 'cover' }} />
              <ParallaxLayer offset={2.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={url('earth')} style={{ width: '60%', opacity: '.8' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={6.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={url('earth')} style={{ width: '60%', opacity: '.8' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={10.5} speed={-0.4} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', pointerEvents: 'none' }}>
                <img src={url('earth')} style={{ width: '60%', opacity: '.8' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={5} speed={-0.5} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '15%', transform: 'rotate(270deg)' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={9} speed={-0.3} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '70%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={12} speed={-0.5} style={{ pointerEvents: 'none' }}>
                <img src={url('satellite4')} style={{ width: '15%', marginLeft: '15%', transform: 'rotate(270deg)' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.75} speed={0.75} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '70%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '45%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={3} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={3.6} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={4} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={5} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={5.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={6.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={7.6} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={8} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '65%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={9} speed={0.8} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={9.75} speed={0.5} style={{ opacity: 0.1 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={10.6} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={11.6} speed={0.2} style={{ opacity: 0.2 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
                <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
              </ParallaxLayer>
              <ParallaxLayer offset={12.1} speed={0.4} style={{ opacity: 0.6 }}>
                <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '65%' }} />
              </ParallaxLayer>
              <ParallaxLayer
                offset={0}
                speed={0}
                style={{ height: '100vh' }}>
                {this.header}
              </ParallaxLayer>
              {!isMobile && <ParallaxLayer
                offset={0}
                speed={-1}
                style={{ pointerEvents: 'none', zIndex: 1 }}>
                {this.solutions}
              </ParallaxLayer>}
              {sections.slice(0, hasMany ? SECTION_FORM : sections.length).map(renderLayer())}
              <ParallaxLayer
                offset={factor((hasMany ? SECTION_FORM : length) + 0.1)}
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
              {hasMany ? sections.slice(SECTION_FORM).map(renderLayer(SECTION_FORM, 0.75)) : <></>}
              <ParallaxLayer
                offset={factor(length + (hasMany ? 0.75 : 0.68))}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.content}
              </ParallaxLayer>
              <Footer/>
            </Parallax> : <>
              {this.header}
              {sections}
              {this.content}
              <Footer/>
            </>}
          </section>
          <modals.Solution show={!!solution} solution={solution || {}} onHide={close}/>
        </Page>
    );
  }
}
