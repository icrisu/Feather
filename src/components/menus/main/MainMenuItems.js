import React, { Component } from 'react';
import List from '@material-ui/core/List';
import MenuLink from './MenuLink';
import Submenu from './Submenu';
import { I18n } from 'react-redux-i18n';
import { ROUTES } from '../../../routes/Routes';

import InboxIcon from '@material-ui/icons/Inbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';
import ChatIcon from '@material-ui/icons/Chat';
import EmailIcon from '@material-ui/icons/Email';
import SendIcon from '@material-ui/icons/Send';
import MailOutline from '@material-ui/icons/MailOutline';
import Info from '@material-ui/icons/Info';
import Star from '@material-ui/icons/Star';
import Delete from '@material-ui/icons/Delete';

class MainMenuItems extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false };
    }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {    
        return(
            <nav className="main-navigation-ui">
                <List component="nav">
                    <MenuLink to={ ROUTES.home.path } label={I18n.t('mainMenu.dashboard')} Icon={ <DashboardIcon /> } />
                    <Submenu label={I18n.t('mainMenu.users')} Icon={ <span className="menu-icon"><i className="fas fa-user-friends"></i></span> }>
                        <MenuLink to={ROUTES.users.path} label={I18n.t('mainMenu.platformUsers')} />
                        <MenuLink to={`${ROUTES.users.path}/kara_trace`} label={I18n.t('mainMenu.singleUser')} />
                    </Submenu> 
                    <MenuLink Icon={ <EventIcon /> } to={ROUTES.eventsTimeline.path} label={I18n.t('mainMenu.eventsTimeline')} />
                    
                    <Submenu label={I18n.t('mainMenu.invoices')} Icon={ <span className="menu-icon"><i className="fas fa-file-alt"></i></span> }>
                        <MenuLink to={ROUTES.invoices.path} label={I18n.t('mainMenu.allInvoices')} />
                        <MenuLink to={`${ROUTES.invoices.path}/view/1`} label={I18n.t('mainMenu.singleInvoice')} />
                        <MenuLink to={`${ROUTES.invoices.path}/edit/1`} label={I18n.t('mainMenu.editSingleInvoice')} />
                    </Submenu>                     

                    <MenuLink Icon={ <ChatIcon /> } to={ ROUTES.messenger.path } label={I18n.t('mainMenu.chatApp')} />

                    <Submenu label={I18n.t('mainMenu.emailApp.main')} Icon={ <EmailIcon /> }>
                        <MenuLink to={ROUTES.inbox.path} label={I18n.t('mainMenu.emailApp.inbox')} Icon={ <InboxIcon /> } />
                        <MenuLink to={ROUTES.sent.path} label={I18n.t('mainMenu.emailApp.sent')} Icon={ <SendIcon /> } />
                        <MenuLink to={ROUTES.starred.path} label={I18n.t('mainMenu.emailApp.starred')} Icon={ <Star /> } />
                        <MenuLink to={ROUTES.draft.path} label={I18n.t('mainMenu.emailApp.draft')} Icon={ <MailOutline /> } />
                        <MenuLink to={ROUTES.trash.path} label={I18n.t('mainMenu.emailApp.trash')} Icon={ <Delete /> } />
                        <MenuLink to={ROUTES.spam.path} label={I18n.t('mainMenu.emailApp.spam')} Icon={ <Info /> } />
                    </Submenu>
                    
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="E-commerce" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Charts" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Todo app" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Google map" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Scrum app" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Contacts" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Pricing table" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Buttons" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Forms" />
                    

                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="My account" />
                                      
                    <MenuLink to="/main2" label="No icon" />
                    <MenuLink href="http://google.com" target="_self" label="External" />
                                        
                </List>
            </nav>
        )
    }
}


export default MainMenuItems;
