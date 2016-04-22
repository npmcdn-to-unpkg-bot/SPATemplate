import {fromJS} from 'immutable';

const Seo = (state = fromJS({
  Title: '',
  Description: ''
}), action)=>{
  switch (action.type) {
    case 'INIT_SEO':
      return state.set('Title', action.Title).set('Description', action.Description);
    default:
      return state;
  }
};

export default Seo;
