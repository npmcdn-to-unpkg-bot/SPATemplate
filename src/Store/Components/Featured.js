import {fromJS} from 'immutable';

const Featured = (state = fromJS({
  Properties: [],
  Search: ''
}), action)=>{
  switch (action.type) {
    case 'INIT_FEATURED':
      return state.set('Search', action.Link).set('Properties', action.Properties);
    default:
      return state;
  }
};

export default Featured;
