import _ from 'lodash';
import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {ShareButtons} from 'react-share';
import {Page} from '@boilerplatejs/core/components/layout';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {check} from '@boilerplatejs/core/actions/Verification';
import {dismiss} from '@fox-zero/web/actions/Nav';
import {open} from '@fox-zero/web/actions/Solution';
import {create, destroy} from '@fox-zero/web/actions/Contact';
import {Footer} from '@fox-zero/web/components/layout';
import {Solution} from '@fox-zero/web/components/buttons';
import {update} from '@boilerplatejs/hubspot/actions/Contact';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import * as forms from '@fox-zero/web/components/forms';
import formatters from '@fox-zero/web/lib/formatters';
import {solutions, brand} from '@fox-zero/web/data';
import * as analytics from '@fox-zero/web/lib/analytics';

const {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton
} = ShareButtons;

const RE_iOS_13 = /^.*iPhone.*(?:OS\s13|Version\/13)/;

const HEADER_TIMER = 10;

const SOLUTION_DELAY = 100;
const SOLUTION_AVG = solutions.length / 2;

const IMPRESSION_START = 0.5;
const IMPRESSION_END = 0.35;

const RE_SECTION_KEY = /.*\:(.*)$/;
const SECTION_DEFAULT = 'about';
const SECTION_FORM = 6;
const SECTIONS = {
  'about': { slide: 0 },
  'agents': { slide: 1 },
  'squad': { slide: 2 },
  'packages': { slide: 3 },
  'warranty': { slide: 4 },
  'contact': { slide: 5 },
};

const VERIFY_ACTION = 'form_page_submission';
const VERIFY_GRADE = 0.65;

const RESET_SLIDE = 0;

@connect(state => {
  const { Transition } = state['@boilerplatejs/core'];
  const { slide = 0 } = Transition;
  const { current: solution = null } = state['@fox-zero/web'].Solution;
  return ({
    param: state.router.params,
    slide, query: state.router.location.query,
    contact: state['@fox-zero/web'].Contact.current,
    reset: Transition['slide.reset'],
    rendered: Transition['page.rendered'],
    sources: state['@boilerplatejs/core'].Transition['analytics.sources'],
    isModalOpen: state['@boilerplatejs/core'].Transition['modal.open'],
    recaptchaSiteKey: state['@boilerplatejs/core'].Config['@boilerplatejs/core'].recaptchaSiteKey,
    solution
  });
}, {transition, dismiss, update, load, open, create, destroy, check})

