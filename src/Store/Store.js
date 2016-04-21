import {combineReducers, createStore} from 'redux';

import Menu from './Components/Menu';

const reducer = combineReducers({
  Menu: Menu
});

const Store = createStore(reducer);

export default Store;
