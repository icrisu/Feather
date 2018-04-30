import { NOTIFICATIONS, SIDEBAR_ACTIVITY, RECENT_SALES, RECENT_SALES_BY_CHANEL } from './types';
import API from '../services/API';
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

export const getRecentSalesByChannel = cb => {
	return (dispatch, getState) => {   
        API.getInstance().getRecentSalesByChannel()
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
