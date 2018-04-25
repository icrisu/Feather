import { getNotifications } from '../actions';
import { store } from '../index';

let instance;
const instanceKey = '@&^#*(';

// perform tasks after app loads
// ex: get notifications
class InitService {

    constructor(key) {
        if (key !== instanceKey) {
            throw new Error('Cannot instantiate like this')
        }
    }
    
    init() {
        setTimeout(() => {
            store.dispatch(getNotifications())
        }, 1500)
    }

    static getInstance() {
        if (!instance) {
            instance = new InitService(instanceKey);
        }
        return instance;
    }
}

export default InitService;
