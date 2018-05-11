import { SIMPLE_NOTIFICATION } from '../actions/types';
export default (state = false, action) => {
    switch (action.type) {
        case SIMPLE_NOTIFICATION: 
            return action.payload
        default: 
            return state;
    }  
}
