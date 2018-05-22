import { INVOICES } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case INVOICES: 
            return action.payload;            
        default: 
            return state;
    }    
}