import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <>
      <div className="subscription container">
        <div className="row">
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4>Fox<br />One</h4>
                <div className="discount">
                  <i className="fa fa-certificate">
                    <span>Ask about our <strong>Shout-Out</strong> 10% Discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$49k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 1.5 Partners</li>
                  <li><i className="fa fa-user-plus" /> Add'l. Consultants *</li>
                  <li><i className="fa fa-lightbulb-o" /> General Consulting</li>
                  <li><i className="fa fa-clipboard" /> Project Planning</li>
                  {/* <li><i className="fa fa-diamond" /> Architecture &amp; Design</li> */}
                  <li><i className="fa fa-unlock" /> No commitment *</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4>Fox<br />Two</h4>
                <div className="discount">
                  <i className="fa fa-certificate">
                    <span>Ask about our <strong>Rapid Fire</strong> 10% Discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$89k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 2 Partners</li>
                  <li><i className="fa fa-user-plus" /> 1 Associate</li>
                  <li><i className="fa fa-wrench" /> Product Development</li>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> warranty</li>
                  <li><i className="fa fa-lock" /> 1-3 mo. commitment *</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4>Fox<br />Three</h4>
                <div className="discount">
                  <i className="fa fa-certificate">
                    <span>Ask about our <strong>Rapid Fire</strong> 10% Discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$159k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 3 Partners</li>
                  <li><i className="fa fa-user-plus" /> 3 Associates</li>
                  <li><i className="fa fa-wrench" /> Product Development</li>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> warranty</li>
                  <li><i className="fa fa-lock" /> 1-3 mo. commitment *</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p><small>* Plans can be additive. Additional <i>Fox One</i> partners, associates, and interns are available at no monthly commitment at respective day rates. Remaining balance refunded upon project acceptance or cancellation.</small></p>
    </>;
  }
}
