import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import AsyncLoader from '../components/utils/AsyncLoader';

const MainDashboard = AsyncLoader.load({ importPath: import('../components/pages/dashboards/MainDashboard') });
const UsersPage = AsyncLoader.load({ importPath: import('../components/pages/users/UsersPage') });
const UserProfilePage = AsyncLoader.load({ importPath: import('../components/pages/user-single/UserProfilePage') });
const EventsTimeline = AsyncLoader.load({ importPath: import('../components/pages/events/EventsTimeline') });
const Invoices = AsyncLoader.load({ importPath: import('../components/pages/invoices/all/Invoices') });
const NewInvoice = AsyncLoader.load({ importPath: import('../components/pages/invoices/new/NewInvoice') });
const EditInvoice = AsyncLoader.load({ importPath: import('../components/pages/invoices/edit/EditInvoice') });
const ViewInvoice = AsyncLoader.load({ importPath: import('../components/pages/invoices/view/ViewInvoice') });


export default props => {
    return(
        <Switch>
            <Route path={ ROUTES.singleUser.path } component={ UserProfilePage } />
            <Route path={ ROUTES.users.path } component={ UsersPage } />
            <Route path={ ROUTES.eventsTimeline.path } component={ EventsTimeline } />
            <Route path={ ROUTES.newInvoice.path } component={ NewInvoice } />
            <Route path={ ROUTES.editInvoice.path } component={ EditInvoice } />
            <Route path={ ROUTES.viewInvoice.path } component={ ViewInvoice } />
            <Route path={ ROUTES.invoices.path } component={ Invoices } />

            <Route path={`/main1`} component={ () => <p>ssss XXXXX </p>} />
            <Route path={`/main2`} component={ () => <p>ssss YYYYY </p>} />
            <Route path={`/signin`} component={ () => <p>ssss sign in </p>} />
            <Route path={ ROUTES.home.path } component={ MainDashboard } />
        </Switch>
    )
}