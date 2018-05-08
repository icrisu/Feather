import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { getNotifications } from '../../actions';
import _ from 'lodash';

class NotificationWidget extends Component {

    static defaultProps = { notifications: '' }

    // also can retrive notifications like this
    // it's also being triggerd from @InitService
    // componentDidMount() {
    //     // this.props.getNotifications();
    // }    

    // route internal clicks from HTML
    _captureClicks(e) {        
        const href = e.target.getAttribute('href');
        const target = e.target.getAttribute('target');
        if (_.isNil(target) && !_.isNil(href)) {
            e.preventDefault();
            this.props.history.push(href);
            this.setState({ open: false })
        }
        // default click behavior
    }    

    render() {
        return(
            <div className="notifications-widget" dangerouslySetInnerHTML={{ __html: this.props.notifications }} onClick={ this._captureClicks.bind(this) }></div>
        )
    }
}

NotificationWidget.propTypes = {
    notifications: PropTypes.string
}

const mapStateToProps = ({ notifications }) => {
    return { notifications };
}

export default withRouter(connect(mapStateToProps, { getNotifications })(NotificationWidget));
