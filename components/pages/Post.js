import React from 'react';
import {connect} from 'react-redux';
import {sync} from '@boilerplatejs/core/lib/Fetch';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import {Page} from '@boilerplatejs/core/components/layout';
import {Footer} from '@fox-zero/web/components/layout';
import {update} from '@boilerplatejs/hubspot/actions/Contact';
import {check} from '@boilerplatejs/core/actions/Verification';
import {create, destroy} from '@fox-zero/web/actions/Contact';
import * as analytics from '@fox-zero/web/lib/analytics';
import {Contact} from '@fox-zero/web/components/forms';
import {ShareButtons} from 'react-share';
import {Link} from 'react-router';
import {Solution} from '@fox-zero/web/components/buttons';
import {dismiss} from '@fox-zero/web/actions/Nav';
import {transition} from '@boilerplatejs/core/actions/Transition';

const {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton
} = ShareButtons;

const VERIFY_ACTION = 'form_detail_submission';
const VERIFY_GRADE = 0.65;

const HOST = 'https://foxzero.io';

const getHeroImage = hero => hero ? hero.url : `${HOST}/@fox-zero/web/images/logo.png`;

@sync([{
  promise: ({store: {dispatch}, location: {pathname}}) => dispatch(load('posts', { slug: pathname.replace(/^\//, '').split('/').join('-'), published: false }))
}])

@connect(state => {
  const { pathname } = state.router.location.pathname;
  const content = state['@boilerplatejs/strapi'].Entry.posts.content;
  const { title, summary, dek, media } = content;
  const image = getHeroImage(media[0]);

  return {
    content: state['@boilerplatejs/strapi'].Entry.content,
    contact: state['@fox-zero/web'].Contact.current,
    recaptchaSiteKey: state['@boilerplatejs/core'].Config['@boilerplatejs/core'].recaptchaSiteKey,
    className: 'home detail',
    title: `${title} · ${dek || 'Fox Zero'}`,
    meta: [
      {name: 'description', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: [HOST, pathname].join('')},
      {property: 'og:title', content: title},
      {property: 'og:description', content: summary},
      {property: 'og:image:secure_url', content: image},
      {property: 'og:image', content: image},
      {property: 'twitter:card', content: 'article'},
      {property: 'twitter:title', content: title},
      {property: 'twitter:description', content: summary},
      {property: 'twitter:image', content: image}
    ]
  };
}, {dismiss, transition, update, create, destroy, check})

export default class extends Page {
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

  componentDidMount = () => {
    if (__CLIENT__) {
      document.querySelector('#app > section > .page').addEventListener('click', this.props.dismiss);
      document.querySelector('#app').classList.add('home');
      global.addEventListener('resize', this.updateViewport);
      global.setTimeout(() => this.setState({ ready: true }), 1000);
      global.setTimeout(() => this.props.transition('page.rendered', true), 1500);
      this.updateViewport();
    }
  }

  componentWillMount = () => {
    this.props.transition('page.rendered', false);
  };

  componentWillUnmount = () => {
    if (__CLIENT__) {
      this.props.transition({ progress: 0.2 });
      document.querySelector('#app > section > .page').removeEventListener('click', this.props.dismiss);
      document.querySelector('#app').classList.remove('home');
      global.removeEventListener('resize', this.updateViewport);
    }
  };

  updateViewport = () => {
    this.setState({ isMobile: global.innerWidth < 992 });
  };

  get header() {
    const { headers } = this.props;
    const single = headers.length === 1;

    return headers.length ? (
      <section className={`${single ? 'single' : ''} header container`}>
        {single ? headers : (headers[0])}
      </section>
    ) : <span/>;
  }

  submit = values => {
    const { update, content, create, recaptchaSiteKey, check } = this.props;
    const { email } = values;
    const section = content.dek || 'Detail';

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
        const tracking = analytics.Form.Detail.Submission.track(section);

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
            section,
            application: 'Fox Zero™ Marketing App',
            tracking
          }
        });

        create(contact);
        this.setState({ form: { message: null, status: null } });
        analytics.Form.Detail.Success.track(section);
        analytics.Confirmation.Detail.Impression.track(section);
      } catch (e) {
        const { message, status, code, errorCode, name } = e;
        this.setState({ form: { message, status: null } });
        analytics.Form.Detail.Failure.track([section].concat(name || []).concat(status || code || errorCode || []).join(','));
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

  formatCalendarParams = ({ email, firstname, lastname, company = { value: '' }, message = { value: '' } }) => {
    const e = encodeURIComponent;
    return `email=${e(email.value)}&name=${e([firstname.value, lastname.value].join(' '))}&a1=${e(company.value)}&a2=${e(message.value)}`;
  };

  onShare = (source, { email, shares }) => async () => {
    const { update, create, contact, content } = this.props;
    const section = content.dek || 'Detail';
    const updated = await update({ lead: true, newsletter: true, properties: { email: email.value, shares: [shares ? shares.value : []].concat(source).join(';') } });
    contact && create(updated);
    analytics.Confirmation.Detail.Share.track([section, source].join(','));
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
    const { className, classNames = {}, contact, destroy: reset, content } = this.props;
    const { animating } = this.state;
    const { message, status } = this.state.form;
    const section = content.dek || 'Detail';

    const wrap = (offset = 0) => (component, i) => {
      return <div className={`wrapper section-${i + offset}`} key={`section-${i + offset}`}>
        {component}
      </div>
    };

    return (
      <Page {...this.props} className={`detail home ${className} ${animating ? `${classNames.animating || ''} animating` : ''}`}>
        <section className="section container">
          {this.header}
          {this.props.sections.map(wrap())}
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
                        <button className="btn btn-success" onClick={() => analytics.Confirmation.Page.Booking.track(section)}>
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
                      {contact && this.renderShare(content)}
                      <br />
                      <br />
                      <button className="btn btn-success" onClick={() => { reset(); analytics.Confirmation.Page.Reset.track(section); }}>Reset Form</button>
                    </div>
                </div>
                <Contact status={status} quote newsletterText="Subscribe to Fox Zero™ TV emails for project management tips, industry trends, free-to-use software, and more." onSubmit={this.submit}/>
                {!contact && message && <span className="error">{message}</span>}
                {!contact && <span className="legal">This site is protected by reCAPTCHA and the Google <a href="https://policies.google.com/privacy" target="_blank">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank">Terms of Service</a> apply.</span>}
              </div>
            </section>
          </div>
          <div className="wrapper">
            <section className="section">
              <h2>Content</h2>
              <h3>Channel<br />Fox Zero™</h3>
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
          <Footer/>
        </section>
      </Page>
    )
  }
}