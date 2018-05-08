import React from 'react';
import ReactGA from 'react-ga';
import {VelocityTransitionGroup} from 'velocity-react';
import {Header} from '@vitruvian-tech/machete-bundle/components/layout';

export default class extends Header {
  state = {
    loaded: false
  };

  transitionBegin = () => {
    this.setState({ loaded: false });
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
        <Header runOnMount className={styles.slide} onTransitionComplete={this.transitionComplete} onTransitionBegin={this.transitionBegin}>
          {[
            <div className={[styles.content, 'content', styles.virtues].join(' ')} key="0">
              <section className={['preview'].join(' ')}>
                <div className={styles.logo}>
                  <VelocityTransitionGroup enter={{easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.whirlIn', duration: 650 }}>
                    {this.state.loaded && (
                        <img src="/@vitruvian-tech/machete-bundle/images/insignia.png"
                             alt="The Digital Special Forces for custom software and marketing solutions."
                             title="Vitruvian Technology, Corp."/>
                    )}
                  </VelocityTransitionGroup>
                </div>
                <h3>Virtues</h3>
                <ul className={'columns'}>
                  <li><i className="fa fa-universal-access"/> Intelligence</li>
                  <li><i className="fa fa-exchange"/> Communication</li>
                  <li><i className="fa fa-balance-scale"/> Balance</li>
                  <li><i className="fa fa-diamond"/> Elegance</li>
                  <li><i className="fa fa-hand-peace-o"/> Trustworthiness</li>
                  <li><i className="fa fa-check-square-o"/> Readiness</li>
                  <li className={'more'} data-next="Missions"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.portfolio].join(' ')} key="1">
              <section className={['preview'].join(' ')}>
                <h3>Missions</h3>
                <ul className={'columns'}>
                  <li>Verizon</li>
                  <li>Viacom</li>
                  <li>Halliburton</li>
                  <li>HUGE</li>
                  <li>The Daily Beast</li>
                  <li>Refinery29</li>
                  <li>Wall Street Journal</li>
                  <li>Condé Nast</li>
                  <li>The New Yorker</li>
                  <li>GQ</li>
                  <li>Wired Magazine</li>
                  <li>Bon Appétit</li>
                  <li>Golf Digest</li>
                  <li>Architectural Digest</li>
                  <li>Condé Nast Traveler</li>
                  <li>Saks 5th Avenue</li>
                  <li>Marvel Comics</li>
                  <li>UrbanDaddy</li>
                  <li>OneRx®</li>
                  <li>RealtyMX™</li>
                  <li className={'more'} data-next="Services"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.services].join(' ')} key="2">
              <section className={['preview'].join(' ')}>
                <h3>Services</h3>
                <ul>
                  <li>Consulting <span className={[styles.service].join(' ')}>Strategic Development / Assessments</span></li>
                  <li>Project Management <span className={[styles.service].join(' ')}>Planning / Process / Sourcing</span></li>
                  <li>Software Development <span className={[styles.service].join(' ')}>Web / Mobile / Server</span></li>
                  <li>Marketing <span className={[styles.service].join(' ')}> SEO / Social Media / Print / Advertising</span></li>
                  <li>Design <span className={[styles.service].join(' ')}>Software / UI / UX / Graphic / Product</span></li>
                  <li>Quality Assurance <span className={[styles.service].join(' ')}>Performance / Automation</span></li>
                  <li>IT/System Admin. <span className={[styles.service].join(' ')}>Database / Network / Cloud</span></li>
                  <li>Content <span className={[styles.service].join(' ')}>Photo / Video / Audio / Costume / Culinary</span></li>
                  <li>Data Science <span className={[styles.service].join(' ')}>A.I. / Machine Learning / Analytics</span></li>
                  <li className={'more'} data-next="Plans"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.pricing, styles.products].join(' ')} key="3">
              <section className={['preview'].join(' ')}>
                <h3>Plans</h3>
                <ul>
                  <li><strong>Managed</strong> <i>Subscription</i> <span className={[styles.price].join(' ')}><strong>$3k<sub>/mo.</sub></strong> <strong>$8k<sub>/3 mo.</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i><strong>20 hours/mo.</strong> applied to any/all available services.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong><em>Foxtrot&#8480;</em></strong> target tracking and project management system.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>20% discount</strong> applied to any/all simultaneous subscriptions.</i></small></li>
                  <li className={styles.asterisk}><small><i>30-day <strong>money-back guarantee</strong>.</i></small></li>
                  <li><strong>Freelance</strong> <i>Time &amp; Materials</i> <span className={[styles.price].join(' ')}><strong>+30%<sub>/hourly rate</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i><strong>Independently managed</strong> (per contract negotiations.)</i></small></li>
                  <li className={styles.asterisk}><small><i>Typical for most hourly-based <strong>ad-hoc</strong> projects.</i></small></li>
                  <li><strong>Machete</strong> <i>Theme Platform</i> <span className={[styles.price].join(' ')}><strong>$2,999<sub><sup>.99</sup>/license</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i><strong>Universal mobile/desktop app UI PaaS</strong> for marketers.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>CMS bundle</strong> integrations (i.e., Shopify, WordPress.)</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>Hundreds of thousands</strong> of available libraries and plugins.</i></small></li>
                  <li className={styles.asterisk}><small><i>Perfect for custom <strong>e-comm</strong> and <strong>publishing</strong> solutions!</i></small></li>
                  <li><strong>Full-Time</strong> <i>Accelerator</i> <span className={[styles.price].join(' ')}><strong>$50k<sub>/3 mo.</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i><strong>1 dedicated developer</strong> (8 <em>Managed Team</em> 3 mo. subscriptions.)</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>1 <em>Machete Theme Platform</em></strong> license.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>Scroll down</strong> or <strong>swipe right</strong> to contact us today! &darr;&rarr;</i></small></li>
                  <li className={'more'} data-next="Rates"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.pricing].join(' ')} key="4">
              <section className={['preview'].join(' ')}>
                <h3>Rates</h3>
                <ul>
                  <li>Consultants <span className={[styles.price].join(' ')}><strong>$75-85<sub>/hr.</sub></strong></span></li>
                  <li>Project Managers <span className={[styles.price].join(' ')}><strong>$75-85<sub>/hr.</sub></strong></span></li>
                  <li>Software Developers <span className={[styles.price].join(' ')}><strong>$40-85<sub>/hr.</sub></strong></span></li>
                  <li>Marketers <span className={[styles.price, styles.starting].join(' ')}><strong>$65<sub>/hr.</sub></strong></span></li>
                  <li>Designers <span className={[styles.price, styles.starting].join(' ')}><strong>$65<sub>/hr.</sub></strong></span></li>
                  <li>System Administrators <span className={[styles.price, styles.starting].join(' ')}><strong>$65<sub>/hr.</sub></strong></span></li>
                  <li>Data Scientists <span className={[styles.price].join(' ')}><strong>$85-95<sub>/hr.</sub></strong></span></li>
                  <li>Content Producers <span className={[styles.price].join(' ')}><strong>$25-75<sub>/hr.</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i>Our studio includes copywriters, videographers, photographers, printers, musicians, costume designers, culinary artists, and brand curators.</i></small></li>
                  <li>Interns <span className={[styles.price].join(' ')}><strong>$20<sub>/hr.</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i>Boost your project's performance while maximizing workforce potential by providing training opportunities for young professionals and aspiring individuals.</i></small></li>
                  <li className={'more'} data-next="Hosting"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.pricing, styles.products].join(' ')} key="5">
              <section className={['preview'].join(' ')}>
                <h3>Hosting</h3>
                <ul>
                  <li><strong>Managed</strong> <i>Shared</i> <span className={[styles.price, styles.starting].join(' ')}><strong>$19<sub><sup>.99</sup>/mo.</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i><strong><em>Amazon Web Services</em></strong> high-availability hosting.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>Dedicated hosting</strong> services available.</i></small></li>
                  <li className={styles.asterisk}><small><i>Web, database, and storage <strong>server management</strong>.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>Infrastructure design</strong> and architecture consulting.</i></small></li>
                  <li><strong>Machete</strong> <i>Cloud</i> <span className={[styles.price, styles.starting].join(' ')}><strong>$99-149<sub><sup>.99</sup>/mo.</sub></strong></span></li>
                  <li className={styles.asterisk}><small><i>Exclusively designed for the <strong><em>Machete Theme Platform</em></strong>.</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>Highly scalable</strong> multi-clustered hosting (<strong>guaranteed reliability</strong>.)</i></small></li>
                  <li className={styles.asterisk}><small><i><strong>User-friendly Infrastructure as a Service</strong> and customer support.</i></small></li>
                  <li className={'more'} data-next="Leadership"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.team].join(' ')} key="6">
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
                    <a href="mailto:reza@evolvinx.com?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/reza-khan-7b15ab9a" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Reza Khan<small> / Infrastructure</small></span>
                  </li>
                  <li>
                    <a href="mailto:pamelaschwilk@gmail.com?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/pamelaschwilk/" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Pamela Schwilk<small> / Marketing</small></span>
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
                  <li>
                    <a href="mailto:Valk82@gmail.com?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <a href="https://www.linkedin.com/in/valeria-kalaidjian-70627738/" target="_blank">
                      <i className="fa fa-linkedin-square"/>
                    </a>
                    <span>Valeria Kalaidjian<small> / Administration</small></span>
                  </li>
                  <li style={{'padding': '1.25em 0 0'}}>
                    <p className={'humility' + ' ' + 'instruction'}>"You just gotta show up, and be consistent. 'Perfection' is merely the <em>pursuit</em> of perfection, with quality engineered over time by a well-planned, incremental process. After all, great management leads to quality, and our objective is to secure quality for all."<i> -Peter C. Romano, Founder</i></p>
                    <p className={'humility'} style={{'margin': '0'}}><small><strong>Scroll down</strong> or <strong>swipe right</strong> to <strong>contact us</strong> today! &darr;&rarr;</small></p>
                  </li>
                  <li className={'more'} data-next="Network"/>
                </ul>
              </section>
            </div>,

            <div className={[styles.content, 'content', styles.partners].join(' ')} key="7">
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
                    <a href="https://www.oxfordcorp.com/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <span>Oxford Global<small> / Global / Partner</small></span>
                  </li>
                  <li>
                    <a href="mailto:ajfprintworks@gmail.com ?subject=<VitruvianTech>%20Connect" target="_blank">
                      <i className="fa fa-envelope"/>
                    </a>
                    <span>AJF Print Works<small> / NYC / Partner</small></span>
                  </li>
                  <li>
                    <a href="http://http://triboroprinting.com/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <span>Triboro Printing<small> / NYC / Partner</small></span>
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
                    <a href="https://www.rishabhsoft.com/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <span>Rishabh Software<small> / Dallas / Partner</small></span>
                  </li>
                  <li>
                    <a href="http://softgreat.com/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <span>SoftGreat<small> / Belarus / Partner</small></span>
                  </li>
                  <li>
                    <a href="http://onilab.com/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <span>Onilab<small> / Belarus / Partner</small></span>
                  </li>
                  <li>
                    <a href="http://anniecatdesign.studio/" target="_blank">
                      <i className="fa fa-external-link"/>
                    </a>
                    <span>Annie Cat Design<small> / NYC / Partner</small></span>
                  </li>
                  <li className={styles.asterisk} style={{marginTop: '10px'}}><small><strong>Scroll down</strong> or <strong>swipe right</strong> to contact us today! &darr;&rarr;</small></li>
                </ul>
              </section>
            </div>
          ]}
        </Header>
    );
  }
}
