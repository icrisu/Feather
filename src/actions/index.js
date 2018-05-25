import { NOTIFICATIONS, SIDEBAR_ACTIVITY, RECENT_SALES, RECENT_SALES_BY_CHANEL, GLOBAL_SEARCH_RESULTS,
    ACCESS_TOKEN, BEST_SELLING_ITEMS, RECENT_BALANCE, USERS, ADD_USER, REMOVE_USER, EDIT_USER,
    INVOICE_SEARCH_RESULTS, INVOICES, CHAT_ROOMS, NEW_MESSAGE, CHAT_MESSAGES } from './types';
import API from '../services/API';
import StorageService from '../services/StorageService';
import InitService from '../services/InitService';
import _ from 'lodash';
import uniqid from 'uniqid';

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

// you can create multiple search actions
// pass a search action to SearchWidget
export const searchUser = (term, cb) => {
	return (dispatch, getState) => {   
        API.getInstance().searchUser()
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
export const registerUser = (credentials, cb) => {
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

// get users
export const getUsers = (page, cb) => {
    return (dispatch, getState) => {
        API.getInstance().getUsers(page)
        .then(data => {
            if (!_.isNil(cb) && _.isFunction(cb)) {
                cb(data.data);
            }         
            dispatch({
                type: USERS,
                payload: data.data
            })        
        });
    }
}


// add user
export const addUser = (user, cb) => {
    // call API to add user
    // fake user_id (suppose to be provided by API)
    user._id = uniqid();
    return {
        type: ADD_USER,
        payload: user
    }
}

// edit user
export const editUser = (user, cb) => {
    // call API to edit user
    return {
        type: EDIT_USER,
        payload: user
    }
}

// remove user
export const removeUser = (userId, cb) => {
    // call API to remove user
    return {
        type: REMOVE_USER,
        payload: userId
    }
}

// retrive user events 
export const retriveUserEvents = (page = 1, userId = null) => {
    return new Promise((resolve, reject) => {
        API.getInstance().getUserEvents(page, userId)
        .then(data => {
            resolve(data.data)
        });        
    })
}

// retrive community events 
export const retriveCommunityEvents = (page = 1, resourceId = null) => {
    return new Promise((resolve, reject) => {
        API.getInstance().getCommunityEvents(page, resourceId)
        .then(data => {
            resolve(data.data)
        });
    })
}


// get invoices
export const getInvoices = (page, cb) => {
    return (dispatch, getState) => {
        API.getInstance().getInvoices(page)
        .then(data => {
            if (!_.isNil(cb) && _.isFunction(cb)) {
                cb(data.data);
            }         
            dispatch({
                type: INVOICES,
                payload: data.data
            })        
        });
    }
}

// you can create multiple search actions
// pass a search action to SearchWidget
export const searchInvoice = (term, cb) => {
	return (dispatch, getState) => {   
        API.getInstance().searchInvoice()
        .then(data => {
            if (_.isFunction(cb)) {
                cb(data.data);
            }
            dispatch({
                type: INVOICE_SEARCH_RESULTS,
                payload: data.data	
            })        
        })
        .catch(err => { console.log(err) });
    }
}

// you can create multiple search actions
// pass a search action to SearchWidget
export const chatSearch = (term, cb) => {
	return (dispatch, getState) => {   
        API.getInstance().chatSearch()
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

// retrive existing chat conversations
export const getChatRooms = cb => {
	return (dispatch, getState) => {   
        API.getInstance().getChatRooms()
        .then(data => {
            if (_.isFunction(cb)) {
                cb(data.data);
            }
            dispatch({
                type: CHAT_ROOMS,
                payload: data.data	
            })        
        })
        .catch(err => { console.log(err) });
    }
}

// send message
export const sendMessage = (message, chatRoomId) => {
    // implement API call / server implementation
    // don't forget to strip HTML for <script> tags on the server : )
    // fake message bellow
    const fakeMessage = {
        "_id": uniqid(), // !!! messages should have unique IDs
        "sender": {
            "isMe": true,
            "name": "Me",
            "thumb": "assets/dummy_data/imgs/user_9.jpg"
        },
        "body": {
            "text": message
        },
        "type": "regular",
        "time": "Now"
    };
    return {
        type: NEW_MESSAGE,
        payload: fakeMessage	        
    }
}

// retrieve messages from room
export const getRoomMessages = roomId => {
	return (dispatch, getState) => {   
        API.getInstance().getRoomMessages(roomId)
        .then(data => {
            dispatch({
                type: CHAT_MESSAGES,
                payload: data.data.messages	
            })        
        })
        .catch(err => { console.log(err) });
    }    
}
