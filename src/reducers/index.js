import { combineReducers } from 'redux';
import submenu from './submenu';
import sidebarOpen from './sidebar';
import language from './language';
import { i18nReducer } from 'react-redux-i18n';
import notifications from './notifications';

export default combineReducers({
    i18n: i18nReducer,
    submenu,
    sidebarOpen,
    language,
    notifications,
    access_token: () => { return null },
})