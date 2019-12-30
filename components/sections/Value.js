import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section solution={solutions[1]} title={<>100% Power<br />Every Hour</>} right>
        <img src="/@fox-zero/web/images/logo.png" />
        <p>{solutions[1].summary}</p>
        <p>Our FAST™ process is designed for high-quality yet cost-efficient end-to-end product management and rapid time to market.</p>
      </Section>
    );
  }
}
