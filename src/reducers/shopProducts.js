import { SHOP_PRODUCTS } from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case SHOP_PRODUCTS: 
            return action.payload;                
        default: 
            return state;
    }    
}