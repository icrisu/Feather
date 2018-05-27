import { EMAIL_MESSAGES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case EMAIL_MESSAGES: 
            return action.payload;                
        default: 
            return state;
    }    
}