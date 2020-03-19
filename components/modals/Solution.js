import React, {Fragment} from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {ShareButtons} from 'react-share';
import {update} from '@boilerplatejs/hubspot/actions/Contact';
import {create, destroy} from '@fox-zero/web/actions/Contact';
import {Contact} from '@fox-zero/web/components/forms';
import {Modal} from '@fox-zero/web/components/layout';
import * as components from '@fox-zero/web/components';
// import * as analytics from '@fox-zero/web/lib/analytics';

const {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton
} = ShareButtons;

@connect(state => ({contact: state['@fox-zero/web'].Contact.current}), {update, create, destroy})
export default class extends Modal {
  static defaultProps = {
    onHide: () => {},
    contact: null
  };

  state = {
    form: {
      message: null
    }
  };

  onHide = (...args) => {
    this.props.onHide.apply(this, args);
    this.setState({ form: { message: null } });
  };

  submit = values => {
    const { update, solution, create } = this.props;
    const { section = 'Home' } = solution;
    const { email } = values;

    if (email) {
      // ReactGA.event({ ...ga, action: `Submit` });

      update({
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
          application: 'Fox Zero™ Marketing App'
        }
      })
        .then(contact => {
          create(contact);
          this.setState({ form: { message: null } });
        })
        // .then(() => ReactGA.event({ ...ga, action: `Success` }))
        .catch(({message}) => this.setState({ form: { message } }));
    }
  };

  formatCalendarParams = ({ email, firstname, lastname, company = { value: '' }, message = { value: '' } }) => {
    const e = encodeURIComponent;
    return `email=${e(email.value)}&name=${e([firstname.value, lastname.value].join(' '))}&a1=${e(company.value)}&a2=${e(message.value)}`;
  };

  onShare = (source, { email, shares }) => async () => {
    const { update, create, contact } = this.props;
    const updated = await update({ lead: true, properties: { email: email.value, shares: [shares.value].concat(source).join(';') } });
    contact && create(updated);
  };

  render() {
    const { solution, contact, destroy: reset } = this.props;
    const { message } = this.state.form;
    const { slug, content, summary, title, subject, icon, section, media = [] } = solution;
    const { location = {} } = global;
    const [hero = {}] = media;
    const share = {
      url: `${location.protocol}//${location.host}/${(slug || '').toLowerCase()}`,
      caption: summary,
      subject: section ? `${section} · ${subject || title}` : subject || title,
      hashtags: ['software', 'agency', (section || 'consulting').toLowerCase()]
    };

    return (
      <Modal {..._.omit(this.props, ['update', 'solution', 'create', 'destroy'])}
        onHide={this.onHide}
        className={`solution ${slug ? '' : 'contact'}`}
        title={title}
        dek={section}
        icon={icon}
        share={share}
        hero={hero.url}>
        <section>
          {slug && <section className="content">
            {content.map((content, i) => {
              const Component = content.type === 'component' && _.get(components, content.value);

              return <Fragment key={`detail-content-${i}`}>
                {Component && <Component />}
                {content.type === 'paragraph' && <p>{content.copy}</p>}
                {content.type === 'image' && <img src={content.media[0].url} />}
              </Fragment>
            })}
          </section>}
          <section className="quote">
            <div>
              <h2>Talk to Me</h2>
              <h3>{contact ? <>Get it on<br />the Calendar!</> : <>Book a Free<br />Consultation!</>}</h3>
              <p>Our services can accelerate and enhance your software projects. Use the form (<i className="fa color-primary-green fa-hand-o-down" />) to get started with a free 30 minute call with a senior partner.</p>
            </div>
            <div className={`form ${contact ? 'success' : ''}`}>
              <div>
                <div>
                  {contact && <>
                    <h4>Schedule a Call</h4>
                    <p>Hey <strong>{contact.firstname.value}</strong>, thanks for contacting us! You can use the button below to schedule an appointment for your consultation call. We look forward to chatting with you!</p>
                    <button className="btn btn-success">
                      <a href={`https://calendly.com/fox-zero/consultation?${this.formatCalendarParams(contact)}`} target="_blank">Book Now</a>
                      <i className="fa fa-link" />
                    </button>
                  </>}
                  <br />
                  <br />
                  <h4>Spread the Word</h4>
                  <p>Shout-outs can get you a <strong>5% discount</strong>!</p>
                  <ul>
                    <li>Use the buttons below to share us.</li>
                    <li>20 aggregate "likes" discounts 2.5%.</li>
                    <li>10 aggregate comments discounts 2.5%.</li>
                    <li><small><i>Shout-Out Discount</i> applies to all subscription plans for the first 6 billing cycles.</small></li>
                  </ul>
                  {contact && <div className="share">
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
                  </div>}
                  <br />
                  <br />
                  <button className="btn btn-success" onClick={reset}>Reset Form</button>
                </div>
              </div>
              <Contact quote cancelText="Close" onCancel={this.onHide} newsletterText="Join the FoxStream™ newsletter for project management tips, industry trends,  free-to-use software, and more." onSubmit={this.submit}/>
              {!contact && message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>
      </Modal>
    );
  }
}
