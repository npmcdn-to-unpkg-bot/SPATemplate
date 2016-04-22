import {fromJS} from 'immutable';

const Profile = (state = fromJS({
  poster: '',
  name: '',
  paragraph: '',
  pic: ''
}),action)=>{
  switch (action.type) {
    case 'INIT_PROFILE':
      return state.set('poster', action.poster)
                .set('name', action.name)
                .set('paragraph', action.paragraph)
                .set('pic', action.pic);
    default:
      return state;
  }
};

export default Profile;
