import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Footer} from '@machete-platform/core-bundle/components/layout';
import {update, stop} from '@vitruvian-tech/machete-bundle/controllers/Progress';

const PROGRESS_INTERVAL = .25;

@connect(state => ({ progress: state['@vitruvian-tech/machete-bundle'].Progress }), { update, stop })

export default class extends Footer {
  static propTypes = {
    progress: PropTypes.object,
    update: PropTypes.func.isRequired,
    stop: PropTypes.func.isRequired
  };

  timer = null;

  componentDidUpdate() {
    const { progress, update, stop } = this.props;
    const { status, loading } = progress;

    clearTimeout(this.timer);

    if (loading) {
      if (status === 1) {
        this.timer = setTimeout(stop, 250);
      } else if (status < 1) {
        this.timer = setTimeout(() => update(Math.max(PROGRESS_INTERVAL, (status + PROGRESS_INTERVAL) - (status * PROGRESS_INTERVAL))), 500);
      }
    } else if (status > 0) {
      update(0);
    }
  }

  render() {
    const { status, loading } = this.props.progress;

    return (
      <section className={`progress-loader ${loading ? 'loading' : ''}`}>
        <div style={{ width: `${status * 100}%` }}></div>
      </section>
    );
  }
}
