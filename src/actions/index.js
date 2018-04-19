import { SUBMENU_OPEN } from './types';

export const submenuOpened = _id => {
    return {
        payload: _id,
        type: SUBMENU_OPEN
    }
}