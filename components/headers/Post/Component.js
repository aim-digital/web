import React from 'react';
import {PropTypes} from 'prop-types';
import {connect} from 'react-redux';
import {Header} from '@vitruvian-tech/machete-bundle/components/layout';
import moment from 'moment';

const getHeroImage = hero => hero.file ? hero.file.url : hero.url;

@connect(state => ({post: state['@machete-platform/contentful-bundle'].Entry.data}))

export default class extends Header {
  static propTypes = {
    post: PropTypes.object
  };

  render() {
    const styles = require('./Component.scss');
    const { post } = this.props;

    return (
      <Header className={styles.slide}>
        <div>
          <div className={styles.hero} style={{ backgroundImage: `url(${post.hero ? getHeroImage(post.hero) : require('./images/background.jpg')})` }}/>
          <div className={styles.title}>
            <h1>{post.title}</h1>
            <h2>{post.tagline}</h2>
          </div>
          <div className={styles.meta}>
            <span>By <strong>{post.author.name}</strong></span>
            <br />
            <span>Published <strong>{moment(post.published).format('MMMM Do YYYY, h:mm a')}</strong></span>
            <br />
            <span>From <strong>{post.area}</strong></span>
          </div>
        </div>
      </Header>
    );
  }
}
