import { CART_ITEMS, REMOVE_CART_ITEM, CLEAR_CART } from '../actions/types';

export default (state = [], action) => {
    switch (action.type) {
        case CART_ITEMS: 
            return action.payload
        case REMOVE_CART_ITEM: 
            let cartItems = [ ...state ];
            for (let i = 0; i < cartItems.length; i++) {
                if (cartItems[i]._id === action.payload) {
                    cartItems.splice(i, 1);
                    break;
                }
            }
            return cartItems;
        case CLEAR_CART: 
            return [];
        default: 
            return state;
    }    
}
