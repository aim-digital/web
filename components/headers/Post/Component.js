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
    const {post} = this.props;

    return (
      <Header className={styles.slide}>
        <div>
          <div className={styles.hero} style={{ backgroundImage: `url(${post.hero ? getHeroImage(post.hero) : require('./images/background.jpg')})` }}/>
          <div className={styles.title}>
            <h1>{post.title}</h1>
            <h2>{post.tagline}</h2>
            <br />
            <span>Published {moment(post.published).format('MMMM Do YYYY, h:mm a [(EDT)]')}</span>
            <br />
            <span>By <strong>{post.author.name}</strong></span>
          </div>
        </div>
      </Header>
    );
  }
}
