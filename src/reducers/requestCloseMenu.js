import { REQUEST_MENU_CLOSE } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case REQUEST_MENU_CLOSE: 
            return action.payload;                
        default: 
            return state;
    }    
} 