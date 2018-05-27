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

    searchUser(term) {
        return axios.get(`${API_ROOT}/search-user-results.html`);
    }    
    
    getBestSelling() {
        return axios.get(`${API_ROOT}/best-selling.json`);
    }

    getRecentBalance() {
        return axios.get(`${API_ROOT}/recent-balance.json`);
    }    

    getExpenses() {
        return axios.get(`${API_ROOT}/expenses.json`);
    }

    getUsers(page = 1) {
        return axios.get(`${API_ROOT}/users_page${page}.json`);
    }    

    // fake user events API response
    getUserEvents(page = 1, userId = null) {
        return axios.get(`${API_ROOT}/user_events${page}.json`);
    }

    // fake community events API response
    getCommunityEvents(page = 1, userId = null) {
        return axios.get(`${API_ROOT}/community_events${page}.json`);
    }    

    searchInvoice(term) {
        return axios.get(`${API_ROOT}/search-invoice-results.html`);
    }
    
    getInvoices(page = 1) {
        return axios.get(`${API_ROOT}/invoices_page${page}.json`);
    }
    
    chatSearch(term) {
        return axios.get(`${API_ROOT}/chat_search.html`);
    }    

    getChatRooms() {
        return axios.get(`${API_ROOT}/chat_rooms.json`);
    }

    getRoomMessages(roomId) {
        return axios.get(`${API_ROOT}/chat_room_messages.json`);
    }

    getEmailMessages(page = 1) {
        return axios.get(`${API_ROOT}/emails_page${page}.json`);
    }      

    static getInstance() {
        if (!instance) {
            instance = new API(instanceKey);
        }
        return instance;
    }
}

export default API;
