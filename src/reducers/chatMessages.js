import { CHAT_MESSAGES, NEW_MESSAGE } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CHAT_MESSAGES: 
            return action.payload;
        case NEW_MESSAGE: 
            return [...state, action.payload];                        
        default: 
            return state;
    }    
}