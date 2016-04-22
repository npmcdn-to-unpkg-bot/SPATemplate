import {fromJS} from 'immutable';

const Foot = (state = fromJS({
  Copyright:'',
  Information:'',
  Developer:'',
  Facebook:'',
  Twitter:'',
  Instagram:''
}), action)=>{
  switch (action.type) {
    case 'INIT_FOOT':
      return state.set('Copyright', action.Copyright)
                  .set('Information', action.Information)
                  .set('Developer', action.Developer)
                  .set('Facebook', action.Facebook)
                  .set('Twitter', action.Twitter)
                  .set('Instagram', action.Instagram);
    default:
      return state;
  }
};

export default Foot;
