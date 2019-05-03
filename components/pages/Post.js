import {asyncConnect} from 'redux-async-connect-react16';
import {connect} from 'react-redux';
import {Page} from '@vitruvian-tech/machete-bundle/components/layout';
import {post} from '@machete-platform/contentful-bundle/actions/Entry';

const getHeroImage = hero => hero.file ? hero.file.url : hero.url;

@asyncConnect([{
  promise: ({store: {dispatch}, params: { id }}) => dispatch(post(id))
}])

@connect(state => {
  const { id, title, summary, hero, slug } = state['@machete-platform/contentful-bundle'].Entry.post;

  return {
    className: 'post',
    title: `${title} - VitruvianTech TV`,
    meta: [
      {name: 'description', content: title},
      {property: 'og:type', content: 'article'},
      {property: 'og:url', content: `https://vitruvian.tech/tv/${slug}/${id}`},
      {property: 'og:title', content: title},
      {property: 'og:description', content: summary},
      {property: 'og:image:secure_url', content: hero ? getHeroImage(hero) : 'https://s3.amazonaws.com/vitruvian-tech/cover.jpg'},
      {property: 'og:image', content: hero ? getHeroImage(hero) : 'https://s3.amazonaws.com/vitruvian-tech/cover.jpg'},
      {property: 'twitter:card', content: 'article'},
      {property: 'twitter:title', content: title},
      {property: 'twitter:description', content: summary},
      {property: 'twitter:image', content: hero ? getHeroImage(hero) : 'https://s3.amazonaws.com/vitruvian-tech/cover.jpg'}
    ]
  };
})

export default class extends Page {}
