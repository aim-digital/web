import React from 'react';
import {Header} from '@fox-zero/web/components/layout';

export default class extends Header {
  render() {
    return (
      <Header timer={0}
        runOnMount={__CLIENT__}
        images={['https://s3.amazonaws.com/content.foxzero.io/32a5919303ae42aea121df720962bdb9.jpg']}>
        <div className="content" >
          <h1>Design</h1>
          <h2 className="squad-header">Runway to<br />Success</h2>
          <section className="preview">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec dictum lacus, et dictum ex. Proin nec semper turpis, vel tincidunt lacus. Nulla at aliquet felis. Curabitur ac posuere felis.</p>
          </section>
        </div>
      </Header>
    );
  }
}
