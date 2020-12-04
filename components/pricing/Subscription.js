import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <>
      <div className="subscription container">
        <div className="row">
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Planning"><i className="fa fa-road" /><span>Fox<br />One</span></h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Price includes<br /><strong>15% New Project</strong><br />discount.</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$59k<sub>/version</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 320+ Partner Hours</li>
                  <li><i className="fa fa-fighter-jet" /> <strong>SQUAD™</strong> PLM Training</li>
                  <li><i className="fa fa-clock-o" /> 2-6 wk. Delivery</li>
                  <li><i className="fa fa-unlock" /> No Commitment *</li>
                  <li><i className="fa fa-plus" /> Discovery</li>
                  <li><i className="fa fa-plus" /> Research &amp; Innovation</li>
                  <li><i className="fa fa-plus" /> Solution Architecture</li>
                  <li><i className="fa fa-plus" /> Prototyping</li>
                  <li><i className="fa fa-plus" /> Wireframing</li>
                  <li><i className="fa fa-plus" /> Initiative Roadmapping</li>
                  <li><i className="fa fa-plus" /> Project Management</li>
                  <li><i className="fa fa-plus" /> Business Consulting</li>
                  <li><i className="fa fa-plus" /> Business Analysis</li>
                  <li><i className="fa fa-plus" /> Technical Design</li>
                  <li><i className="fa fa-plus" /> UX &amp; UI Design</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Development"><i className="fa fa-bullseye" /><span>Fox<br />Two</span></h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Eligible for<br /><strong>20% Rapid Fire</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$79k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user" /> 240+ Partner Hours</li>
                  <li><i className="fa fa-user-plus" /> 320+ Associate Hours</li>
                  <li><i className="fa fa-fighter-jet" /> <strong>SQUAD™</strong> PLM Training</li>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> Warranty</li>
                  <li><i className="fa fa-info-circle" /> Requires <i>Fox One</i> (x1)</li>
                  <li><i className="fa fa-clock-o" /> 3-4 mo. Delivery</li>
                  <li><i className="fa fa-lock" /> 3-4 mo. Commitment *</li>
                  <li><i className="fa fa-plus" /> Project Management</li>
                  <li><i className="fa fa-plus" /> Business Consulting</li>
                  <li><i className="fa fa-plus" /> Business Analysis</li>
                  <li><i className="fa fa-plus" /> Technical Design</li>
                  <li><i className="fa fa-plus" /> UX &amp; UI Design</li>
                  <li><i className="fa fa-plus" /> Process Management</li>
                  <li><i className="fa fa-plus" /> UX Development</li>
                  <li><i className="fa fa-plus" /> API Programming</li>
                  <li><i className="fa fa-plus" /> Database Management</li>
                  <li><i className="fa fa-plus" /> Desktop &amp; Mobile</li>
                  <li><i className="fa fa-plus" /> Offline Caching</li>
                  <li><i className="fa fa-plus" /> Web-based Technologies</li>
                  <li><i className="fa fa-plus" /> Cloud Networking</li>
                  <li><i className="fa fa-plus" /> Service Orchestration</li>
                  <li><i className="fa fa-plus" /> Enterprise Authentication</li>
                  <li><i className="fa fa-plus" /> Third-Party Integration</li>
                  <li><i className="fa fa-plus" /> Testing &amp; Automation</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Support"><i className="fa fa-wrench" /><span>Fox<br />Three</span></h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Eligible for<br /><strong>25% Shout-Out</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$29k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user"></i> 50+ Partner Hours</li>
                  <li><i className="fa fa-user-plus" /> 160+ Associate Hours</li>
                  <li><i className="fa fa-user-plus" /> Available Add-Ons *</li>
                  <li><i className="fa fa-fighter-jet" /> <strong>SQUAD™</strong> PLM Training</li>
                  <li><i className="fa fa-info-circle" /> Includes <i>Fox Two</i> Services</li>
                  <li><i className="fa fa-clock-o" /> Continuous Delivery</li>
                  <li><i className="fa fa-unlock" /> No Commitment *</li>
                  <li><i className="fa fa-plus" /> Long-Term Support</li>
                  <li><i className="fa fa-plus" /> Data Migration</li>
                  <li><i className="fa fa-plus" /> Analytics &amp; Reporting</li>
                  <li><i className="fa fa-plus" /> Marketing Consulting</li>
                  <li><i className="fa fa-plus" /> Client Staff Integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p><small>* Remaining balance refunded upon <i>Fox One/Fox Three</i> completion or cancellation. or <i>Fox Two</i> project version completion; additional <i>Fox Three</i> support partners and associates are available as add-ons at no monthly commitment; simultaneous plan subscriptions allowed.</small></p>
      </div>
    </>;
  }
}
