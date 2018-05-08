import { NOTIFICATIONS, SIDEBAR_ACTIVITY, RECENT_SALES, RECENT_SALES_BY_CHANEL, GLOBAL_SEARCH_RESULTS,
    ACCESS_TOKEN, BEST_SELLING_ITEMS, RECENT_BALANCE, EXPENCES } from './types';
import API from '../services/API';
import StorageService from '../services/StorageService';
import InitService from '../services/InitService';
import _ from 'lodash';

// retrive notifications
export const getNotifications = () => {
	return (dispatch, getState) => {   
        API.getInstance().getNotifications()
        .then(data => {
			dispatch({
				type: NOTIFICATIONS,
				payload: data.data	
			})
        })
        .catch(err => { console.log(err) });
    }
}

// retrive sidebar activity
export const getSidebarActivity = () => {
	return (dispatch, getState) => {   
        API.getInstance().getSidebarActivity()
        .then(data => {
			dispatch({
				type: SIDEBAR_ACTIVITY,
				payload: data.data	
			})
        })
        .catch(err => { console.log(err) });
    }
}

export const getRecentSales = cb => {
	return (dispatch, getState) => {   
        API.getInstance().getRecentSales()
        .then(data => {
            if (_.isFunction(cb)) {
                cb(data.data);
            }
            dispatch({
                type: RECENT_SALES,
                payload: data.data	
            })        
        })
        .catch(err => { console.log(err) });
    }
}

export const getRecentSalesByChannel = (cb, options = {}) => {
	return (dispatch, getState) => {   
        API.getInstance().getRecentSalesByChannel(options)
        .then(data => {
            if (_.isFunction(cb)) {
                cb(data.data);
            }
            dispatch({
                type: RECENT_SALES_BY_CHANEL,
                payload: data.data	
            })        
        })
        .catch(err => { console.log(err) });
    }
}

// you can create multiple search actions
// pass a search action to SearchWidget
export const search = (term, cb) => {
	return (dispatch, getState) => {   
        API.getInstance().searchForAnything()
        .then(data => {
            if (_.isFunction(cb)) {
                cb(data.data);
            }
            dispatch({
                type: GLOBAL_SEARCH_RESULTS,
                payload: data.data	
            })        
        })
        .catch(err => { console.log(err) });
    }
}

// authenticate
export const authenticate = (credentials, cb) => {
	return (dispatch, getState) => {   
        API.getInstance().authenticate(credentials)
        .then(data => {
            if (!_.isNil(cb) && _.isFunction(cb)) {
                cb(data.data);
            }
            // save user data & token to local storage
            StorageService.setUser(data.data);
            // load initial data
            InitService.getInstance().init();
            dispatch({
                type: ACCESS_TOKEN,
                payload: data.data.access_token	
            })
        })
        .catch(err => { console.log(err) });
    }
}

// register user
export const redisterUser = (credentials, cb) => {
	return (dispatch, getState) => {   
        API.getInstance().registerUser(credentials)
        .then(data => {
            if (!_.isNil(cb) && _.isFunction(cb)) {
                cb(data.data);
            }
            // save user data & token to local storage
            StorageService.setUser(data.data);
            // load initial data
            InitService.getInstance().init();
            dispatch({
                type: ACCESS_TOKEN,
                payload: data.data.access_token	
            })
        })
        .catch(err => { console.log(err) });
    }
}

// logout
export const logOut = () => {
    StorageService.setUser(null);
    return {
        type: ACCESS_TOKEN,
        payload: null
    };
}

// get best selling
export const getBestSelling = cb => {
    return (dispatch, getState) => {
        API.getInstance().getBestSelling()
        .then(data => {
            if (!_.isNil(cb) && _.isFunction(cb)) {
                cb(data.data);
            }         
            dispatch({
                type: BEST_SELLING_ITEMS,
                payload: data.data
            })        
        });
    }
}

// get recent balance
export const getRecentBalance = cb => {
    return (dispatch, getState) => {
        API.getInstance().getRecentBalance()
        .then(data => {
            if (!_.isNil(cb) && _.isFunction(cb)) {
                cb(data.data);
            }         
            dispatch({
                type: RECENT_BALANCE,
                payload: data.data
            })        
        });
    }
}

// retrive expences
export const getExpences = cb => {
    API.getInstance().getExpenses()
    .then(data => {
        if (!_.isNil(cb) && _.isFunction(cb)) {
            cb(data.data);
        }
    });    
}
