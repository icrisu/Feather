import { CHAT_ROOMS } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CHAT_ROOMS: 
            return action.payload
        default: 
            return state;
    }    
}
