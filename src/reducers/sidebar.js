import { TOGGLE_MAIN_SIDEBAR } from '../actions/types'
export default (state = false, action) => {
    switch (action.type) {
        case TOGGLE_MAIN_SIDEBAR: 
            return action.payload
        default: 
            return state;
    }
}