import axios from 'axios';
// import safe from 'undefsafe';
// import _ from 'lodash';
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
    
    // authenticate
    authenticate(credentials) {
        // simulate API delay & API user response
        // const { email, password } = credentials;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        access_token: 'JWT_ACCESS_TOKEN',
                        firstName: 'Kara',
                        lastName: 'Thrace',
                        thumb: process.env.PUBLIC_URL + '/assets/dummy_data/imgs/user_1.jpg'
                    }
                })
            }, 1500);
        })
    }

    // register user
    registerUser(credentials) {
        // simulate API delay & API user response
        // const { email, password } = credentials;
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    data: {
                        access_token: 'JWT_ACCESS_TOKEN',
                        firstName: 'Kara',
                        lastName: 'Thrace',
                        thumb: process.env.PUBLIC_URL + '/assets/dummy_data/imgs/user_1.jpg'
                    }
                })
            }, 1500);
        })
    }    

    // retrive notifications
    getNotifications() {
		return axios.get(`${API_ROOT}/notifications.html`);
    }

    getSidebarActivity() {
        return axios.get(`${API_ROOT}/sidebar-activity.html`);
    }

    getRecentSales() {
        return axios.get(`${API_ROOT}/recent-sales.json`);
    }

    getRecentSalesByChannel(options = {}) {
        const { fillColors } = options;
        if (fillColors) {
            return axios.get(`${API_ROOT}/recent-sales-by-chanel-fill-colors.json`);
        }
        return axios.get(`${API_ROOT}/recent-sales-by-chanel.json`);
    } 
    
    searchForAnything(term) {
        return axios.get(`${API_ROOT}/search-results.html`);
    }  
    
    getBestSelling() {
        return axios.get(`${API_ROOT}/best-selling.json`);
    }

    getRecentBalance() {
        return axios.get(`${API_ROOT}/recent-balance.json`);
    }    

    static getInstance() {
        if (!instance) {
            instance = new API(instanceKey);
        }
        return instance;
    }
}

export default API;
