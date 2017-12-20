import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import NukaCarousel from 'nuka-carousel';
import {Page} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import {Footer} from '@vitruvian-tech/machete-bundle/components/layout';

@connect(state => ({}), {transition})

export default class extends Page {
  static propTypes = {
    transition: PropTypes.func.isRequired
  };

  afterSlide = () => this.props.transition('slide', 0);

  render() {
    const { sections, headers } = this.props;
    const single = headers.length === 1;

    return (
      <Page {...this.props}>
        {headers.length ? (
          <section className={`${single ? 'single' : ''} header container`}>
            {single ? headers : (
              <NukaCarousel initialSlideWidth={970} afterSlide={this.afterSlide}>
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
