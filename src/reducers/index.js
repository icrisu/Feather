import { combineReducers } from 'redux';
import submenu from './submenu';
import sidebarOpen from './sidebar';
import language from './language';
import { i18nReducer } from 'react-redux-i18n';
import notifications from './notifications';
import sidebarActivity from './sidebarActivity';

export default combineReducers({
    i18n: i18nReducer,
    submenu,
    sidebarOpen,
    language,
    notifications,
    sidebarActivity,
    access_token: () => { return null },
})