import {connect} from 'react-redux';
import {sync} from '@boilerplatejs/core/lib/Fetch';
import {load} from '@boilerplatejs/strapi/actions/Entry';
import {Page} from '@fox-zero/web/components/layout';

const HOST = 'https://foxzero.io';

const getHeroImage = hero => hero ? hero.url : `${HOST}/@fox-zero/web/images/logo.png`;

@sync([{
  promise: ({store: {dispatch}, location: {pathname}}) => dispatch(load('posts', { slug: pathname.replace(/^\//, '').split('/').join('-'), published: false }))
}])

@connect(state => {
  const { pathname } = state.router.location.pathname;
  const content = state['@boilerplatejs/strapi'].Entry.posts.content;
  const { title, summary, dek, media } = content;
  const image = getHeroImage(media[0]);

  return {
    className: 'about home detail',
    title: `${title} · ${dek || 'Fox Zero'}`,
    meta: [
      {name: 'description', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: [HOST, pathname].join('')},
      {property: 'og:title', content: title},
      {property: 'og:description', content: summary},
      {property: 'og:image:secure_url', content: image},
      {property: 'og:image', content: image},
      {property: 'twitter:card', content: 'article'},
      {property: 'twitter:title', content: title},
      {property: 'twitter:description', content: summary},
      {property: 'twitter:image', content: image}
    ]
  };
})

export default class extends Page {}