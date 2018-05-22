import React, { Component } from 'react';
import List from '@material-ui/core/List';
import MenuLink from './MenuLink';
import Submenu from './Submenu';
import { I18n } from 'react-redux-i18n';
import { ROUTES } from '../../../routes/Routes';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import DashboardIcon from '@material-ui/icons/Dashboard';
import EventIcon from '@material-ui/icons/Event';

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
                        <MenuLink to={`${ROUTES.invoices.path}/test_invoice`} label={I18n.t('mainMenu.singleInvoice')} />
                    </Submenu>                     

                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="My account" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Scrum app" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Users" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Invoices" />
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Chat app" />
                    <Submenu label="Email app" Icon={ <InboxIcon /> }>
                        <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Inbox" />
                        <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Sent" />
                        <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Draft" />
                    </Submenu>                    
                    <MenuLink to="/main2" label="No icon" />
                    <MenuLink href="http://google.com" target="_self" label="External" />
                    
                    <Submenu label="Expand" Icon={ <InboxIcon /> }>
                        <MenuLink Icon={ <InboxIcon /> } to="/main3" label="Submenu item" />
                        <MenuLink Icon={ <InboxIcon /> } to="/main4" label="Submenu item" />
                        <MenuLink to="/main10" label="No icon" />
                        <MenuLink href="http://google.com" target="_self" label="External" />                      
                    </Submenu>

                    <Submenu label="Expand2" Icon={ <InboxIcon /> }>
                        <MenuLink to="/main5" label="Submenu item" />
                        <MenuLink to="/main6" label="Submenu item second" />
                    </Submenu>                     
                </List>
            </nav>
        )
    }
}


export default MainMenuItems;