export default class extends Page {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    dismiss: PropTypes.func.isRequired,
    update: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    create: PropTypes.func.isRequired,
    destroy: PropTypes.func.isRequired,
    classNames: PropTypes.object,
    solution: PropTypes.object,
    contact: PropTypes.object,
    recaptchaSiteKey: PropTypes.any,
    param: PropTypes.object,
    query: PropTypes.object,
    slide: PropTypes.number.isRequired,
    reset: PropTypes.bool,
    section: PropTypes.string,
    sources: PropTypes.any,
    check: PropTypes.func.isRequired,
    isModalOpen: PropTypes.bool,
    rendered: PropTypes.bool
  };

  static defaultProps = {
    className: '',
    classNames: {},
    solution: null,
    contact: null,
    isModalOpen: false,
    rendered: false
  };

  state = {
    animating: false,
    isMobile: true,
    isLandscape: false,
    ready: false,
    form: {
      message: null,
      status: null
    }
  };

  impressions = [];

  componentDidMount = () => {
    if (__CLIENT__) {
      document.querySelector('#app > section > .page').addEventListener('click', this.props.dismiss);
      document.querySelector('#app').classList.add('home');
      global.addEventListener('resize', this.updateViewport);
      global.addEventListener('scroll', this.onHeaderScroll);
      global.setTimeout(() => this.setState({ ready: true }), 1000);
      global.setTimeout(() => this.props.transition('page.rendered', true), 1500);
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

    this.props.transition('page.rendered', false);
  };

  componentWillUnmount = () => {
    if (__CLIENT__) {
      this.props.transition({ progress: 0.2 });
      document.querySelector('#app > section > .page').removeEventListener('click', this.props.dismiss);
      document.querySelector('#app').classList.remove('home');
      global.removeEventListener('scroll', this.onScroll);
      global.removeEventListener('scroll', this.onSolutionScroll);
      global.removeEventListener('scroll', this.onParallaxScroll);
      global.removeEventListener('resize', this.updateViewport);
      global.removeEventListener('scroll', this.onHeaderScroll);
    }
  };

  componentWillUpdate = props => {
    const { transition, param } = this.props;
    const section = props.param.section;

    if (param.section !== section) {
      this.updateHeader(props);
      transition('slide.initial', section ? SECTIONS[section].slide : null);
    }
  };

  componentDidUpdate = (props, state) => {
    if (!this.state.rendered && this.setupParallax) {
      this.setupParallax();
    }
  };

  setupParallax = () => {
    this.elements = this.getElements();
    global.addEventListener('scroll', this.onScroll = _.debounce(this.onScroll, 500, { trailing: true }));
    global.addEventListener('scroll', this.onSolutionScroll = _.debounce(this.onSolutionScroll, 1, { trailing: true }));
    global.addEventListener('scroll', this.onParallaxScroll);
    this.setState({ rendered: true });
    this.setupParallax = null;
  };

  onParallaxScroll = () => {
    this.elements.parallax.querySelector('.parallax').scrollTop = window.scrollY;
  };

  onSolutionScroll = () => {
    if (!this.state.isMobile) {
      this.elements.parallax.querySelector('.section-solution').style.transform = `translate3d(0px, ${window.scrollY}px, 0px)`;
    }
  };

  cycleHeader = (timer = HEADER_TIMER) => {
    const { transition } = this.props;

    if (__CLIENT__) {
      transition('timer', this.sections.length > 1 ? timer : 0);
    }
  };

  getElements() {
    const { length, props } = this;
    const { slide } = props;
    const app = document.querySelector('#app');
    const parallax = document.body;
    const section = parallax.querySelector(`.home .section-${slide}`);
    const form = parallax.querySelector(`.home .section-form`);
    const sections = [];

    if (parallax.querySelector(`.home .parallax`)) {
      for (let i = 0; i < length; i++) {
        let section = parallax.querySelector(`.home .section-${i}`);

        sections[i] = {
          element: section,
          height: section && section.offsetHeight
        };
      }
    }

    return {
      app,
      parallax,
      section,
      sections,
      form: {
        element: form,
        height: form && form.offsetHeight
      }
    };
  }

  onHeaderScroll = () => {
    const pageHeight = global.innerHeight;
    const element = this.firstSectionElement = this.firstSectionElement || document.querySelector('#app').querySelector(`.home .section-0`);
    const percent = Math.max(element.getBoundingClientRect().top, 0) / pageHeight;

    if(percent) {
      document.querySelector('#app').querySelector(`.slide .presentation`).style.opacity = percent.toFixed(2);
      Array.prototype.map.call(document.querySelectorAll(`#app .section.container .wrapper .section`), section => section.style.opacity = Math.min(1, (1 - percent) + ((1 - percent) * 1.3)).toFixed(2));
    }
  };

  onScroll = () => {
    const { section, props, impression, impressions } = this;
    const { transition, reset, slide: current, sources } = props;
    const { sections, form } = this.getElements();
    const { length } = sections;
    const pageHeight = global.innerHeight;
    let timer, slide;

    if (!sections.length || !sections[0].element) return;

    if (sections[0].element.getBoundingClientRect().top <= pageHeight * IMPRESSION_START) {
      let start, end;
      timer = 0;
      transition('page.impression', this.impression = true);

      for (let i = 0; i < length; i++) {
        start = sections[i].element.getBoundingClientRect().top;
        end = start + sections[i].height;

        if (start <= pageHeight * IMPRESSION_START) {
          slide = section ? SECTIONS[section].slide : i;

          if (end >= pageHeight * IMPRESSION_END) {
            if (!impressions[i]) {
              this.impressions = [];
              form.impression = false;
              this.impressions[i] = true;
              analytics.Section.Page.Impression.track(
                section ? formatters.section(section) : ['Home', solutions[i].section].join(','),
                sources
              );
            }
          } else {
            impressions[i] = false;
          }
        }
      }

      start = form.element.getBoundingClientRect().top
      end = start + form.height

      if (start <= pageHeight * IMPRESSION_START && end >= pageHeight * IMPRESSION_END) {
        if (!form.impression) {
          this.impressions = [];
          form.impression = true;
          analytics.Form.Page.Impression.track(formatters.section(section || 'Home'), sources);
        }
      } else {
        form.impression = false;
      }
    } else if (impression) {
      timer = HEADER_TIMER;
      slide = section ? SECTIONS[section].slide : (reset ? RESET_SLIDE : (props.slide === this.length - 1 ? 0 : props.slide + 1));
      transition('page.impression', this.impression = false);
    }

    if (typeof slide !== 'undefined') {
      slide !== current && transition('slide', slide);
      transition('slide.reset', false);
      this.cycleHeader(timer);
    }
  };

  get solutions() {
    const { renderSolution } = this;

    return (
      this.state.isMobile ? <></> :
      <section className="solutions">
        <div className="left">{solutions.slice(0, SOLUTION_AVG).map(renderSolution(i => ({ delay: (5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(-200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: 0.85 } })))}</div>
        <div className="right">{solutions.slice(SOLUTION_AVG).map(renderSolution(i => ({ delay: (7.5 - i) * SOLUTION_DELAY, from: { transform: 'translate3d(200%, 0, 0)', opacity: 0 }, to: { transform: 'translate3d(0, 0, 0)', opacity: 0.85 } })))}</div>
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

  get formatted() {
    return formatters.section(this.section || 'Home');
  }

  get content() {
    const headerClass = this.length % 2 ? 'text-right' : '';

    return (
      <div className="wrapper">
        <section className="section">
          <h2 className={headerClass}>Content</h2>
          <h3 className={headerClass}>Channel<br />Fox Zero™</h3>
          <div className="container">
            <div className="row">
              <div className="col-md-12 card">
                <p><span>Check out our content channel and follow us on our social media for project management tips, industry trends, free-to-use software, and more!</span></p>
                {/* <div className="image">
                  <img src="https://d3w33imimg0eu8.cloudfront.net/images/logo.png" />
                </div> */}
                <div>
                  <Link className="link" to="/stream/music/music-tech-steven-tyler-collision-nola/5/4/2018">
                    <Solution
                      icon="television">
                      Browse our content at <span>Fox Zero™ TV</span>
                    </Solution>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

  updateViewport = () => {
    this.setState({ isMobile: global.innerWidth < 992 });
  };

  openSolution = async (solution, sources) => {
    const { load, open, transition } = this.props;
    const { slug, media } = solution;
    (new Image()).src = media[0].url;
    transition('timer.pause', true);
    transition('modal.open', true);
    open({ ...solution, ...{ sources }, ...await load('posts', { slug: encodeURIComponent(slug) }) });
  };

  renderSolution = transition => (solution, i) => {
    const { slide, sources } = this.props;
    const { ready } = this.state;

    return <Solution
      className={`${ready && slide === solution.index ? 'active' : ''}`}
      key={`detail-button-${i}`}
      icon={solution.icon}
      tooltip="Click to learn more"
      transition={transition(i)}
      onClick={() => {
        analytics.Section.Click.track(solution.section, sources);
        this.openSolution(solution, (sources || []).concat(['Section.App.Click']));
      }}>
        <>
          <span>{solution.section}{solution.section === 'SQUAD' ? <sup>®</sup> : ''} &bull;</span> {solution.title === 'SQUAD Pricing' ? <>SQUAD<sup>®</sup> Pricing</>: solution.title}
        </>
      </Solution>;
  }

  submit = values => {
    const { formatted } = this;
    const { update, create, sources, recaptchaSiteKey, check } = this.props;
    const { email } = values;

    const submit = async () => {
      try {
        const { score } = recaptchaSiteKey ? await grecaptcha.execute(recaptchaSiteKey, { action: VERIFY_ACTION }).then(token => check(token, VERIFY_ACTION)) : {};

        if (score && score < VERIFY_GRADE) {
          let e = new Error('Unauthorized submission reported by bot verification check.');
          e.name = 'Verification';
          e.code = 403;
          throw e;
        }

        this.setState({ form: { message: null, status: 'Submitting' } });
        const tracking = analytics.Form.Page.Submission.track(formatted, sources);

        const contact = await update({
          lead: true,
          newsletter: !(values.newsletter === false),
          properties: {
            email,
            message: values.comment,
            firstname: values.firstName,
            lastname: values.lastName,
            phone: values.phone,
            company: values.company,
            section: formatted,
            application: 'Fox Zero™ Marketing App',
            tracking
          }
        });

        create(contact);
        this.setState({ form: { message: null, status: null } });
        analytics.Form.Page.Success.track(formatted, sources);
        analytics.Confirmation.Page.Impression.track(formatted, sources);
      } catch (e) {
        const { message, status, code, errorCode, name } = e;
        this.setState({ form: { message, status: null } });
        analytics.Form.Page.Failure.track([formatted].concat(name || []).concat(status || code || errorCode || []).join(','), sources);
      }
    };

    if (email) {
      if (recaptchaSiteKey) {
        this.setState({ form: { message: null, status: 'Verifying' } });
        grecaptcha.ready(submit);
      } else {
        submit();
      }
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

  formatCalendarParams = ({ email, firstname, lastname, company = { value: '' }, message = { value: '' } }) => {
    const e = encodeURIComponent;
    return `email=${e(email.value)}&name=${e([firstname.value, lastname.value].join(' '))}&a1=${e(company.value)}&a2=${e(message.value)}`;
  };

  onShare = (source, { email, shares }) => async () => {
    const { update, create, contact, sources } = this.props;
    const updated = await update({ lead: true, newsletter: true, properties: { email: email.value, shares: [shares ? shares.value : []].concat(source).join(';') } });
    contact && create(updated);
    analytics.Confirmation.Page.Share.track([this.formatted, source].join(','), sources);
  };

  renderShare = ({ slug, summary, title, subject, section }) => {
    const { contact } = this.props;
    const share = {
      url: `${location.protocol}//${location.host}/${(slug || '').toLowerCase()}`,
      caption: summary,
      subject: section ? `${section} · ${subject || title}` : subject || title,
      hashtags: ['software', 'consulting', (section || 'foxzero').replace(' ', '').toLowerCase()]
    };

    return <div className="share">
      <LinkedinShareButton url={share.url} title={subject || title} source="Fox Zero™" summary={share.caption} onShareWindowClose={this.onShare('linkedin', contact)}>
        <i className="fa fa-linkedin-square"/>
      </LinkedinShareButton>
      <FacebookShareButton url={share.url} quote={share.caption} hashtag={share.hashtags.map(tag => `#${tag}`).join(' ')} onShareWindowClose={this.onShare('facebook', contact)}>
        <i className="fa fa-facebook-official"/>
      </FacebookShareButton>
      <TwitterShareButton url={share.url} title={share.caption} hashtags={share.hashtags} related="@fox_zero_agency" onShareWindowClose={this.onShare('twitter', contact)}>
        <i className="fa fa-twitter"/>
      </TwitterShareButton>
      <EmailShareButton url={share.url} subject={`Fox Zero™ · ${share.subject}`} body={`${share.caption}\n\nRead More: ${share.url}\n\n`} onShareWindowClose={this.onShare('email', contact)}>
        <i className="fa fa-envelope"/>
      </EmailShareButton>
    </div>;
  };

  render() {
    const { props, state, sections, formatted } = this;
    const { className, classNames = {}, contact, destroy: reset, sources, rendered } = props;
    const { animating } = state;
    const { message, status } = state.form;
    const hasMany = sections.length > 1;

    const wrap = (offset = 0) => (component, i) => {
      return <div className={`wrapper section-${i + offset}`} key={`section-${i + offset}`}>
        {component}
      </div>
    };

    return (
        <Page {...this.props} className={`home home-${props.param.section || 'index'} ${className} ${animating ? `${classNames.animating || ''} animating` : ''}`}>
          <section className="section container">
            {__CLIENT__ ? <>
              <div className={`parallax ${RE_iOS_13.test(global.navigator.userAgent) ? 'hide' : ''}`}>
                {<>
                  <div className="stars" />
                  <div className="stars" style={{ top: '400vh' }} />
                  <div className="stars" style={{ top: '800vh' }} />
                  <div className="stars" style={{ top: '1200vh' }} />
                  <div className="earth" style={{ top: '65vh' }} />
                  <div className="cloud left" style={{ top: '100vh', left: '-75%' }} />
                  <div className="cloud farther left" style={{ top: '-40vh', left: '-75%' }} />
                  <div className="satellite right" style={{ top: '40vh', left: '85%' }} />
                  <div className="cloud left" style={{ top: '320vh', left: '-90%' }} />
                  <div className="cloud farther left" style={{ top: '260vh', left: 'auto', right: '-95%' }} />
                  <div className="cloud right" style={{ top: '520vh', left: 'auto', right: '-75%' }} />
                  <div className="cloud farthest" style={{ top: '410vh', left: '-90%' }} />
                  <div className="satellite farther left" style={{ top: '460vh', left: 'auto', right: '90%' }} />
                  <div className="earth" style={{ top: '600vh' }} />
                </>}
              </div>
              {this.header}
              {<div className="section-solution wrapper">{this.solutions}</div>}
              {<>
                {sections.slice(0, hasMany ? SECTION_FORM : sections.length).map(wrap())}
                <div className="section-form wrapper">
                  <section className="quote section">
                    <h2>Talk to Me</h2>
                    <h3>{contact ? <>Get it on<br />the Calendar!</> : <>Book a Free<br />Consultation!</>}</h3>
                    <p>Use the form <i className="fa color-primary-green fa-hand-o-down" /> to get started with a free 20 minute call with a senior partner.</p>
                    <div className={`form ${contact ? 'success' : ''}`}>
                      <div>
                          <div>
                            {contact && <>
                              <h4>Schedule a Call</h4>
                              <p>Hey <strong>{contact.firstname.value}</strong>, thanks for contacting us! You can use the button below to schedule an appointment for your consultation call. We look forward to chatting with you!</p>
                              <button className="btn btn-success" onClick={() => analytics.Confirmation.Page.Booking.track(formatted, sources)}>
                                <a href={`https://calendly.com/fox-zero/consultation?${this.formatCalendarParams(contact)}`} target="_blank">Book Now</a>
                                <i className="fa fa-calendar" />
                              </button>
                            </>}
                            <br />
                            <br />
                            <h4>Follow Us</h4>
                            {/* <p>Shout-outs can get you a <strong>15% discount</strong>!</p>
                            <ul>
                              <li>Use the buttons below to share us.</li>
                              <li>20 aggregate "likes" discounts 7.5%.</li>
                              <li>10 aggregate comments discounts 7.5%.</li>
                              <li><small><i>Shout-Out Discount</i> applies to all subscription plans for the first 6 billing cycles.</small></li>
                            </ul> */}
                            {contact && this.renderShare(this.section ? solutions[SECTIONS[this.section].slide] : brand)}
                            <br />
                            <br />
                            <button className="btn btn-success" onClick={() => { reset(); analytics.Confirmation.Page.Reset.track(formatted, sources); }}>Reset Form</button>
                          </div>
                      </div>
                      <forms.Contact status={status} quote newsletterText="Subscribe to Fox Zero™ TV emails for project management tips, industry trends, free-to-use software, and more." onSubmit={this.submit}/>
                      {!contact && message && <span className="error">{message}</span>}
                      {!contact && <span className="legal">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</span>}
                    </div>
                  </section>
                </div>
                {hasMany ? sections.slice(SECTION_FORM).map(wrap(SECTION_FORM)) : <></>}
                {this.content}
              </>}
              <Footer/>
            </> : <>
              {this.header}
              {sections}
              {this.content}
              <Footer/>
            </>}
          </section>
        </Page>
    );
  }
}
