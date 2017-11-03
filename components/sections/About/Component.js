import React, {Component} from 'react';
import {Section} from '@vitruvian-tech/app-studio-core/components/layout';
import {Team} from '@vitruvian-tech/app-studio-vitruvian-tech/components/contentful';

export default class extends Section {

  state = {
    show: false
  };

  toggleImage = () => this.setState({show: !this.state.show});

  render() {
    const {show} = this.state;
    const styles = require('./Component.scss');
    const image = require('./images/stella.jpg');
    return (
      <Section>
        <h1>Vitruvian Virtues</h1>
        <ul>
          <li><i className="fa fa-universal-access"/> Mindfulness</li>
          <li><i className="fa fa-exchange"/> Communication</li>
          <li><i className="fa fa-balance-scale"/> Balance</li>
          <li><i className="fa fa-diamond"/> Elegance</li>
          <li><i className="fa fa-hand-peace-o"/> Trustworthiness</li>
          <li><i className="fa fa-check-square-o"/> Readiness</li>
        </ul>
        <section>
          <h2>Leaders</h2>
          <Team/>
        </section>
        <p>
          <br />
          <button className={'btn btn-' + (show ? 'warning' : 'success')} onClick={this.toggleImage}>
          {show ? 'Director, Canine Resources' : 'Meet Stella Spaghetti Romano'}</button>
          {show && <span>
            <br/>
            <br/>
            <img className={styles.img} src={image}/>
            <br/>
          </span>}
        </p>
      </Section>
    );
  }
}
