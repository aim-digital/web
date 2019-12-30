import React from 'react';
import {Section} from '@boilerplatejs/core/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section>
        <h2>{solutions[4].section}</h2>
        <h3>Perfect Aim™<br />100% Guarantee</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <img src="/@fox-zero/web/images/logo.png" />
              <p>{solutions[4].summary}</p>
              <p>With over 100 years of combined experience in the software development and digital marketing industries, our senior partners have curated a well-oiled "one-stop-shop" product lifecycle management (PLM) process, without the added weight of current industry standards.</p>
              <div>
                <Solution
                  onClick={() => this.openSolutionModal(solutions[4])}
                  icon={solutions[4].icon}>
                  {solutions[4].action}
                </Solution>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
