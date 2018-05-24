import { CHAT_MESSAGES } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CHAT_MESSAGES: 
            return action.payload;            
        default: 
            return state;
    }    
}