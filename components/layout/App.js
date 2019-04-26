import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect-react16';
import {push as pushState} from 'react-router-redux';
import {App} from '@machete-platform/core-bundle/components/layout';
import {Nav} from '@vitruvian-tech/machete-bundle/components/layout';
import * as Config from '@machete-platform/core-bundle/actions/Config';
import * as Session from '@machete-platform/core-bundle/actions/Session';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const state = getState();
    const promises = [];

    if (!state['@machete-platform/core-bundle'].Config['@machete-platform/core-bundle']) {
      promises.push(dispatch(Config.components('@machete-platform/core-bundle')));
    }

    if (!Session.isLoaded(state)) {
      promises.push(dispatch(Session.load()));
    }

    return Promise.all(promises);
  }
}])

@connect(state => ({ user: state['@machete-platform/core-bundle'].Session.user }), {pushState})

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
        <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4265573.js"></script>
      </App>
    );
  }
}
