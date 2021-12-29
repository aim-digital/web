import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <>
      <div className="subscription container">
        <div className="row">
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Design"><i className="fa fa-road" /><span>Fox 1</span></h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Price includes<br /><strong>20% New Project</strong><br />discount.</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$39k<sub>/version</sub></span>
                <ul>
                  <li><i className="fa fa-fighter-jet" /> Daily <strong>SQUAD<sup>®</sup></strong> Sessions</li>
                  {/* <li><i className="fa fa-user" /> 210+ Partner Hours</li> */}
                  <li><i className="fa fa-clock-o" /> Appx. 1 mo. Delivery</li>
                  <li><i className="fa fa-unlock" /> No Commitment <sup>*</sup></li>
                  <li><i className="fa fa-thumbs-o-up" /> Ideal for Consulting</li>
                  <li><i className="fa fa-check" /> Discovery</li>
                  <li><i className="fa fa-check" /> Research &amp; Innovation</li>
                  <li><i className="fa fa-check" /> Solution Architecture</li>
                  <li><i className="fa fa-check" /> Prototyping</li>
                  <li><i className="fa fa-check" /> Wireframing</li>
                  <li><i className="fa fa-check" /> Initiative Roadmapping</li>
                  <li><i className="fa fa-check" /> Project Management</li>
                  <li><i className="fa fa-check" /> Business Analysis</li>
                  <li><i className="fa fa-check" /> Technical Design</li>
                  <li><i className="fa fa-check" /> UX &amp; UI Design</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Development"><i className="fa fa-bullseye" /><span>Fox 2</span></h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Eligible for<br /><strong>20% Rapid Fire</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$79k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-fighter-jet" /> Daily <strong>SQUAD<sup>®</sup></strong> Sessions</li>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> Warranty</li>
                  <li><i className="fa fa-info-circle" /> Requires (1) <i>Fox One</i> <sup>†</sup></li>
                  {/* <li><i className="fa fa-user" /> 240+ Partner Hours</li>
                  <li><i className="fa fa-users" /> 320+ Associate Hours</li> */}
                  <li><i className="fa fa-clock-o" /> 3-4 mo. Delivery</li>
                  <li><i className="fa fa-lock" /> 3-4 mo. Commitment <sup>*</sup></li>
                  <li><i className="fa fa-thumbs-o-up" /> Ideal Agency Solution</li>
                  <li><i className="fa fa-check" /> Project Management</li>
                  <li><i className="fa fa-check" /> Business Analysis</li>
                  <li><i className="fa fa-check" /> Technical Design</li>
                  <li><i className="fa fa-check" /> UX &amp; UI Design</li>
                  <li><i className="fa fa-check" /> UX Development</li>
                  <li><i className="fa fa-check" /> API Programming</li>
                  <li><i className="fa fa-check" /> Database Management</li>
                  <li><i className="fa fa-check" /> 100% Web-Based</li>
                  <li><i className="fa fa-check" /> Desktop &amp; Mobile</li>
                  <li><i className="fa fa-check" /> Offline Operation</li>
                  <li><i className="fa fa-check" /> Cloud Networking</li>
                  <li><i className="fa fa-check" /> Service Orchestration</li>
                  <li><i className="fa fa-check" /> Enterprise Authentication</li>
                  <li><i className="fa fa-check" /> User Access Control</li>
                  <li><i className="fa fa-check" /> Third-Party Integration</li>
                  <li><i className="fa fa-check" /> Testing &amp; Automation</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Support"><i className="fa fa-wrench" /><span>Fox 3</span></h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Eligible for<br /><strong>25% Shout-Out</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$29k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-fighter-jet" /> Daily <strong>SQUAD<sup>®</sup></strong> Sessions</li>
                  <li><i className="fa fa-plus" /> Includes <i>Fox Two</i> Services</li>
                  <li><i className="fa fa-user"></i> 50+ Partner Hours</li>
                  <li><i className="fa fa-users" /> 160+ Associate Hours</li>
                  <li><i className="fa fa-user-plus" /> Available Add-Ons <sup>††</sup></li>
                  <li><i className="fa fa-clock-o" /> Continuous Delivery</li>
                  <li><i className="fa fa-unlock" /> No Commitment <sup>*</sup></li>
                  <li><i className="fa fa-thumbs-o-up" /> Ideal for Recruiting</li>
                  <li><i className="fa fa-check" /> Client Staff Integration</li>
                  <li><i className="fa fa-check" /> Data Migration</li>
                  <li><i className="fa fa-check" /> SEO &amp; SMO</li>
                  <li><i className="fa fa-check" /> Analytics &amp; Reporting</li>
                  <li><i className="fa fa-check" /> Marketing Consulting</li>
                  <li><i className="fa fa-check" /> Managed Services</li>
                  <li><i className="fa fa-check" /> Long-Term Support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p><sup>*</sup> <small>Balance of non-working days refunded or credited upon <i>Fox One/Fox Three</i> early completion or cancellation, or <i>Fox Two</i> early completion. <i>Fox Two</i> cancellations void warranty.</small></p>
        <p><sup>†</sup> <small><i>Fox Two</i> package, including warranty, is only available following a binding project version roadmap (<i>Statement of Work</i>) as produced by a one-time <i>Fox One</i> package subscription per version (each <i>Fox Two</i> package requires a discretely planned project version roadmap.)</small></p>
        <p><sup>††</sup> <small>Additional full-time <i>Fox Three</i> partners and associates are available at $22k/mo. and $15k/mo., respectively.</small></p>
      </div>
    </>;
  }
}
