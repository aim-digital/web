import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import NukaCarousel from 'nuka-carousel';
import {Page} from '@machete-platform/core-bundle/components/layout';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';
import {Footer} from '@vitruvian-tech/machete-bundle/components/layout';

@connect(state => ({ header: state['@machete-platform/core-bundle'].Transition.header || 0 }), {transition})

export default class extends Page {
  static propTypes = {
    transition: PropTypes.func.isRequired,
    header: PropTypes.number.isRequired
  };

  componentWillMount = () => this.props.transition('slide', 0);

  afterSlide = async index => {
    await this.props.transition('header', index);
    await this.props.transition('slide', 0);
  };

  render() {
    const { sections, headers, header } = this.props;
    const single = headers.length === 1;

    return (
      <Page {...this.props}>
        {headers.length ? (
          <section className={`${single ? 'single' : ''} header container`}>
            {single ? headers : (
              <NukaCarousel initialSlideWidth={970} afterSlide={this.afterSlide} slideIndex={header}>
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
