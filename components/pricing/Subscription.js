import React, {Component} from 'react';

export default class extends Component {
  render() {
    return <>
      <div className="subscription container">
        <div className="row">
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Planning">Fox<br />One</h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Includes<br /><strong>15% New Project</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$59k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-bullseye" /> <strong>FAST™</strong> PLM Training</li>
                  <li><i className="fa fa-user" /> 320+ Partner Hours</li>
                  <li><i className="fa fa-check" /> Project Management</li>
                  <li><i className="fa fa-check" /> Accelerated Waterfall</li>
                  <li><i className="fa fa-check" /> Agile <i>(SQUAD, XP)</i></li>
                  <li><i className="fa fa-check" /> Discovery</li>
                  <li><i className="fa fa-check" /> Research &amp; Innovation</li>
                  <li><i className="fa fa-check" /> Business Analysis</li>
                  <li><i className="fa fa-check" /> Solution Architecture</li>
                  <li><i className="fa fa-check" /> Technical Design</li>
                  <li><i className="fa fa-check" /> Prototyping</li>
                  <li><i className="fa fa-check" /> UX Design</li>
                  <li><i className="fa fa-check" /> Wireframing</li>
                  {/* <li><i className="fa fa-check" /> User Journey Mapping</li> */}
                  <li><i className="fa fa-check" /> Initiative Roadmapping</li>
                  <li><i className="fa fa-clock-o" /> 2-8 Week Delivery</li>
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
                  <i className="fa fa-sun-o">
                    <span>Ask about our<br /><strong>20% Rapid Fire</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$99k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-umbrella" /> <strong>Wingman™</strong> Warranty</li>
                  <li><i className="fa fa-user" /> 240+ Partner Hours</li>
                  <li><i className="fa fa-user-plus" /> 320+ Associate Hours</li>
                  <li><i className="fa fa-check" /> Project Management</li>
                  <li><i className="fa fa-check" /> Agile <i>(SQUAD)</i></li>
                  <li><i className="fa fa-check" /> UI Design</li>
                  <li><i className="fa fa-check" /> UX Development</li>
                  <li><i className="fa fa-check" /> API Programming</li>
                  <li><i className="fa fa-check" /> Database Management</li>
                  <li><i className="fa fa-check" /> Cloud Networking</li>
                  <li><i className="fa fa-check" /> Service Orchestration</li>
                  <li><i className="fa fa-check" /> Third-Party Integration</li>
                  <li><i className="fa fa-check" /> Embedded Programming</li>
                  <li><i className="fa fa-check" /> Testing &amp; Automation</li>
                  <li><i className="fa fa-clock-o" /> Continuous Delivery</li>
                  <li><i className="fa fa-lock" /> 1-3 mo. commitment *</li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="col-md-4">
            <div className="plan">
              <div>
                <h4 data-type="Performance">Fox<br />Three</h4>
                <div className="discount">
                  <i className="fa fa-sun-o">
                    <span>Ask about our<br /><strong>10% Shout-Out</strong><br />discount!</span>
                  </i>
                </div>
              </div>
              <div>
                <span className="price">$29k<sub>/mo.</sub></span>
                <ul>
                  <li><i className="fa fa-user"></i> 50+ Partner Hours</li>
                  <li><i className="fa fa-user-plus" /> 160+ Associate Hours</li>
                  <li><i className="fa fa-user-plus" /> Available Add-Ons *</li>
                  <li><i className="fa fa-check" /> Process Management</li>
                  <li><i className="fa fa-check" /> Agile <i>(SQUAD, XP)</i></li>
                  <li><i className="fa fa-check" /> Long-Term Support</li>
                  <li><i className="fa fa-check" /> Client Team Integration</li>
                  <li><i className="fa fa-lock" /> No commitment *</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p><small>* Remaining last month balance refunded upon <i>Fox One/Fox Three</i> cancellations or <i>Fox Two</i> project release completions; additional <i>Fox Three</i> support partners and associates are available as add-ons at no monthly commitment; simultaneous plan subscriptions allowed.</small></p>
      </div>
    </>;
  }
}
