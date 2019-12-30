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

const SOLUTION_DELAY = 100;
const SOLUTION_AVG = solutions.length / 2;
const PARALLAX_SPEED = 0.2;

const SECTIONS = {
  home: { slide: 0 },
  services: { slide: 1 },
  plans: { slide: 2 },
  rates: { slide: 3 },
  hosting: { slide: 4 },
  leadership: { slide: 5 },
  communications: { slide: 0 },
  headquarters: { slide: 1 }
};

@connect(state => {
  const { slide = 0 } = state['@boilerplatejs/core'].Transition;
  const { current: solution = null } = state['@fox-zero/web'].Solution;
  return ({ param: state.router.params, slide, query: state.router.location.query, solution });
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
    section: PropTypes.string,
    hide: PropTypes.bool
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

  componentDidMount = () => {
    if (__CLIENT__) {
      document.querySelector('#app .nav + .page').addEventListener('click', this.props.dismiss);
      document.getElementById('app').classList.add('home');
      global.addEventListener('resize', this.updateViewport);
      global.setTimeout(() => { this.setState({ ready: true }); }, 1000);
      this.updateViewport();
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
      document.querySelector('#app .nav + .page').removeEventListener('click', this.props.dismiss);
      this.props.transition({ progress: 0.2 });
      document.getElementById('app').classList.remove('home');
      global.removeEventListener('resize', this.updateViewport);
    }
  }

  componentWillUpdate = props => {
    if (this.props.param.section !== props.param.section) {
      this.updateHeader(props);
    }
  };

  get solutions() {
    const { renderSolution } = this;

    return <section className="solutions">
      <div className="left">{solutions.slice(0, SOLUTION_AVG).map(renderSolution(i => ({ delay: (5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(-200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: .85 } })))}</div>
      <div className="right">{solutions.slice(SOLUTION_AVG).map(renderSolution(i => ({ delay: (7.5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: .85 } })))}</div>
    </section>;
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

  updateViewport = () => {
    const { isLandscape: currentOrientation, ready } = this.state;
    const isLandscape = global.innerWidth > global.innerHeight;

    this.setState({ isMobile: global.innerWidth < 992, isLandscape });

    if (ready && isLandscape !== currentOrientation) {
      global.location.reload();
    }
  };

  openSolution = async (solution) => {
    const { transition, load, open } = this.props;
    const { index, slug } = solution;
    transition('slide', index);
    open({ ...solution, ...await load('posts', { slug, published: true }) });
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
        {solution.title}
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
    const { header, slide } = SECTIONS[props.section || props.param.section] || SECTIONS.home;
    transition('header', header).then(() => transition('slide', slide));
    this.props.transition({ progress: 1 });
  };

  transition = (type, index) => this.props[type] === index ? Promise.resolve() : this.props.transition({ [type]: index });

  wrap = sections => sections.map((section, i) => <div key={String(i)}>{section}</div>);

  render() {
    const { className, classNames = {}, solution, close } = this.props;
    const { animating, contact, isMobile, isLandscape } = this.state;
    const { message } = this.state.form;
    const scale = global.innerHeight ? 850 / global.innerHeight : 1;
    const factor = offset => 1.1 + (offset * scale) + (offset * 0.4);
    const speed = offset => 0.2;
    const url = (name, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

    return (
        <Page {...this.props} className={`home ${className} ${animating ? `${classNames.animating || ''} animating` : ''}`}>
          <section className="section container">
            {__CLIENT__ ? <Parallax className={`parallax ${isLandscape ? 'landscape' : ''}`} pages={factor(8.3)} style={{ left: 0 }}>
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
              <ParallaxLayer
                offset={factor(0)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.props.sections[0]}
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(1)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.props.sections[1]}
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(2)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.props.sections[2]}
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(3)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.props.sections[3]}
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(4)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.props.sections[4]}
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(5)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                {this.props.sections[5]}
              </ParallaxLayer>
              <ParallaxLayer
                offset={factor(6.1)}
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
                offset={factor(6.85)}
                factor={scale}
                speed={PARALLAX_SPEED}>
                <section className="section">
                  <h2>Content</h2>
                  <h3>FoxStream™ TV</h3>
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
              </ParallaxLayer>
              <Footer/>
            </Parallax> : <>
            </>}
          </section>
          <modals.Solution show={!!solution} solution={solution || {}} onHide={close}/>
        </Page>
    );
  }
}
