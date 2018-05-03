import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import AsyncLoader from '../components/utils/AsyncLoader';

const MainDashboard = AsyncLoader.load({ importPath: import('../components/pages/dashboards/MainDashboard') });

export default props => {
    return(
        <Switch>
            <Route path={ ROUTES.dashboard.path } component={ MainDashboard } />
            <Route path={`/main1`} component={ () => <p>ssss XXXXX </p>} />
            <Route path={`/main2`} component={ () => <p>ssss YYYYY </p>} />
            <Route path={`/signin`} component={ () => <p>ssss sign in </p>} />
            <Route path={ ROUTES.dashboard.path } component={ MainDashboard } />
        </Switch>
    )
}