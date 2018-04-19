import React, {Component} from 'react';
import {VelocityTransitionGroup} from 'velocity-react';
import {Section} from '@machete-platform/core-bundle/components/layout';

export default class extends Section {
  state = {
    animating: false,
    index: 0
  };

  change = index => {
    this.setState({ index });
    this.scrollTo();
  };

  begin = () => this.setState({ animating: true });

  complete = () => this.setState({ animating: false });

  scrollTo = () => {
    if (global.scrollTo) {
      global.scrollTo(0, document.querySelector('.section.container').offsetTop - 40);
    }
  };

  sections = [
    <section key="0">
      <div className="row">
        <div className="col-lg-4 col-xs-12">
          <h2 className="text-center">The Mission</h2>
          <p>Birthed from agency backgrounds and “front-end” (UI/UX) skill-sets, <em>VitruvianTech</em> puts an emphasis on design and the bottom line - which includes security and performance around everything we touch.</p>
          <p>Built from our <em>Roman</em>-based principles, we believe design in any product must be minimal, absolutely functional, unconditionally flawless, and beautiful.</p>
          <p><em>As the <strong>Digital Special Forces</strong>, we are the first line of defense in affecting your product’s digital presence.</em></p>
        </div>
        <div className="col-lg-4 col-xs-12 valign-middle">
          <h2 className="text-center">Remote / Control</h2>
          <p>Using state-of-the-art communication tools (<em>Slack</em>, <em>Skype</em>, <em>G Suite</em>, etc.), conferencing services, and optimized project management tools (<em>JIRA</em>), our consultants and developers are all remote-based autonomous experts.</p>
          <p>We have a proven track record of excellent project performance and price cuts by eliminating over-head with well-written requirements, constant communication from our staff, and flexible developer shifts, yielding a balanced work/life culture, and highly motivated team members.</p>
          <p><em><strong>Communication is key</strong>, and we focus on deliverables and customer service, backed by our virtues.</em></p>
        </div>
        <div className="col-lg-4 col-xs-12">
          <h2 className="text-center">The Process</h2>
          <p><em>Foxtrot<sup>(sm)</sup></em> is our project management solution, based on <em>Agile</em> process methodologies.</p>
          <p><strong>Three unique tracking systems</strong> (<em>Foxtrot One, Two,</em> and <em>Three</em>) lets you choose the process that best suits your projects’ needs - from quick ad-hoc projects, to large-scale product life-cycles.</p>
          <p><em>Any of our three Foxtrot<sup>(sm)</sup> systems is included - free of charge - with our <strong>Managed Subscription</strong> plan!</em></p>
        </div>
      </div>
      <aside className="highlight">
        <div style={{ bottom: '1.5em', left: 0 }}><span>Fortune <strong>15-500</strong></span></div>
        <div style={{ bottom: '0px', left: 0 }}><span><strong>Start</strong>-Up</span></div>
        <div style={{ bottom: '1.5em', right: 0 }}><span><strong>Growing</strong> (Mid-Sized)</span></div>
        <div style={{ bottom: '0px', right: 0 }}><span><strong>Small</strong> Business</span></div>
      </aside>
    </section>,
    <section key="1">
      <div className="row">
        <div className="col-xs-12 col-lg-12">
          <h2 className="text-center">Featured Missions</h2>
          <div className="tag cloud highlight">
            <span>Verizon</span>
            <span>Halliburton</span>
            <span>HUGE</span>
            <span>The Daily Beast</span>
            <span>OneRx</span>
            <span>Saks 5th Avenue</span>
            <span>The New Yorker</span>
            <span>Refinery29</span>
            <span>Viacom</span>
            <span>UrbanDaddy</span>
            <span>Golf Digest</span>
            <span>Wall Street Journal</span>
            <span>Conde Nast</span>
            <span>RealtyMX</span>
            <span>Architectural Digest</span>
            <span>GQ Magazine</span>
            <span>Last Look</span>
            <span>Bon Appetit</span>
            <span>Conde Nast Traveler</span>
            <span>Marvel Comics</span>
            <span>Wired Magazine</span>
          </div>
        </div>
      </div>
    </section>
  ];

  render() {
    const { sections, state, change } = this;
    const { index, animating } = state;

    return (
      <Section className={`${animating ? 'animating' : ''}`}>
        <h1>Our Work</h1>
        <div className="background">
          <div className="film" style={{ opacity: '.85' }}></div>
          <div className="insignia image" style={{ backgroundImage: 'url(/@vitruvian-tech/machete-bundle/images/insignia.png)', zIndex: '2' }}></div>
          <div className="image" style={{ backgroundImage: 'url(/@vitruvian-tech/machete-bundle/images/home/missions.jpg)', opacity: '1' }}></div>
        </div>
        <VelocityTransitionGroup
          className="content"
          enter={{ easing: [ 0.17, 0.67, 0.83, 0.67 ], animation: 'transition.fadeIn', duration: 150, begin: this.begin, complete: this.complete }}>
          {sections[index]}
        </VelocityTransitionGroup>
        <div className="toggle">
          <div>
            <button onClick={() => change(+!index)}>Read about <strong>{`${index ? 'Our Process' : 'Our Featured Missions'}`}</strong></button>
          </div>
        </div>
      </Section>
    );
  }
}
