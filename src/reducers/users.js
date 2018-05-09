import { USERS, ADD_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case USERS: 
            return action.payload
        default: 
            return state;
    }    
}