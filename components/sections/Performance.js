import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return <Section solution={solutions[3]} title={<>Maintained<br />Performance</>} right />;
  }
}
