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

    render() {
        return(
            <Drawer variant={ this.state.drawerType } anchor="right" onClose={ this._onCloseRequest.bind(this) }
                open={ this.state.open }
            >
                <p>content</p>
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
