import React from 'react';
import ReactGA from 'react-ga';
import _ from 'lodash';
import {connect} from 'react-redux';
import {create} from '@aim-digital/web/actions/Solution';
import {Modal} from '@aim-digital/web/components/layout';
import {Contact} from '@boilerplatejs/core/components/forms';
import {ShareButtons} from 'react-share';

const { FacebookShareButton, TwitterShareButton, EmailShareButton } = ShareButtons;

@connect(() => ({}), {create})
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
    const { create, solution } = this.props;
    const ga = { category: 'Solution Form', label: solution.summary };

    if (values.email) {
      ReactGA.event({ ...ga, action: `Submit` });

      create({ ...values, solution: _.pick(solution, ['id', 'summary']), quote: true, newsletter: !(values.newsletter === false) })
        .then(contact => this.setState({ contact, form: { message: null } }))
        .then(() => ReactGA.event({ ...ga, action: `Success` }))
        .catch(({message}) => this.setState({ form: { message } }));
    }
  };

  render() {
    const { solution } = this.props;
    const { contact } = this.state;
    const { message } = this.state.form;
    const { plans } = solution;
    const { location = {} } = global;
    const share = { url: `${location.protocol}//${location.host}${location.pathname}?solution=${solution.id}`, message: solution.description, caption: solution.cta };

    return (
      <Modal {..._.omit(this.props, ['create', 'solution'])}
        onHide={this.onHide}
        className="solution"
        title={solution.summary}
        icon={solution.icon}
        share={share}>
        {solution.id && <section>
          {/*<p className="description">{solution.description}</p>*/}
          {/*<section className="criteria">
            <h5>Potential Cases</h5>
            <ul>
              {solution.criteria.map((criterion, i) => <li key={i}>{criterion}</li>)}
            </ul>
          </section>*/}
          {plans.length > 0 && <section className="plans">
            <h3>Recommended Plans</h3>
            {plans.map((plan, i) => <div key={i}>
              <strong>{plan.name}</strong> {plan.description}
              <span className="pricing">
                {plan.pricing.map((price, i) => <span key={i}>{price.label}<sub>{price.unit ? `/${price.unit}` : ''}{price.note ? ` ${price.note}` : ''}</sub></span>)}
              </span>
              <ul>
                {plan.details.map((detail, i) => <li key={i}>* {detail}</li>)}
              </ul>
            </div>)}
          </section>}
          <section className="quote">
            <div>
              <h3>{solution.cta}</h3>
              <p>Interested in our products or services? Connect with us to learn more about how we can help your business!</p>
              {contact ?
                <div className="success">
                  <strong>Thank you, {contact.firstName}, for your inquiry!</strong><br />We will contact you within 24 hours.
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
                <Contact quote cancelText="Cancel" onCancel={this.onHide} newsletterText="Join the AIM™ TV newsletter for project management tips, industry trends, free-to-use software, and more." onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>}
      </Modal>
    );
  }
}
