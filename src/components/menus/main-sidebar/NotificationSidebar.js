import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n } from 'react-redux-i18n';
import Drawer from '@material-ui/core/Drawer';
import { toggleMainSidebar } from '../../../actions/ui-interact';
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import SidebarActivity from './SidebarActivity';
import SidebarSales from './SidebarSales';

class NotificationSidebar extends Component {

    state = {
        drawerType: 'temporary', open: false, tabValue: 0
    }

    _handleTabChange(event, tabValue) {
        this.setState({ tabValue });
    }

    _handleChangeIndex(index) {
        this.setState({ tabValue: index });
    }
    
    _onCloseRequest() {
        this.props.toggleMainSidebar(false);
    }    

    static getDerivedStateFromProps(nextProps, prevState) {
        return { open: nextProps.sidebarOpen };
    }   

    render() {
        return(
            <Drawer variant={ this.state.drawerType } anchor="right" onClose={ this._onCloseRequest.bind(this) }
                open={ this.state.open }
            >
                <div className="main-sidebar">
                    
                    <AppBar position="static" color="default">
                        <Tabs
                            value={this.state.tabValue}
                            onChange={this._handleTabChange.bind(this)}
                            indicatorColor="primary"
                            textColor="primary"
                            fullWidth
                            >
                            <Tab label={I18n.t('sidebar.tabs.sales')} />
                            <Tab label={I18n.t('sidebar.tabs.activity')} />
                        </Tabs>
                    </AppBar>                    
                    
                    <div className="sidebar-content pretty-scroll">
                        <SwipeableViews className="swipeable-views"
                            axis="x"
                            index={this.state.tabValue}
                            onChangeIndex={this._handleChangeIndex.bind(this)}
                            >
                            <SidebarSales />
                            <SidebarActivity />
                        </SwipeableViews>
                    </div>
                    
                </div>
            </Drawer>
        )
    }
}

const mapStateToProps = ({ sidebarOpen }) => {
    return {
        sidebarOpen: sidebarOpen
    }
}

export default connect(mapStateToProps, { toggleMainSidebar })(NotificationSidebar);
