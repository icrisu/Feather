import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';

export default props => {
    return(
        <Switch>
            <Route path={ ROUTES.signin.path } component={ SignIn } />
            <Route path={ ROUTES.signup.path } component={ SignUp } />
        </Switch>
    )
}