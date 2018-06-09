import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';

import Loadable from 'react-loadable';
import PageLoader from '../components/utils/PageLoader';

const MainDashboard = Loadable({ loader: () => import('../pages/dashboards/MainDashboard'), loading: PageLoader });
const UsersPage = Loadable({ loader: () => import('../pages/users/UsersPage'), loading: PageLoader });
const UserProfilePage = Loadable({ loader: () => import('../pages/user-single/UserProfilePage'), loading: PageLoader });
const EventsTimeline = Loadable({ loader: () => import('../pages/events/EventsTimeline'), loading: PageLoader });
const Invoices = Loadable({ loader: () => import('../pages/invoices/all/Invoices'), loading: PageLoader });
const NewInvoice = Loadable({ loader: () => import('../pages/invoices/new/NewInvoice'), loading: PageLoader });
const EditInvoice = Loadable({ loader: () => import('../pages/invoices/edit/EditInvoice'), loading: PageLoader });
const ViewInvoice = Loadable({ loader: () => import('../pages/invoices/view/ViewInvoice'), loading: PageLoader });
const Messenger = Loadable({ loader: () => import('../pages/messenger/Messenger'), loading: PageLoader });
const MessengerSingle = Loadable({ loader: () => import('../pages/messenger-single/MessengerSingle'), loading: PageLoader });
const Inbox = Loadable({ loader: () => import('../pages/email/Inbox'), loading: PageLoader });
const Sent = Loadable({ loader: () => import('../pages/email/Sent'), loading: PageLoader });
const StarredMessages = Loadable({ loader: () => import('../pages/email/Starred'), loading: PageLoader });
const DraftMessages = Loadable({ loader: () => import('../pages/email/DraftMessages'), loading: PageLoader });
const TrashMessages = Loadable({ loader: () => import('../pages/email/Trash'), loading: PageLoader });
const SpamMessages = Loadable({ loader: () => import('../pages/email/Spam'), loading: PageLoader });
const Compose = Loadable({ loader: () => import('../pages/email/Compose'), loading: PageLoader });
const EmailSingle = Loadable({ loader: () => import('../pages/email/EmailSingle'), loading: PageLoader });
const Shop = Loadable({ loader: () => import('../pages/shop/Shop'), loading: PageLoader });
const SingleProduct = Loadable({ loader: () => import('../pages/shop/SingleProduct'), loading: PageLoader });
const Cart = Loadable({ loader: () => import('../pages/shop/Cart'), loading: PageLoader });
const Charts = Loadable({ loader: () => import('../pages/charts/Charts'), loading: PageLoader });
const StoreLocator = Loadable({ loader: () => import('../pages/map-locations/StoreLocator'), loading: PageLoader });
const PricingPage = Loadable({ loader: () => import('../pages/pricing/PricingPage'), loading: PageLoader });
const ToDoAppPage = Loadable({ loader: () => import('../pages/todo/ToDoAppPage'), loading: PageLoader });
const ButtonsDemos = Loadable({ loader: () => import('../pages/elements/ButtonsDemos'), loading: PageLoader });
const PageNotFound = Loadable({ loader: () => import('../pages/404/PageNotFound'), loading: PageLoader });


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

            <Route path={ ROUTES.messengerSingle.path } component={ MessengerSingle } />
            <Route path={ ROUTES.messenger.path } component={ Messenger } />

            <Route path={ ROUTES.inbox.path } component={ Inbox } />
            <Route path={ ROUTES.sent.path } component={ Sent } />
            <Route path={ ROUTES.starred.path } component={ StarredMessages } />
            <Route path={ ROUTES.draft.path } component={ DraftMessages } />
            <Route path={ ROUTES.trash.path } component={ TrashMessages } />
            <Route path={ ROUTES.spam.path } component={ SpamMessages } />
            <Route path={ ROUTES.newEmail.path } component={ Compose } />
            <Route path={ ROUTES.emailView.path } component={ EmailSingle } />

            <Route exact path={ ROUTES.shopCart.path } component={ Cart } />
            <Route path={ ROUTES.shopSingle.path } component={ SingleProduct } />
            <Route path={ ROUTES.shop.path } component={ Shop } />

            <Route path={ ROUTES.todo.path } component={ ToDoAppPage } />
            <Route path={ ROUTES.charts.path } component={ Charts } />
            <Route path={ ROUTES.pricing.path } component={ PricingPage } />
            <Route path={ ROUTES.map.path } component={ StoreLocator } />

            <Route path={ ROUTES.buttonsSample.path } component={ ButtonsDemos } />

            <Route exact path={ ROUTES.home.path } component={ MainDashboard } />

            <Route path={ ROUTES.notFound.path } component={ PageNotFound } />


        </Switch>
    )
}