import React, {PropTypes} from 'react';
import ReactGA from 'react-ga';
import _ from 'lodash';
import {connect} from 'react-redux';
import {create} from '@vitruvian-tech/machete-bundle/controllers/Solution';
import {Modal} from '@vitruvian-tech/machete-bundle/components/layout';
import {Contact} from '@machete-platform/core-bundle/components/forms';

@connect(() => ({}), {create})
export default class extends Modal {
  static propTypes = {
    solution: PropTypes.object
  };

  static defaultProps = {
    onHide: () => {}
  };

  state = {
    contact: null,
    form: {
      message: null
    }
  };

  onHide = () => {
    this.props.onHide.apply(this, arguments);
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

    return (
      <Modal {..._.omit(this.props, ['create', 'solution'])} onHide={this.onHide} className="solution" title={solution.summary} icon={solution.icon}>
        <section>
          <p className="description">{solution.description}</p>
          <section className="quote">
            <div>
              <h3>{solution.cta}</h3>
              <p>Interested in our products or services? Connect with us to learn more about how we can help your business!</p>
              {contact ?
                <div className="success">
                  <strong>Thank you, {contact.firstName}, for your inquiry!</strong><br />We will contact you within 24 hours.
                  <br />
                  <br />
                  <button className="btn btn-success" onClick={this.onHide}>Close</button>
                </div> :
                <Contact quote cancelText="Back" onCancel={this.onHide} newsletterText="Join the VitruvianArmy newsletter!" onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>
      </Modal>
    );
  }
}
