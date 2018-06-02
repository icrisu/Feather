import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { ROUTES } from './Routes';
import AsyncLoader from '../components/utils/AsyncLoader';

const MainDashboard = AsyncLoader.load({ importPath: import('../pages/dashboards/MainDashboard') });
const UsersPage = AsyncLoader.load({ importPath: import('../pages/users/UsersPage') });
const UserProfilePage = AsyncLoader.load({ importPath: import('../pages/user-single/UserProfilePage') });
const EventsTimeline = AsyncLoader.load({ importPath: import('../pages/events/EventsTimeline') });
const Invoices = AsyncLoader.load({ importPath: import('../pages/invoices/all/Invoices') });
const NewInvoice = AsyncLoader.load({ importPath: import('../pages/invoices/new/NewInvoice') });
const EditInvoice = AsyncLoader.load({ importPath: import('../pages/invoices/edit/EditInvoice') });
const ViewInvoice = AsyncLoader.load({ importPath: import('../pages/invoices/view/ViewInvoice') });
const Messenger = AsyncLoader.load({ importPath: import('../pages/messenger/Messenger') });
const MessengerSingle = AsyncLoader.load({ importPath: import('../pages/messenger-single/MessengerSingle') });
const Inbox = AsyncLoader.load({ importPath: import('../pages/email/Inbox') });
const Sent = AsyncLoader.load({ importPath: import('../pages/email/Sent') });
const StarredMessages = AsyncLoader.load({ importPath: import('../pages/email/Starred') });
const DraftMessages = AsyncLoader.load({ importPath: import('../pages/email/DraftMessages') });
const TrashMessages = AsyncLoader.load({ importPath: import('../pages/email/Trash') });
const SpamMessages = AsyncLoader.load({ importPath: import('../pages/email/Spam') });
const Compose = AsyncLoader.load({ importPath: import('../pages/email/Compose') });
const EmailSingle = AsyncLoader.load({ importPath: import('../pages/email/EmailSingle') });
const Shop = AsyncLoader.load({ importPath: import('../pages/shop/Shop') });
const SingleProduct = AsyncLoader.load({ importPath: import('../pages/shop/SingleProduct') });
const Cart = AsyncLoader.load({ importPath: import('../pages/shop/Cart') });
const Charts = AsyncLoader.load({ importPath: import('../pages/charts/Charts') });
const StoreLocator = AsyncLoader.load({ importPath: import('../pages/map-locations/StoreLocator') });


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

            <Route path={ ROUTES.charts.path } component={ Charts } />

            <Route path={ ROUTES.map.path } component={ StoreLocator } />
            

            <Route path={`/main1`} component={ () => <p>ssss XXXXX </p>} />
            <Route path={`/main2`} component={ () => <p>ssss YYYYY </p>} />
            <Route path={`/signin`} component={ () => <p>ssss sign in </p>} />
            <Route path={ ROUTES.home.path } component={ MainDashboard } />
        </Switch>
    )
}