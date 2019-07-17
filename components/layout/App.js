import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect-react16';
import {push as pushState} from 'react-router-redux';
import {App} from '@boilerplatejs/core/components/layout';
import {Nav} from '@aim-digital/web/components/layout';
import * as Config from '@boilerplatejs/core/actions/Config';
import * as Session from '@boilerplatejs/core/actions/Session';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const state = getState();
    const promises = [];

    if (!state['@boilerplatejs/core'].Config['@boilerplatejs/core']) {
      promises.push(dispatch(Config.components('@boilerplatejs/core')));
    }

    if (!Session.isLoaded(state)) {
      promises.push(dispatch(Session.load()));
    }

    return Promise.all(promises);
  }
}])

@connect(state => ({ user: state['@boilerplatejs/core'].Session.user }), {pushState})

export default class extends App {
  static propTypes = {
    children: PropTypes.object.isRequired,
    user: PropTypes.object,
    pushState: PropTypes.func.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (!this.props.user && nextProps.user) {
      // login
      this.props.pushState('/dashboard');
    } else if (this.props.user && !nextProps.user) {
      // logout
      this.props.pushState('/');
    }
  }

  render() {
    return (
      <App {...this.props} nav={<Nav/>}>
        {this.props.children}
        {/*<script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4265573.js"></script>*/}
      </App>
    );
  }
}
