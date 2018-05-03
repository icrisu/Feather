import _ from 'lodash';

export const ROUTES = {
    signin: { path: '/signin', isPublic: true },
    signup: { path: '/signup', isPublic: true },
    dashboard: { path: '/dashboard' },
    home: { path: '/' },
    shop: { path: '/shop' }
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