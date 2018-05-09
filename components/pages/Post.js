import React from 'react';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';
import {Page} from '@vitruvian-tech/machete-bundle/components/layout';
import {post} from '@machete-platform/contentful-bundle/controllers/Entry';

const getHeroImage = hero => hero.file ? hero.file.url : hero.url;

@asyncConnect([{
  promise: ({store: {dispatch, getState}, params: { id }}) => dispatch(post(id))
}])

@connect(state => {
  const { id, title, summary, hero, slug } = state['@machete-platform/contentful-bundle'].Entry.data;

  return {
    title: `${title} - VitruvianTech`,
    meta: [
      {name: 'description', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: `http://vitruvian.tech/post/${slug}/${id}`},
      {property: 'og:title', content: title},
      {property: 'og:description', content: summary},
      {property: 'og:image', content: hero ? getHeroImage(hero) : 'http://vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'},
      {property: 'twitter:card', content: 'article'},
      {property: 'twitter:title', content: title},
      {property: 'twitter:description', content: summary},
      {property: 'twitter:image', content: hero ? getHeroImage(hero) : 'http://vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'}
    ]
  };
})

export default class extends Page {}
