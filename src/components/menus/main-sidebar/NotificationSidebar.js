import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Drawer from 'material-ui/Drawer';
import { toggleMainSidebar } from '../../../actions/ui-interact';

class NotificationSidebar extends Component {

    state = {
        drawerType: 'temporary', open: false
    }
    
    _onCloseRequest() {
        this.props.toggleMainSidebar(false);
    }    

    static getDerivedStateFromProps(nextProps, prevState) {
        return { open: nextProps.sidebarOpen };
    }   

    _renderDummy() {
        let m = [];
        for (let i = 0; i < 200; i++) {
            m.push(<p key={i}>ssss {i}</p>)  
        }
        return m;
    }

    render() {
        return(
            <Drawer variant={ this.state.drawerType } anchor="right" onClose={ this._onCloseRequest.bind(this) }
                open={ this.state.open }
            >
                <div className="main-sidebar">
                    <div className="sidebar-nav">
                    </div>
                    <div className="sidebar-content pretty-scroll">
                        { this._renderDummy() }
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
