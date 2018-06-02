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
import ShopIcon from '@material-ui/icons/Shop';
import ChartIcon from '@material-ui/icons/ShowChart';
import LocationOn from '@material-ui/icons/LocationOn';
import Assignment from '@material-ui/icons/Assignment';

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

                    <Submenu label={I18n.t('mainMenu.chatApp')} Icon={ <ChatIcon /> }>
                        <MenuLink to={ ROUTES.messenger.path } label={I18n.t('mainMenu.chatAllMessages')} />
                        <MenuLink to={ `${ROUTES.messenger.path}/1` } label={I18n.t('mainMenu.chatSingle')} />
                    </Submenu>                                          

                    <Submenu label={I18n.t('mainMenu.emailApp.main')} Icon={ <EmailIcon /> }>
                        <MenuLink to={ROUTES.inbox.path} label={I18n.t('mainMenu.emailApp.inbox')} Icon={ <InboxIcon /> } badge={4} />
                        <MenuLink to={ROUTES.sent.path} label={I18n.t('mainMenu.emailApp.sent')} Icon={ <SendIcon /> } />
                        <MenuLink to={ROUTES.starred.path} label={I18n.t('mainMenu.emailApp.starred')} Icon={ <Star /> } />
                        <MenuLink to={ROUTES.draft.path} label={I18n.t('mainMenu.emailApp.draft')} Icon={ <MailOutline /> } />
                        <MenuLink to={ROUTES.trash.path} label={I18n.t('mainMenu.emailApp.trash')} Icon={ <Delete /> } />
                        <MenuLink to={ROUTES.spam.path} label={I18n.t('mainMenu.emailApp.spam')} Icon={ <Info /> } />
                    </Submenu>

                    <Submenu label={I18n.t('mainMenu.eCommerce')} Icon={ <ShopIcon /> }>
                        <MenuLink to={ROUTES.shop.path} label={I18n.t('mainMenu.shop')} />
                        <MenuLink to={`${ROUTES.shop.path}/1`} label={I18n.t('mainMenu.shopSingle')} />
                        <MenuLink to={ROUTES.shopCart.path} label={I18n.t('mainMenu.shopCart')} />
                    </Submenu>      

                    <MenuLink Icon={ <ChartIcon /> } to={ ROUTES.charts.path } label="Charts" />
                    <MenuLink Icon={ <Assignment /> } to={ ROUTES.pricing.path } label="Pricing table" />
                    <MenuLink Icon={ <LocationOn /> } to={ ROUTES.map.path } label="Store locator" />
                    
                    <MenuLink Icon={ <InboxIcon /> } to="/activity" label="Todo app" />
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
