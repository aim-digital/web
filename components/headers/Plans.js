import React from 'react';
import ReactGA from 'react-ga';
import {Header} from '@vitruvian-tech/machete-bundle/components/layout';

export default class extends Header {
  transitionComplete = state => {
    ReactGA.event({
      category: 'Plans Header',
      action: 'View',
      label: `Slide ${state.index + 1}`
    });
  };

  render() {
    const styles = require('./Title/Component.scss');

    return (
      <Header runOnMount className={styles.slide} onTransitionComplete={this.transitionComplete}>
        {[
          <div className={[styles.content, 'content', styles.pricing, styles.products].join(' ')} key="0">
            <section className={['preview'].join(' ')}>
              <h3>Plans</h3>
              <ul>
                <li><strong>Managed</strong> <i>Subscription</i> <span className={[styles.price].join(' ')}><strong>$2.5k<sub>/mo.</sub></strong> / <strong>$7k<sub>/3 mo.</sub></strong></span></li>
                <li className={styles.asterisk}><small><i><strong>20 hours/mo.</strong> applied to any/all available services.</i></small></li>
                <li className={styles.asterisk}><small><i><strong><em>Foxtrot&#8480;</em></strong> target tracking &amp; <strong>project management</strong> system.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>20% discount</strong> applied to any/all simultaneous subscriptions.</i></small></li>
                <li className={styles.asterisk}><small><i>30-day <strong>money-back guarantee</strong>.</i></small></li>
                <li><strong>Freelance</strong> <i>Hourly</i> <span className={[styles.price].join(' ')}><strong>+25%<sub>/hourly rate</sub></strong></span></li>
                <li className={styles.asterisk}><small><i>Access to our <strong>freelancer</strong> and <strong>partner</strong> resource networks.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Independently managed</strong> (as per client/resource negotiations.)</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Industry standard</strong> pricing, based on <strong>time and materials</strong>.</i></small></li>
                <li className={styles.asterisk}><small><i>Typical for most <strong>ad-hoc</strong> projects.</i></small></li>
                <li><strong>Machete</strong> <i>Theme Platform</i> <span className={[styles.price].join(' ')}><strong>$1,999<sub><sup>.99</sup>/license</sub></strong></span></li>
                <li className={styles.asterisk}><small><i><strong>Mobile/desktop</strong> app/website <strong>development framework</strong>.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>CMS bundle</strong> integrations (i.e., Shopify, WordPress.)</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Hundreds of thousands</strong> of available libraries and plugins.</i></small></li>
                <li className={styles.asterisk}><small><i>Perfect for custom <strong>e-comm</strong> and <strong>publishing</strong> solutions!</i></small></li>
                <li><strong>Full-Time</strong> <i>Accelerator</i> <span className={[styles.price].join(' ')}><strong>$50k<sub>/3 mo.</sub></strong></span></li>
                <li className={styles.asterisk}><small><i><strong>8 <em>Managed Team</em></strong> (1 x "full-time") quarterly subscriptions.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>2 <em>Machete Theme Platform</em></strong> licenses.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Scroll down</strong> or <strong>swipe right</strong> to contact us today! &darr;&rarr;</i></small></li>
              </ul>
            </section>
          </div>
        ]}
      </Header>
    );
  }
}

