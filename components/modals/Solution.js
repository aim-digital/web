import React, {Fragment} from 'react';
import ReactGA from 'react-ga';
import _ from 'lodash';
import {connect} from 'react-redux';
import {ShareButtons} from 'react-share';
import {update} from '@boilerplatejs/hubspot/actions/Contact';
import {Contact} from '@fox-zero/web/components/forms';
import {Modal} from '@fox-zero/web/components/layout';
import * as components from '@fox-zero/web/components';

const { FacebookShareButton, TwitterShareButton, EmailShareButton } = ShareButtons;

@connect(() => ({}), {update})
export default class extends Modal {
  static defaultProps = {
    onHide: () => {}
  };

  state = {
    contact: null,
    form: {
      message: null
    }
  };

  onHide = (...args) => {
    this.props.onHide.apply(this, args);
    this.setState({ contact: null, form: { message: null } });
  };

  submit = values => {
    const { update, solution } = this.props;
    const { section = 'Home' } = solution;
    const { email } = values;
    const ga = { category: 'Solution Form', label: section };

    if (email) {
      ReactGA.event({ ...ga, action: `Submit` });

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
          section
        }
      })
        .then(contact => this.setState({ contact, form: { message: null } }))
        .then(() => ReactGA.event({ ...ga, action: `Success` }))
        .catch(({message}) => this.setState({ form: { message } }));
    }
  };

  render() {
    const { solution } = this.props;
    const { contact } = this.state;
    const { message } = this.state.form;
    const { slug, content, summary, title, subject, icon, section, media = [] } = solution;
    const { location = {} } = global;
    const [hero = {}] = media;
    const share = {
      url: `${location.protocol}//${location.host}/${(slug || '').toLowerCase()}`,
      caption: summary,
      subject: section ? `${section} · ${subject || title}` : subject || title
    };

    return (
      <Modal {..._.omit(this.props, ['update', 'solution'])}
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

              return <Fragment key={`content-${i}`}>
                {Component && <Component />}
                {content.type === 'paragraph' && <p>{content.copy}</p>}
                {content.type === 'image' && <img src={content.media[0].url} />}
              </Fragment>
            })}
          </section>}
          <section className="quote">
            <div>
              <h2>Talk to Me</h2>
              <h3>Book a Free<br />Consultation</h3>
              <p>Interested in our services? Connect with us to learn more about how we can help your business!</p>
            </div>
            <div className="form">
              {contact ?
                <div className="success">
                  <strong>Thank you, {contact.firstname.value}, for your inquiry!</strong><br />We will contact you within 24 hours.
                  <br />
                  <br />
                  <div className="share">
                    <strong>Share this Solution</strong>
                    <br />
                    <FacebookShareButton url={share.url} quote={share.caption}>
                      <i className="fa fa-facebook-official"/>
                    </FacebookShareButton>
                    <TwitterShareButton url={share.url} title={share.caption}>
                      <i className="fa fa-twitter"/>
                    </TwitterShareButton>
                    <EmailShareButton url={share.url} subject={`Hello! ${share.caption}`} body={`${share.message}\n\n${share.url}\n\n`}>
                      <i className="fa fa-envelope"/>
                    </EmailShareButton>
                  </div>
                  <br />
                  <button className="btn btn-success" onClick={this.onHide}>Close</button>
                </div> :
                <Contact quote cancelText="Close" onCancel={this.onHide} newsletterText="Join the FoxStream™ newsletter for project management tips, industry trends, free-to-use software, and more." onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>
      </Modal>
    );
  }
}
