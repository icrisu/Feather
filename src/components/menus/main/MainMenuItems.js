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
                    <MenuLink Icon={ InboxIcon } to={ ROUTES.dashboard.path } label={I18n.t('mainMenu.dashboards.dash1')} />
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
