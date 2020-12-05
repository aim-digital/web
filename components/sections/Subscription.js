import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {Subscription} from '@fox-zero/web/components/pricing';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section solution={solutions[4]} title={<>SQUAD™<br />Packaged Pricing</>}>
        <Subscription />
        <p>Click below to learn more and to contact us about our subscription packages!</p>
      </Section>
    );
  }
}
