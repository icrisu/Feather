import { SELECT_LANGUAGE } from '../actions/types';
import { DEFAULT_LANG } from '../config/constants';

export default (state = DEFAULT_LANG, action) => {
    switch (action.type) {
        case SELECT_LANGUAGE: 
            return action.payload
        default: 
            return state;
    }    
}