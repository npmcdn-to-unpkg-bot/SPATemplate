import {fromJS} from 'immutable';

const Menu = (state = fromJS({
  open:false
}), action)=>{
  switch (action.type) {
    case 'TOGGLE_MENU':
      return state.update('open', (open) => !open);
    default:
      return state;
  }
};

export default Menu;
