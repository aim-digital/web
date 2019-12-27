import React from 'react';
import ReactGA from 'react-ga';
import _ from 'lodash';
import {connect} from 'react-redux';
import {update} from '@boilerplatejs/hubspot/actions/Contact';
import {Contact} from '@boilerplatejs/core/components/forms';
import {Modal} from '@fox-zero/web/components/layout';
import {ShareButtons} from 'react-share';

const { FacebookShareButton, TwitterShareButton, EmailShareButton } = ShareButtons;

const CAPTION = 'The High-Performance/Zero-Latency Agency™';

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
    const { summary } = solution;
    const { email } = values;
    const ga = { category: 'Solution Form', label: summary };

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
          solution: summary
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
    const { content } = solution;
    const { location = {} } = global;
    const share = { url: `${location.protocol}//${location.host}${location.pathname}?detail=${encodeURIComponent(solution.slug)}`, caption: content ? content[0].copy : CAPTION, subject: solution.summary };

    return (
      <Modal {..._.omit(this.props, ['update', 'solution'])}
        onHide={this.onHide}
        className="solution"
        title={solution.summary}
        icon={solution.icon}
        share={share}>
        {solution.slug && <section>
          <p>{content[0].copy}</p>
          <section className="quote">
            <div>
              <h3>{solution.cta || 'Talk to Me'}</h3>
              <p>Interested in our products or services? Connect with us to learn more about how we can help your business!</p>
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
                <Contact quote cancelText="Cancel" onCancel={this.onHide} newsletterText="Join the FoxStream™ newsletter for project management tips, industry trends, free-to-use software, and more." onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>}
      </Modal>
    );
  }
}
