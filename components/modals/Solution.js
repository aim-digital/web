import React, {Component} from 'react';
import ReactGA from 'react-ga';
import _ from 'lodash';
import {connect} from 'react-redux';
import {create} from '@machete-platform/core-bundle/controllers/Contact';
import {Modal} from '@vitruvian-tech/machete-bundle/components/layout';
import {Contact} from '@machete-platform/core-bundle/components/forms';

@connect(() => ({}), {create})
export default class extends Modal {
  state = {
    contact: null,
    form: {
      message: null
    }
  };

  submit = values => {
    const { create } = this.props;
    const ga = { category: 'Quote Form', action: 'Submit' };

    if (values.email) {
      ReactGA.event({ ...ga, label: `Attempt` });

      create({ ...values, quote: true, newsletter: !(values.newsletter === false) })
        .then(contact => this.setState({ contact, form: { message: null } }))
        .then(() => ReactGA.event({ ...ga, label: `Success` }))
        .catch(({message}) => this.setState({ form: { message } }));
    }
  };

  render() {
    const { contact } = this.state;
    const { message } = this.state.form;

    return (
      <Modal {..._.omit(this.props, 'create')}>
        <section className="quote">
            <div>
              <h3>Get a Quote</h3>
              <p>Interested in our products or services? Connect with us to learn more about how we can help your business!</p>
              {contact ?
                <div className="success"><strong>Thank you, {contact.firstName}, for your inquiry!</strong><br />We will contact you within 24 hours.</div> :
                <Contact quote submitText="Submit" newsletterText="Join the VitruvianArmy newsletter!" onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
      </Modal>
    );
  }
}
