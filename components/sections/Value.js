import React from 'react';
import {Section} from '@boilerplatejs/core/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section>
        <h2 className="text-right">{solutions[1].section}</h2>
        <h3 className="text-right">100% Power<br />Every Hour</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <img src="/@fox-zero/web/images/logo.png" />
              <p>{solutions[1].summary}</p>
              <p>Our FAST™ process is designed for high-quality yet cost-efficient end-to-end product management and rapid time to market.</p>
              <div>
                <Solution
                  onClick={() => this.openSolutionModal(solutions[1])}
                  icon={solutions[1].icon}>
                  {solutions[1].action}
                </Solution>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
