import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import AsyncLoader from '../components/utils/AsyncLoader';

const MainDashboard = AsyncLoader.load({ importPath: import('../components/pages/dashboards/MainDashboard') });
const UsersPage = AsyncLoader.load({ importPath: import('../components/pages/users/UsersPage') });


export default props => {
    return(
        <Switch>
            <Route path={ ROUTES.users.path } component={ UsersPage } />
            <Route path={`/main1`} component={ () => <p>ssss XXXXX </p>} />
            <Route path={`/main2`} component={ () => <p>ssss YYYYY </p>} />
            <Route path={`/signin`} component={ () => <p>ssss sign in </p>} />
            <Route path={ ROUTES.home.path } component={ MainDashboard } />
        </Switch>
    )
}