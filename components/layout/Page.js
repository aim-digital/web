import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import NukaCarousel from 'nuka-carousel';
import {Page} from '@machete-platform/core-bundle/components/layout';
import {Footer} from '@vitruvian-tech/machete-bundle/components/layout';

export default class extends Page {
  render() {
    const { sections, headers } = this.props;
    const single = headers.length === 1;

    return (
      <Page {...this.props}>
        {headers.length ? (
          <section className={`${single ? 'single' : ''} header container`}>
            {single ? headers : (
              <NukaCarousel initialSlideWidth={970}>
                {headers}
              </NukaCarousel>
            )}
          </section>
        ) : <span/>}
        <section className="section container">
          {sections}
        </section>
        <Footer/>
      </Page>
    );
  }
}
