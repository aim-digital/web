import {asyncConnect} from 'redux-async-connect';
import {Page} from '@vitruvian-tech/machete-bundle/components/layout';
import {list} from '@machete-platform/contentful-bundle/controllers/Entry';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => dispatch(list('team'))
}])

export default class extends Page {}
