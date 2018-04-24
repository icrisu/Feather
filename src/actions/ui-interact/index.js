import { setLocale } from 'react-redux-i18n';

import { SUBMENU_OPEN, TOGGLE_MAIN_SIDEBAR, SELECT_LANGUAGE } from '../types';
import { store } from '../../index';

export const changeLang = lang => {
    store.dispatch(setLocale(lang));
    return {
        payload: lang,
        type: SELECT_LANGUAGE
    }
}

export const toggleMainSidebar = open => {
    return {
        payload: open,
        type: TOGGLE_MAIN_SIDEBAR
    }
}

export const submenuOpened = _id => {
    return {
        payload: _id,
        type: SUBMENU_OPEN
    }
}