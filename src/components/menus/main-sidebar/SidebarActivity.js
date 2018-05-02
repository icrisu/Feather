import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { getSidebarActivity } from '../../../actions';
import { toggleMainSidebar } from '../../../actions/ui-interact';
import _ from 'lodash';

class SidebarActivity extends Component {

    // you can also trigger get notifications like so
    // it's also being triggerd from @InitService
    // componentDidMount() {
    //     this.props.getSidebarActivity();
    // }

    // route internal clicks from HTML
    _captureClicks(e) {
        const href = e.target.getAttribute('href');
        const target = e.target.getAttribute('target');
        e.preventDefault();
        if (_.isNil(target) && !_.isNil(href)) {
            e.preventDefault();
            this.props.history.push(href);
            this.props.toggleMainSidebar(false);
        }
    }    

    render() {
        return(
            <div className="sidebar-activity pretty-scroll" dangerouslySetInnerHTML={{ __html: this.props.sidebarActivity }} onClick={ this._captureClicks.bind(this) }></div>
        )
    }
}

const mapStateToProps = ({ sidebarActivity }) => {
    return { sidebarActivity };
}

export default withRouter(connect(mapStateToProps, { getSidebarActivity, toggleMainSidebar })(SidebarActivity));
