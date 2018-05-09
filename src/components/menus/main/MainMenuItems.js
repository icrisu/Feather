import React, { Component } from 'react';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from 'material-ui/List';
import MenuLink from './MenuLink';
import Submenu from './Submenu';
import { I18n } from 'react-redux-i18n';
import { ROUTES } from '../../../routes/Routes';

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
                    <MenuLink Icon={ InboxIcon } to={ ROUTES.home.path } label={I18n.t('mainMenu.dashboards.dash1')} />
                    <Submenu label="Dashboard" Icon={ InboxIcon }>
                        <MenuLink Icon={ InboxIcon } to="/dashboard" label="Dashboard 1" />
                        <MenuLink Icon={ InboxIcon } to="/dashboard2" label="Dashboard 2" />
                    </Submenu>
                    <MenuLink Icon={ InboxIcon } to="/activity" label="Activity timeline" />
                    <MenuLink Icon={ InboxIcon } to="/activity" label="My account" />
                    <MenuLink Icon={ InboxIcon } to="/activity" label="Scrum app" />
                    <MenuLink Icon={ InboxIcon } to="/activity" label="Users" />
                    <MenuLink Icon={ InboxIcon } to="/activity" label="Invoices" />
                    <MenuLink Icon={ InboxIcon } to="/activity" label="Chat app" />
                    <Submenu label="Email app" Icon={ InboxIcon }>
                        <MenuLink Icon={ InboxIcon } to="/activity" label="Inbox" />
                        <MenuLink Icon={ InboxIcon } to="/activity" label="Sent" />
                        <MenuLink Icon={ InboxIcon } to="/activity" label="Draft" />
                    </Submenu>                    
                    <MenuLink to="/main2" label="No icon" />
                    <MenuLink href="http://google.com" target="_self" label="External" />
                    
                    <Submenu label="Expand" Icon={ InboxIcon }>
                        <MenuLink Icon={ InboxIcon } to="/main3" label="Submenu item" />
                        <MenuLink Icon={ InboxIcon } to="/main4" label="Submenu item" />
                        <MenuLink to="/main10" label="No icon" />
                        <MenuLink href="http://google.com" target="_self" label="External" />                      
                    </Submenu>

                    <Submenu label="Expand2" Icon={ InboxIcon }>
                        <MenuLink to="/main5" label="Submenu item" />
                        <MenuLink to="/main6" label="Submenu item second" />
                    </Submenu>                  
                </List>
            </nav>
        )
    }
}


export default MainMenuItems;
