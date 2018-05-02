import React from 'react';
import { Switch, Route } from 'react-router-dom';
// import Routes from './Routes';

export default props => {
    return(
        <Switch>
            <Route path={`/main1`} component={ () => <p>ssss XXXXX </p>} />
            <Route path={`/main2`} component={ () => <p>ssss YYYYY </p>} />
            <Route path={`/signin`} component={ () => <p>ssss sign in </p>} />
        </Switch>
    )
}