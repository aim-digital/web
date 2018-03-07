import React, {Component} from 'react';
import {Section} from '@machete-platform/core-bundle/components/layout';

export default class extends Section {
  render() {
    return (
      <Section>
      <h1>Our Work</h1>
      <div className="background">
        <div className="film" style={{ opacity: '.85' }}></div>
        <div className="insignia image" style={{ backgroundImage: 'url(/@vitruvian-tech/machete-bundle/images/insignia.png)', zIndex: '2' }}></div>
        <div className="image" style={{ backgroundImage: 'url(/@vitruvian-tech/machete-bundle/images/home/missions.jpg)', opacity: '1' }}></div>
      </div>
      <div className="row">
        <div className="col-lg-4 col-xs-12">
          <h2 className="text-center">The Mission</h2>
          <p>Birthed from agency backgrounds and “front-end” (UI/UX) skill-sets, <em>VitruvianTech</em> puts an emphasis on design and the bottom line - which includes security and performance around everything we touch.</p>
          <p>Built from our <em>Roman</em>-based principles, we believe design in any product must be minimal, absolutely functional, unconditionally  awless, and beautiful.</p>
          <p><em>As the <strong>Digital Special Forces</strong>, we are the first line of defense in affecting your product’s digital presence.</em></p>
        </div>
        <div className="col-lg-4 col-xs-12 valign-middle">
          <h2 className="text-center">Remote / Control</h2>
          <p>Using state-of-the-art communication tools (Slack, Skype, etc.), conferencing services, and optimized project management tools, our consultants and developers are all remote-based autonomous experts, with  exibility for on-site engagements on a reasonable basis within the NYC tri-state area.</p>
          <p>We have a proven track record of excellent project performance and price cuts by eliminating over- head with well-written requirements, constant com- munication from our staff, and  exible developer shifts, yielding a balanced work/life culture.</p>
          <p><em>Communication is key, and we focus on deliverables and customer service, backed by our virtues.</em></p>
        </div>
        <div className="col-lg-4 col-xs-12">
          <h2 className="text-center">The Process</h2>
          <p><em>Foxtrot<sup>(sm)</sup></em> is our project management solution, based on Agile process methodologies.</p>
          <p><strong>Three unique</strong> tracking systems (<em>Foxtrot One, Two,</em> and <em>Three</em>) lets you choose the process that best suits your projects’ needs - from quick ad-hoc projects, to large-scale product life-cycles.</p>
          <p><em>Any of our three Foxtrot<sup>(sm)</sup> systems is included - free of charge - with our <strong>Managed Subscription</strong> plan!</em></p>
        </div>
      </div>
      </Section>
    );
  }
}
