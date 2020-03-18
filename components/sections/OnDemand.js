import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return <Section solution={solutions[6]} title={<>Point &amp; Pay™<br />Sprint Pricing</>} />;
  }
}
