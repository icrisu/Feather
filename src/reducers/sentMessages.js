import { SENT_MESSAGES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SENT_MESSAGES: 
            return action.payload;                
        default: 
            return state;
    }    
}