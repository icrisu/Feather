import { NOTIFICATIONS, SIDEBAR_ACTIVITY } from './types';
import API from '../services/API';

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