import React, {Component} from 'react';
import ReactGA from 'react-ga';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@vitruvian-tech/machete-bundle/components/layout';

export default class extends Header {
  state = {
    loaded: false
  };

  transitionComplete = state => {
    this.setState({ loaded: true });

    ReactGA.event({
      category: 'Title Header',
      action: 'View',
      label: `Slide ${state.index + 1}`
    });
  };

  render() {
    const styles = require('./Component.scss');

    return (
      <Header runOnMount timer className={styles.slide} onTransitionComplete={this.transitionComplete}>
        {[
          <div className={[styles.content, 'content', styles.virtues].join(' ')} key="0">
            <div className={styles.logo}>
              <VelocityTransitionGroup enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.whirlIn', duration: 200 }}>
                {this.state.loaded && (
                  <img src={require('./images/insignia.png')}
                       alt="The Digital Special Forces for custom software and marketing solutions."
                       title="Vitruvian Technology, Corp."/>
                )}
              </VelocityTransitionGroup>
            </div>
            <section className={['preview'].join(' ')}>
              <h3>Virtues</h3>
              <ul className={'columns'}>
                <li><i className="fa fa-universal-access"/> Intelligence</li>
                <li><i className="fa fa-exchange"/> Communication</li>
                <li><i className="fa fa-balance-scale"/> Balance</li>
                <li><i className="fa fa-diamond"/> Elegance</li>
                <li><i className="fa fa-hand-peace-o"/> Trustworthiness</li>
                <li><i className="fa fa-check-square-o"/> Readiness</li>
                <li className={'more'}/>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.services].join(' ')} key="1">
            <section className={['preview'].join(' ')}>
              <h3>Services</h3>
              <ul>
                <li>Project Management <span className={[styles.service].join(' ')}>Process / Sourcing / Scheduling</span></li>
                <li>Software Development <span className={[styles.service].join(' ')}>Web / Mobile / Server</span></li>
                <li>Marketing <span className={[styles.service].join(' ')}> SEO / Social Media / Print / Apparel</span></li>
                <li>Design <span className={[styles.service].join(' ')}>Software / UI / UX / Graphic / Product</span></li>
                <li>Quality Assurance <span className={[styles.service].join(' ')}>Performance / Automation</span></li>
                <li>Creative <span className={[styles.service].join(' ')}>Photo / Video / Audio / Costume / Culinary</span></li>
                <li>IT/System Admin. <span className={[styles.service].join(' ')}>Database / Network / Cloud</span></li>
                <li>Security <span className={[styles.service].join(' ')}>Background / Surveillance / Forensics</span></li>
                <li>Sourcing <span className={[styles.service].join(' ')}>Human Capital / Product Development</span></li>
                <li>Legal <span className={[styles.service].join(' ')}>Investigatory / Collections / Domestic Violence</span></li>
                <li className={'more'}/>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.pricing, styles.products].join(' ')} key="2">
            <section className={['preview'].join(' ')}>
              <h3>Plans</h3>
              <ul>
                <li><strong>Managed</strong> <i>Subscription</i> <span className={[styles.price].join(' ')}><strong>$2,750k<sub>/1 mo.</sub></strong> / <strong>$15k<sub>/6 mo.</sub></strong></span></li>
                <li className={styles.asterisk}><small><i><strong>30 FREE hours/mo.</strong> applied to any/all available services.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>No resource fee</strong> for all services.</i></small></li>
                <li className={styles.asterisk}><small><i>Up to <strong>15% (or more) in savings</strong> over leading competitors.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>30-day money back guarantee</strong> applied to plan deposit.</i></small></li>
                <li><strong>Machete</strong> <i>Theming Platform</i> <span className={[styles.price].join(' ')}><strong>$1,999<sub><sup>.99</sup>/license</sub></strong></span></li>
                <li className={styles.asterisk}><small><i><strong>Mobile/desktop</strong> user interface development framework.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>CMS bundle</strong> integrations (i.e., Shopify, WordPress.)</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Hundreds of thousands</strong> of available libraries and plugins.</i></small></li>
                <li className={styles.asterisk}><small><i>Perfect for high-end <strong>e-comm and publishing</strong> solutions!</i></small></li>
                <li><strong>Machete</strong> <i>Enterprise</i> <span className={[styles.price].join(' ')}><strong><small>Starting at</small> $500k<sub>/yr.</sub></strong></span></li>
                <li className={styles.asterisk}><small><i><strong>10 FREE <em>Machete Theming Platform</em> licenses/yr.</strong> included.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Platform as a Service</strong> (high-scale hosting included.)</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Full-time dedicated resources:</strong> 2 developers, 1 project manager.</i></small></li>
                <li className={styles.asterisk}><small><i><strong>Swipe right</strong> or <strong>scroll down</strong> to contact us! &darr;&rarr;</i></small></li>
                <li><strong>Freelance</strong> <i>Ad-Hoc</i> <span className={[styles.price].join(' ')}><strong>+25%<sub>/resource</sub></strong></span></li>
                <li className={'more'}/>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.pricing].join(' ')} key="3">
            <section className={['preview'].join(' ')}>
              <h3>Rates</h3>
              <ul>
                <li>Project Managers <span className={[styles.price].join(' ')}><strong>$75-95<sub>/hr.</sub></strong></span></li>
                <li>Software Developers <span className={[styles.price].join(' ')}><strong>$40-75<sub>/hr.</sub></strong></span></li>
                <li>Marketers <span className={[styles.price, styles.starting].join(' ')}><strong>$65<sub>/hr.</sub></strong></span></li>
                <li>Designers <span className={[styles.price, styles.starting].join(' ')}><strong>$65<sub>/hr.</sub></strong></span></li>
                <li>Creative Producers <span className={[styles.price].join(' ')}><strong>$25-75<sub>/hr.</sub></strong></span></li>
                <li className={styles.asterisk}><small><i>Our studio includes copywriters, product developers, videographers, photographers, printers, musicians, costume designers, culinary artists, and brand curators.</i></small></li>
                <li>Interns <span className={[styles.price].join(' ')}><strong>$20<sub>/hr.</sub></strong></span></li>
                <li className={styles.asterisk}><small><i>Boost your project's performance while maximizing workforce potential by providing training opportunities for young professionals and aspiring individuals.</i></small></li>
                <li>System Administrators <span className={[styles.price, styles.starting].join(' ')}><strong>$65<sub>/hr.</sub></strong></span></li>
                <li>Security Analysts/Investigators <span className={[styles.price, styles.starting].join(' ')}><strong>$75<sub>/hr.</sub></strong></span></li>
                <li>Legal Counselors <span className={[styles.price, styles.starting].join(' ')}><strong>$75<sub>/hr.</sub></strong></span></li>
                <li className={'more'}/>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.portfolio].join(' ')} key="4">
            <section className={['preview'].join(' ')}>
              <h3>Missions</h3>
              <ul className={'columns'}>
                <li>Verizon</li>
                <li>Condé Nast</li>
                <li>Viacom</li>
                <li>The Daily Beast</li>
                <li>Saks 5th Avenue</li>
                <li>Refinery29</li>
                <li>Marvel Comics</li>
                <li>UrbanDaddy</li>
                <li>OneRx®</li>
                <li>RealtyMX™</li>
                <li className={'more'}/>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.team].join(' ')} key="5">
            <section className={['preview'].join(' ')}>
              <h3>Leadership</h3>
              <ul>
                <li>
                  <a href="mailto:pete@vitruvian.tech?subject=<VitruvianTech>%20Connect" target="_blank">
                    <i className="fa fa-envelope"/>
                  </a>
                  <a href="https://www.linkedin.com/in/peter-c-romano-3360b311" target="_blank">
                    <i className="fa fa-linkedin-square"/>
                  </a>
                  <a href="https://angel.co/peteromano" target="_blank">
                    <i className="fa fa-angellist"/>
                  </a>
                  <a href="https://www.facebook.com/peteromano/" target="_blank">
                    <i className="fa fa-facebook-official"/>
                  </a>
                  <a href="https://github.com/peteromano" target="_blank">
                    <i className="fa fa-github"/>
                  </a>
                  <span>Peter C. Romano<small> / Founder</small></span>
                </li>
                <li>
                  <a href="mailto:jessica@jesyousif.com?subject=<VitruvianTech>%20Connect" target="_blank">
                    <i className="fa fa-envelope"/>
                  </a>
                  <span>Jes Yousif<small> / Branding / Imagery</small></span>
                </li>
                <li>
                  <a href="mailto:reza@evolvinx.com?subject=<VitruvianTech>%20Connect" target="_blank">
                    <i className="fa fa-envelope"/>
                  </a>
                  <a href="https://www.linkedin.com/in/reza-khan-7b15ab9a" target="_blank">
                    <i className="fa fa-linkedin-square"/>
                  </a>
                  <span>Reza Khan<small> / Infrastructure</small></span>
                </li>
                <li>
                  <a href="http://www.pamelasisson.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <a href="https://www.linkedin.com/in/pamelasisson/" target="_blank">
                    <i className="fa fa-linkedin-square"/>
                  </a>
                  <span>Pamela Sisson<small> / Design</small></span>
                </li>
                <li style={{'padding': '10px 0'}}>
                  <p className={'humility' + ' ' + 'instruction'}>"We meticulously plan every detail of an operation, and prepare as best as we can, because we are trained to be as ready as possible for when the operation (almost inevitably, always) goes south."<i> -Peter C. Romano, Founder</i></p>
                  <p className={'humility' + ' ' + 'instruction'}><small><strong>Swipe right</strong> or <strong>scroll down</strong> to <strong>contact us</strong> today! &darr;&rarr;</small></p>
                </li>
              </ul>
            </section>
          </div>,

          <div className={[styles.content, 'content', styles.partners].join(' ')} key="6">
            <section className={['preview'].join(' ')}>
              <h3>Network</h3>
              <ul>
                <li>
                  <a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank" className={styles.phone}>
                    <i className="fa fa-phone"/>
                  </a>
                  <a title="Email: services@vitruvian.tech" href="mailto:services@vitruvian.tech?subject=<VitruvianTech>%20Connect">
                    <i className="fa fa-envelope"/>
                  </a>
                  <a title="LinkedIn: VitruvianTech" href="https://www.linkedin.com/company/vitruvian-technology-corp." target="_blank">
                    <i className="fa fa-linkedin-square"/>
                  </a>
                  <a title="Facebook: @VitruvianTechHQ" href="https://www.facebook.com/VitruvianTechHQ/" target="_blank">
                    <i className="fa fa-facebook-official"/>
                  </a>
                  <a title="GitHub: @vitruvian-tech" href="https://github.com/vitruvian-tech" target="_blank">
                    <i className="fa fa-github"/>
                  </a>
                  <span>VitruvianTech<small> / NYC / Direct</small></span>
                </li>
                <li>
                  <a href="http://www.evolvinx.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Evolvinx<small> / NYC / Partner</small></span>
                </li>
                <li>
                  <a href="http://softgreat.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>SoftGreat<small> / Belarus / Partner</small></span>
                </li>
                <li>
                  <a href="http://www.rethink-films.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <a href="https://www.facebook.com/rethinkfilms/" target="_blank">
                    <i className="fa fa-facebook-official"/>
                  </a>
                  <span>Rethink Films<small> / NYC / Partner</small></span>
                </li>
                <li>
                  <a href="http://http://triboroprinting.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Triboro Printing<small> / NYC / Partner</small></span>
                </li>
                <li>
                  <a href="http://anniecatdesign.studio/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Annie Cat Design<small> / NYC / Partner</small></span>
                </li>
                <li>
                  <a href="http://onilab.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Onilab<small> / Belarus / Partner</small></span>
                </li>
                <li>
                  <a href="http://www.chudovo.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Chudovo<small> / Germany / Partner</small></span>
                </li>
                <li>
                  <a href="http://mozidev.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Mozi Development<small> / UK / Partner</small></span>
                </li>
                <li>
                  <a href="http://intelegencia.com/" target="_blank">
                    <i className="fa fa-external-link"/>
                  </a>
                  <span>Intelegencia<small> / Atlanta / Partner</small></span>
                </li>
                <li>
                  <span>Generativ<small> / NYC / Partner</small></span>
                </li>
              </ul>
            </section>
          </div>
        ]}
      </Header>
    );
  }
}

