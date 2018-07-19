import React, {PropTypes} from 'react';
import ReactGA from 'react-ga';
import _ from 'lodash';
import {connect} from 'react-redux';
import {create} from '@machete-platform/core-bundle/controllers/Contact';
import {Modal} from '@vitruvian-tech/machete-bundle/components/layout';
import {Contact} from '@machete-platform/core-bundle/components/forms';

@connect(() => ({}), {create})
export default class extends Modal {
  static propTypes = {
    solution: PropTypes.object
  };

  state = {
    contact: null,
    form: {
      message: null
    }
  };

  submit = values => {
    const { create, solution } = this.props;
    const ga = { category: 'Solution Form', action: 'Submit' };

    if (values.email) {
      ReactGA.event({ ...ga, label: `Attempt` });

      create({ ...values, solution: solution.id, quote: true, newsletter: !(values.newsletter === false) })
        .then(contact => this.setState({ contact, form: { message: null } }))
        .then(() => ReactGA.event({ ...ga, label: `Success` }))
        .catch(({message}) => this.setState({ form: { message } }));
    }
  };

  render() {
    const { solution } = this.props;
    const { contact } = this.state;
    const { message } = this.state.form;

    return (
      <Modal {..._.omit(this.props, ['create', 'solution'])} className="solution" title={solution.summary} icon={solution.icon}>
        <section>
          <p className="description">{solution.description}</p>
          <section className="quote">
            <div>
              <h3>{solution.cta}</h3>
              <p>Interested in our products or services? Connect with us to learn more about how we can help your business!</p>
              {contact ?
                <div className="success"><strong>Thank you, {contact.firstName}, for your inquiry!</strong><br />We will contact you within 24 hours.</div> :
                <Contact quote submitText="Submit" newsletterText="Join the VitruvianArmy newsletter!" onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>
      </Modal>
    );
  }
}
