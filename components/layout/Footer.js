import React, {Component} from 'react';
import {Footer} from '@machete-platform/core-bundle/components/layout';

export default class extends Footer {
  render() {
    return (
      <Footer>
        <section>
          <h4>Communications</h4>
          <a title="Phone/SMS: +1 (646) 204-1732" href="tel:+16462041732" target="_blank">
            <i className="fa fa-phone"/>+1 (646) 204-1732
          </a>
          &nbsp;
          <a title="Email: services@vitruvian.tech" href="mailto:services@vitruvian.tech?subject=<VitruvianTech>%20Connect">
            <i className="fa fa-envelope"/>services@vitruvian.tech
          </a>
          &nbsp;
          <a title="GitHub: @vitruvian-tech" href="https://github.com/vitruvian-tech" target="_blank">
            <i className="fa fa-github"/>vitruvian-tech
          </a>
          &nbsp;
          <a title="LinkedIn: VitruvianTech" href="https://www.linkedin.com/company/vitruvian-technology-corp." target="_blank">
            <i className="fa fa-linkedin-square"/>VitruvianTech
          </a>
          &nbsp;
          <a title="AngelList: VitruvianTech" href="https://angel.co/vitruvian-technology-1" target="_blank">
            <i className="fa fa-angellist"/>VitruvianTech
          </a>
          &nbsp;
          <a title="Facebook: @VitruvianTechHQ" href="https://www.facebook.com/VitruvianTechHQ/" target="_blank">
            <i className="fa fa-facebook-official"/>VitruvianTechHQ
          </a>
          &nbsp;
          <a title="Twitter: @VitruvianTechHQ" href="https://twitter.com/VitruvianTechHQ" target="_blank">
            <i className="fa fa-twitter"/>VitruvianTechHQ
          </a>
          &nbsp;
          <a title="Instagram: @vitruvian.tech" href="https://www.instagram.com/vitruvian.tech/" target="_blank">
            <i className="fa fa-instagram"/>vitruvian.tech
          </a>
          &nbsp;
          <div><i className="fa fa-globe"/>Based in <strong>Long Island City, NYC</strong></div>
          &nbsp;
          <div><i className="fa fa-clock-o"/>Operational between <strong>10am-6pm</strong> (GMT-5)</div>
          &nbsp;
          <div className="clear" />
          <p><small><i>&copy;</i>2018 Vitruvian Technology, Corp.</small></p>
        </section>
      </Footer>
    );
  }
}
