import { NOTIFICATIONS } from '../actions/types';
export default (state = '', action) => {
    switch (action.type) {
        case NOTIFICATIONS: 
            return action.payload
        default: 
            return state;
    }  
}