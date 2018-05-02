import { getNotifications, getSidebarActivity } from '../actions';
import { store } from '../index';
import StorageService from './StorageService';
import _ from 'lodash';

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
        if (_.isNil(StorageService.getToken())) {
            return;
        }
        setTimeout(() => {
            store.dispatch(getNotifications())
        }, 1500);
        setTimeout(() => {
            store.dispatch(getSidebarActivity())
        }, 2000);        
    }

    static getInstance() {
        if (!instance) {
            instance = new InitService(instanceKey);
        }
        return instance;
    }
}

export default InitService;
