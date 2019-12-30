import React from 'react';
import {Section} from '@boilerplatejs/core/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section>
        <h2 className="text-right">{solutions[3].section}</h2>
        <h3 className="text-right">FoxZero™ JIRA<br />Tracker</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <img src="/@fox-zero/web/images/logo.png" />
              <p>{solutions[3].summary}</p>
              <p>With over 100 years of combined experience in the software development and digital marketing industries, our senior partners have curated a well-oiled "one-stop-shop" product lifecycle management (PLM) process, without the added weight of current industry standards.</p>
              <div>
                <Solution
                  onClick={() => this.openSolutionModal(solutions[3])}
                  icon={solutions[3].icon}>
                  {solutions[3].action}
                </Solution>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
