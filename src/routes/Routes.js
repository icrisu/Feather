import _ from 'lodash';

export const ROUTES = {
    signin: { path: '/signin', isPublic: true },
    signup: { path: '/signup', isPublic: true },
    singleUser: { path: '/users/:_id' },
    users: { path: '/users' },
    eventsTimeline: { path: '/events-timeline' },
    invoices: { path: '/invoices' },
    newInvoice: { path: '/invoices/new' },
    viewInvoice: { path: '/invoices/view/:_id' },
    editInvoice: { path: '/invoices/edit/:_id' },
    chat: { path: '/messenger' },
    home: { path: '/' },
}

// check if a route is public
// see @RequireAuth.js
export const isPublicRoute = path => {
    let isPublic = false;
    for (var key in ROUTES) {
        if (ROUTES.hasOwnProperty(key) && !_.isNil(ROUTES[key].path) && ROUTES[key].path === path) {
            isPublic = ROUTES[key].isPublic === true;
            break;
        }
    }
    return isPublic;    
}