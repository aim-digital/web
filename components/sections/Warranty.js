import React from 'react';
import {Section} from '@fox-zero/web/components/layout';
import {solutions} from '@fox-zero/web/data';

export default class extends Section {
  render() {
    return <Section solution={solutions[5]} title={<>Wingman™ Bond<br />Protection</>} right />;
  }
}
