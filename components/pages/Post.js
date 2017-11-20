import React from 'react';
import {asyncConnect} from 'redux-async-connect';
import {connect} from 'react-redux';
import {Page} from '@vitruvian-tech/app-studio-vitruvian-tech/components/layout';
import {load} from '@vitruvian-tech/app-studio-contentful/controllers/Entry';

@asyncConnect([{
  promise: ({store: {dispatch, getState}, params: { id }}) => dispatch(load(id))
}])

@connect(state => {
  const { title, tagline } = state['@vitruvian-tech/app-studio-contentful'].Entry.data;

  return {
    title: `${title} - VitruvianTech`,
    meta: [
      {name: 'description', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: 'http://www.vitruvian.tech/post/vitruvian-virtues/08-22-2017/2H9AEB2WpicAiMiO88YsSY'},
      {property: 'og:title', content: title},
      {property: 'og:description', content: tagline},
      {property: 'og:image', content: 'http://www.vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'},
      {property: 'twitter:card', content: 'article'},
      {property: 'twitter:title', content: title},
      {property: 'twitter:description', content: tagline},
      {property: 'twitter:image', content: 'http://www.vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'}
    ]
  };
})

export default class extends Page {}
