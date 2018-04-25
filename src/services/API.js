import axios from 'axios';
import safe from 'undefsafe';
import _ from 'lodash';
import { API_ROOT } from '../config/constants';


let instance;
const instanceKey = '@&^#*(';

// FAKE API CALLS 
// replace API_ROOT and implement your own
class API {

    constructor(key) {
        if (key !== instanceKey) {
            throw new Error('Cannot instantiate like this')
        }
    }
    
    // retrive notifications
    getNotifications() {
		return axios.get(`${API_ROOT}/notifications.html`);
    }

    static getInstance() {
        if (!instance) {
            instance = new API(instanceKey);
        }
        return instance;
    }
}

export default API;
