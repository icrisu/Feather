import { ACCESS_TOKEN } from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case ACCESS_TOKEN: 
            return action.payload
        default: 
            return state;
    }    
}