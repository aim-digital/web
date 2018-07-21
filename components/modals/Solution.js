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
        {solution.id && <section>
          {/*<p className="description">{solution.description}</p>*/}
          <section className="criteria">
            <h5>Potential Cases</h5>
            <ul>
              {solution.criteria.map((criterion, i) => <li key={i}>{criterion}</li>)}
            </ul>
          </section>
          <section className="plans">
            {solution.plans.map((plan, i) => <div key={i}>
              <h5>{plan.name} {plan.description}</h5>
              <span className="pricing">
                {plan.pricing.map((price, i) => <span key={i}>{price.label}<sub>/{price.unit}</sub></span>)}
              </span>
              <ul>
                {plan.details.map((detail, i) => <li key={i}>{detail}</li>)}
              </ul>
            </div>)}
          </section>
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
                <Contact quote cancelText="Back" onCancel={this.onHide} newsletterText="Join the VTTV newsletter for project management tips, industry trends, free software, and more." onSubmit={this.submit}/>}
              {message && <div className="error">{message}</div>}
            </div>
          </section>
        </section>}
      </Modal>
    );
  }
}
