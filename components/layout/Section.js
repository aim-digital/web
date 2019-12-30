import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {transition} from '@boilerplatejs/core/actions/Transition';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import {open} from '@fox-zero/web/actions/Solution';
import {Section} from '@boilerplatejs/core/components/layout';
import {Solution} from '@fox-zero/web/components/buttons';

@connect(() => ({}), {transition, load, open})

export default class extends Section {
  static propTypes = {
    children: PropTypes.any,
    transition: PropTypes.func.isRequired,
    load: PropTypes.func.isRequired,
    open: PropTypes.func.isRequired,
    solution: PropTypes.object,
    title: PropTypes.object
  };

  openSolution = async () => {
    const { transition, load, open, solution } = this.props;
    const { index, slug } = solution;
    transition('slide', index);
    open({ ...solution, ...await load('posts', { slug, published: true }) });
  };

  render() {
    const { children, solution, title } = this.props;

    return (
      <Section>
        <h2>{solution.section}</h2>
        <h3>{title || solution.title}</h3>
        <div className="container">
          <div className="row">
            <div className="col-md-12 card">
              {children}
              <div>
                <Solution
                  onClick={this.openSolution}
                  icon={solution.icon}>
                  {solution.action}
                </Solution>
              </div>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}
