import { SIDEBAR_ACTIVITY } from '../actions/types';
export default (state = '', action) => {
    switch (action.type) {
        case SIDEBAR_ACTIVITY: 
            return action.payload
        default: 
            return state;
    }  
}