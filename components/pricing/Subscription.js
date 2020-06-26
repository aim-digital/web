import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <>
      <div className="subscription container">
        <div className="row">
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Consulting">Fox<br />One</h4>
                <div className="discount">
                  <i className="fa fa-certificate">
                    <span>Ask about our <strong>Shout-Out</strong> 15% Discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$49k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> ½ Lead Partner</li>
                  <li><i className="fa fa-user-plus" /> 1 Support Partner</li>
                  <li><i className="fa fa-user-plus" /> Support Add-Ons *</li>
                  <li><i className="fa fa-bullseye" /> <strong>FAST™</strong> PLM Training</li>
                  <li><i className="fa fa-check" /> Development Support</li>
                  <li><i className="fa fa-check" /> Project Planning</li>
                  <li><i className="fa fa-check" /> Architecture &amp; Design</li>
                  <li><i className="fa fa-check" /> Business Analysis</li>
                  <li><i className="fa fa-check" /> Research &amp; Innovation</li>
                  <li><i className="fa fa-unlock" /> No commitment *</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Development">Fox<br />Two</h4>
                <div className="discount">
                  <i className="fa fa-certificate">
                    <span>Ask about our <strong>Rapid Fire</strong> 15% Discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$89k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 1 Lead Partner</li>
                  <li><i className="fa fa-user-plus" /> 1 Support Partner</li>
                  <li><i className="fa fa-user-plus" /> 1 Support Associate</li>
                  <li><i className="fa fa-bullseye" /> <strong>FAST™</strong> PLM Training</li>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> Warranty</li>
                  <li><i className="fa fa-check" /> UX Development</li>
                  <li><i className="fa fa-check" /> API Programming</li>
                  <li><i className="fa fa-check" /> Database Management</li>
                  <li><i className="fa fa-check" /> Cloud Networking</li>
                  <li><i className="fa fa-check" /> Service Integration</li>
                  <li><i className="fa fa-check" /> Hardware Programming</li>
                  <li><i className="fa fa-lock" /> 1-3 mo. commitment *</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Development">Fox<br />Three</h4>
                <div className="discount">
                  <i className="fa fa-certificate">
                    <span>Ask about our <strong>Rapid Fire</strong> 15% Discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$159k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 1 Lead Partner</li>
                  <li><i className="fa fa-user-plus" /> 2 Support Partners</li>
                  <li><i className="fa fa-user-plus" /> 3 Support Associates</li>
                  <li><i className="fa fa-bullseye" /> <strong>FAST™</strong> PLM Training</li>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> Warranty</li>
                  <li><i className="fa fa-check" /> UX Development</li>
                  <li><i className="fa fa-check" /> API Programming</li>
                  <li><i className="fa fa-check" /> Database Management</li>
                  <li><i className="fa fa-check" /> Cloud Networking</li>
                  <li><i className="fa fa-check" /> Service Integration</li>
                  <li><i className="fa fa-check" /> Hardware Programming</li>
                  <li><i className="fa fa-rocket" /> 2x <i>Fox Two</i> TTM *</li>
                  <li><i className="fa fa-lock" /> 1-3 mo. commitment *</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p><small>* Additional <i>Fox One</i> partners, associates, and interns are available as add-ons at no monthly commitment. Remaining balance refunded upon project acceptance or <i>Fox One</i> cancellation. Plans can be additive. "TTM" refers to "Time to market".</small></p>
    </>;
  }
}
