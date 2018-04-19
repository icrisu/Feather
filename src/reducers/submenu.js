import { SUBMENU_OPEN } from '../actions/types'
export default (state = null, action) => {
    switch (action.type) {
        case SUBMENU_OPEN: 
            return action.payload
        default: 
            return state;
    }
}