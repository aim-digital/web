import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {transition} from '@machete-platform/core-bundle/controllers/Transition';

const PROGRESS_INTERVAL = .20;

@connect(state => ({ progress: state['@machete-platform/core-bundle'].Transition.progress }), { transition })

export default class extends Component {
  static propTypes = {
    progress: PropTypes.number,
    transition: PropTypes.func.isRequired,
  };

  state = {
    loading: false
  };

  timer = null;

  componentDidUpdate() {
    const { progress, transition } = this.props;

    clearTimeout(this.timer);

    if (progress === 1) {
      this.state.loading && setTimeout(() => this.setState({ loading: false }), 250);
      setTimeout(() => transition({ progress: 0 }), 500);
    } else if (progress > 0) {
      !this.state.loading && this.setState({ loading: true });
      this.timer = setTimeout(() => transition({ progress: (progress + PROGRESS_INTERVAL) - (progress * PROGRESS_INTERVAL) }), 500);
    }
  }

  render() {
    const { progress } = this.props;
    const { loading } = this.state;

    return (
      <section className={`progress-loader ${loading ? 'loading' : ''}`}>
        <div style={{ width: `${progress * 100}%` }}></div>
      </section>
    );
  }
}
