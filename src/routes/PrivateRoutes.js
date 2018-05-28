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
const Messenger = AsyncLoader.load({ importPath: import('../components/pages/messenger/Messenger') });
const MessengerSingle = AsyncLoader.load({ importPath: import('../components/pages/messenger-single/MessengerSingle') });
const Inbox = AsyncLoader.load({ importPath: import('../components/pages/email/Inbox') });
const Sent = AsyncLoader.load({ importPath: import('../components/pages/email/Sent') });
const StarredMessages = AsyncLoader.load({ importPath: import('../components/pages/email/Starred') });
const DraftMessages = AsyncLoader.load({ importPath: import('../components/pages/email/DraftMessages') });
const TrashMessages = AsyncLoader.load({ importPath: import('../components/pages/email/Trash') });
const SpamMessages = AsyncLoader.load({ importPath: import('../components/pages/email/Spam') });
const Compose = AsyncLoader.load({ importPath: import('../components/pages/email/Compose') });
const EmailSingle = AsyncLoader.load({ importPath: import('../components/pages/email/EmailSingle') });
const Shop = AsyncLoader.load({ importPath: import('../components/pages/shop/Shop') });
const SingleProduct = AsyncLoader.load({ importPath: import('../components/pages/shop/SingleProduct') });


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

            <Route path={ ROUTES.shopSingle.path } component={ SingleProduct } />
            <Route path={ ROUTES.shop.path } component={ Shop } />
            

            <Route path={`/main1`} component={ () => <p>ssss XXXXX </p>} />
            <Route path={`/main2`} component={ () => <p>ssss YYYYY </p>} />
            <Route path={`/signin`} component={ () => <p>ssss sign in </p>} />
            <Route path={ ROUTES.home.path } component={ MainDashboard } />
        </Switch>
    )
}