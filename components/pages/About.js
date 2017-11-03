import {asyncConnect} from 'redux-async-connect';
import {Page} from '@vitruvian-tech/app-studio-vitruvian-tech/components/layout';
import {list} from '@vitruvian-tech/app-studio-contentful/reducers/Entry';

@asyncConnect([{
  promise: ({store: {dispatch, getState}}) => dispatch(list('team'))
}])

export default class extends Page {}
