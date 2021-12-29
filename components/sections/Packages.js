import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {Packages} from '@fox-zero/web/components/pricing';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section solution={solutions[3]} title={<>SQUAD<sup>®</sup> Pricing</>} right>
        <div className="paragraph">
          <p>SQUAD™ pricing plans are curated flat-fee monthly subscription consulting team bundles with each stage objectives serviced by Fox Zero™ agents, brokered U.S.A.-based trusted partners, and/or client team members.</p>
        </div>
        <Packages />
        <div className="paragraph">
          <p>Click below to learn more and to contact us about our subscription packages!</p>
        </div>
      </Section>
    );
  }
}
