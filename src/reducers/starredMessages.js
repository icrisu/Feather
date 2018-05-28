import { STARRED_MESSAGES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case STARRED_MESSAGES: 
            return action.payload;                
        default: 
            return state;
    }    
}