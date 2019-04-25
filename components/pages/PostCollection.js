import React from 'react';
import {asyncConnect} from 'redux-async-connect-react16';
import {connect} from 'react-redux';
import {Page} from '@vitruvian-tech/machete-bundle/components/layout';
import {posts} from '@machete-platform/contentful-bundle/actions/Entry';
import {postCollection} from '@vitruvian-tech/machete-bundle/data';

const getHeroImage = hero => hero.file ? hero.file.url : hero.url;

@asyncConnect([{
  promise: ({store: {dispatch}, params: { collection }}) => dispatch(posts(collection))
}])

@connect(state => {
  let { title, summary, hero, slug } = state['@machete-platform/contentful-bundle'].Entry.collection;

  title = title || postCollection.title;
  summary = summary || postCollection.summary;
  hero = hero || postCollection.hero;
  slug = slug || postCollection.slug;

  return {
    className: 'post',
    title: title ? `${title} - VitruvianTech TV` : 'VitruvianTech TV',
    meta: [
      {name: 'description', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: slug ? `https://vitruvian.tech/posts/${slug}` : `https://vitruvian.tech/posts`},
      {property: 'og:title', content: title},
      {property: 'og:description', content: summary},
      {property: 'og:image:secure_url', content: hero ? getHeroImage(hero) : 'https://vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'},
      {property: 'og:image', content: hero ? getHeroImage(hero) : 'https://vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'},
      {property: 'twitter:card', content: 'article'},
      {property: 'twitter:title', content: title},
      {property: 'twitter:description', content: summary},
      {property: 'twitter:image', content: hero ? getHeroImage(hero) : 'https://vitruvian.tech/dist/d6f6372a18fec2c0e6c0b81aa74de8cf.jpg'}
    ]
  };
})

export default class extends Page {}
