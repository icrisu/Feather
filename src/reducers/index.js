import { combineReducers } from 'redux';
import submenu from './submenu';
import sidebarOpen from './sidebar';
import language from './language';
import { i18nReducer } from 'react-redux-i18n';

export default combineReducers({
    i18n: i18nReducer,
    submenu,
    sidebarOpen,
    language,
    access_token: () => { return null },
})