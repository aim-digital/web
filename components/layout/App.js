import React, {Component} from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {asyncConnect} from 'redux-async-connect-react16';
import {push as pushState} from 'react-router-redux';
import {App} from '@machete-platform/core-bundle/components/layout';
import {Nav} from '@vitruvian-tech/machete-bundle/components/layout';
import * as Config from '@machete-platform/core-bundle/controllers/Config';
import * as Auth from '@machete-platform/core-bundle/controllers/Auth';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => {
    const state = getState();
    const promises = [];

    if (!state['@machete-platform/core-bundle'].Config['@machete-platform/core-bundle']) {
      promises.push(dispatch(Config.components('@machete-platform/core-bundle')));
    }

    if (!Auth.isLoaded(state)) {
      promises.push(dispatch(Auth.load()));
    }

    return Promise.all(promises);
  }
}])

@connect(state => ({ user: state['@machete-platform/core-bundle'].Auth.user }), {pushState})

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
        <span>
          {this.props.children}
          <script type="text/javascript" id="hs-script-loader" async defer src="//js.hs-scripts.com/4265573.js"></script>
          {/*<script dangerouslySetInnerHTML={{__html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '176357943093978');
            fbq('track', 'PageView');`}} />*/}
          {/*<noscript>*/}
          {/*<img height="1" width="1" style={{ display: 'none' }} src="https://www.facebook.com/tr?id=176357943093978&ev=PageView&noscript=1" />*/}
          {/*</noscript>*/}
        </span>
      </App>
    );
  }
}
