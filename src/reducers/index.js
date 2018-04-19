import { combineReducers } from 'redux';
import submenu from './submenu';

export default combineReducers({
    test: () => { return {} },
    submenu,
    access_token: () => { return null },
})