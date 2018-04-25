import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Typography from 'material-ui/Typography';
import { getSidebarActivity } from '../../../actions';
import { toggleMainSidebar } from '../../../actions/ui-interact';
import _ from 'lodash';

class SidebarActivity extends Component {

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
        // default click behavior
    }    

    // you can call getSidebarActivity from here also
    // componentDidMount() {
    //     this.props.getSidebarActivity();
    // }

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
