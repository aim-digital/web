import React, {Component} from 'react';
import {Section} from '@machete-platform/core-bundle/components/layout';

export default class extends Section {
  render() {
    return (
      <Section>
        <h1>Vitruvian Virtues</h1>
        <div className="background">
          <div className="film"></div>
          <div className="image" style={{ backgroundImage: 'url(/@vitruvian-tech/machete-bundle/images/home/virtues.jpg)' }}></div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-xs-12">
            <h2>Roman Inspired<br />Software Designers</h2>
            <p>Drawing inspiration from innovative engineering throughout <em>Roman</em> history, our work and culture is founded on our <em>“Vitruvian Virtues”</em>, and is modeled after military organizations and fundamental natural elements, adapted to software design and development for businesses in today’s world.</p>
            <p>We are the <strong>Digital Special Forces</strong> for custom software and marketing solutions. Based in NYC, <em>Vitruvian Technology, Corp.</em> specializes in Project Management, Web/Software Development, Marketing, Design, QA, IT/System Administration, Content Production, and Data Science services.</p>
          </div>
          <div className="col-lg-4 col-xs-12 valign-middle">
            <blockquote data-credit="Wikipedia">
              <p><span><strong>Marcus<br />Vitruvius<br />Pollio</strong> (born c. 80–70 BC, died after c. 15 BC), commonly known as Vitruvius, was a Roman author, architect, civil engineer and military engineer during the 1st century BC, known for his multi-volume work entitled De architectura.</span></p>
              <p><span>His discussion of perfect proportion in architecture and the human body, led to the famous Renaissance drawing by Da Vinci of Vitruvian Man.</span></p>
            </blockquote>
          </div>
          <div className="col-lg-4 col-xs-12">
            <ul>
              <li><h3>Intelligence</h3></li>
              <li><h3>Communication</h3></li>
              <li><h3>Balance</h3></li>
              <li><h3>Elegance</h3></li>
              <li><h3>Trustworthiness</h3></li>
              <li><h3>Readiness</h3></li>
            </ul>
          </div>
        </div>
      </Section>
    );
  }
}
