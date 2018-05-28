import _ from 'lodash';

export const ROUTES = {
    signin: { path: '/signin', isPublic: true },
    signup: { path: '/signup', isPublic: true },
    singleUser: { path: '/users/:_id' },
    users: { path: '/users' },
    eventsTimeline: { path: '/events-timeline' },
    newInvoice: { path: '/invoices/new' },
    viewInvoice: { path: '/invoices/view/:_id' },
    editInvoice: { path: '/invoices/edit/:_id' },    
    invoices: { path: '/invoices' },
    messengerSingle: { path: '/messenger/:_id' },    
    messenger: { path: '/messenger' },
    inbox: { path: '/email/inbox' },
    sent: { path: '/email/sent' },
    draft: { path: '/email/draft' },
    trash: { path: '/email/trash' },
    starred: { path: '/email/starred' },
    spam: { path: '/email/spam' },
    newEmail: { path: '/email/new' },
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