import _ from 'lodash';

export const ROUTES = {
    signin: { path: '/signin', isPublic: true },
    signup: { path: '/signup', isPublic: true },
    singleUser: { path: '/users/:_id' },
    users: { path: '/users' },
    eventsTimeline: { path: '/events-timeline' },
    // invoices
    newInvoice: { path: '/invoices/new' },
    viewInvoice: { path: '/invoices/view/:_id' },
    editInvoice: { path: '/invoices/edit/:_id' },    
    invoices: { path: '/invoices' },
    // chat
    messengerSingle: { path: '/messenger/:_id' },    
    messenger: { path: '/messenger' },
    // email
    emailView: { path: '/email/view/:_id' },
    inbox: { path: '/email/inbox' },
    sent: { path: '/email/sent' },
    draft: { path: '/email/draft' },
    trash: { path: '/email/trash' },
    starred: { path: '/email/starred' },
    spam: { path: '/email/spam' },
    newEmail: { path: '/email/new' },
    // shop
    shopCart: { path: '/shop/cart' },
    shopSingle: { path: '/shop/:_id' },
    shop: { path: '/shop' },
    // charts
    charts: { path: '/charts' },
    // pricing
    pricing: { path: '/pricing' },
    // map
    map: { path: '/store-locator' },
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