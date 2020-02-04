import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return (
      <Section solution={solutions[1]} title={<>Full Service<br />Digital Agency</>}>
        <img src="/@fox-zero/web/images/logo.png" />
        <p>{solutions[1].summary}</p>
        <p>With over 100 years of combined experience in the software development and digital marketing industries, our senior partners have curated a well-oiled "one-stop-shop" product lifecycle management (PLM) process, without the added weight of current industry standards.</p>
      </Section>
    );
  }
}
