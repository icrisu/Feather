import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import PopOverHelper from '../utils/PopOverHelper';
import { Link } from 'react-router-dom';
import { APP_BAR_COLORS } from '../../theme/Customize';
import { I18n } from 'react-redux-i18n';
import IconButton from '@material-ui/core/IconButton';
import CustomBadge from '../widgets/CustomBadge';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import _ from 'lodash';
import { getNotifications } from '../../actions';


const navItemsStyle = {
    fontSize: 16, color: APP_BAR_COLORS.navigationItems
}

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, redirect: null }
    }

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

    // load content dynamically as HTML
    render() {
        return(
            <PopOverHelper position="top-right" open={ this.state.open } Button={
                <IconButton style={navItemsStyle}>
                    <CustomBadge content="5" />
                    <i className="far fa-bell"></i>
                </IconButton>
            }>    
                <div className="app-bar-notifications">
                    <div className="controls">
                        <Typography className="user-name" variant="body2" gutterBottom>{I18n.t('topbar.notifications.title')}</Typography>
                    </div>
                    <div className="content pretty-scroll" dangerouslySetInnerHTML={{ __html: this.props.notifications }} onClick={ this._captureClicks.bind(this) }></div>
                    <div className="bottom-controls">                        
                        <Button component={Link} to="/" style={{ textTransform: 'initial' }} variant="raised" size="small" color="primary">
                            {I18n.t('topbar.notifications.activity')}
                        </Button>     
                    </div>
                </div>
            </PopOverHelper>
        )
    }
}

Notifications.propTypes = {
    notifications: PropTypes.string
}

const mapStateToProps = ({ notifications }) => {
    return { notifications };
}

export default withRouter(connect(mapStateToProps, { getNotifications })(Notifications));
