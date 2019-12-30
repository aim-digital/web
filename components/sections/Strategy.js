import React from 'react';
import {Section} from '@boilerplatejs/core/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section>
        <h2>{solutions[2].section}</h2>
        <h3>Introducing<br />FAST™ PLM</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              <img src="/@fox-zero/web/images/logo.png" />
              <p>{solutions[2].summary}</p>
              <p>With over 100 years of combined experience in the software development and digital marketing industries, our senior partners have curated a well-oiled "one-stop-shop" product lifecycle management (PLM) process, without the added weight of current industry standards.</p>
              <div>
                <Solution
                  onClick={() => this.openSolutionModal(solutions[2])}
                  icon={solutions[2].icon}>
                  {solutions[2].action}
                </Solution>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
