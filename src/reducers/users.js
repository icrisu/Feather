import { USERS, ADD_USER, REMOVE_USER } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case USERS: 
            return action.payload;
        case REMOVE_USER:
            const { users } = state;
            
            for (let i = 0; i < users.length; i++) {
                if (users[i]._id === action.payload) {
                    users.splice(i, 1);
                    break;
                }
            }
            return { users: users, ...state };
        case ADD_USER:
            const usersList = [ action.payload, ...state.users ]
            return { ...state, users: usersList };    
        default: 
            return state;
    }    
}