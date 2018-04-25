import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import PopOverHelper from '../utils/PopOverHelper';
import { Link } from 'react-router-dom';
import { APP_BAR_COLORS } from '../../theme/Customize';
import { I18n } from 'react-redux-i18n';
import IconButton from 'material-ui/IconButton';
import CustomBadge from '../widgets/CustomBadge';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';


const navItemsStyle = {
    fontSize: 16, color: APP_BAR_COLORS.navigationItems
}

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false }
        // this._popoverClose = this._popoverClose.bind(this);
    }
    
    
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
                        <Typography className="user-name" variant="body2" gutterBottom>Notifications</Typography>
                    </div>
                    <div className="content pretty-scroll">
                        <div className="notification">notification</div>
                        <div className="notification">
                            <Link to="/mememe" >aaa</Link>
                        </div>
                        <div className="notification">notification <br /> test me</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>
                        <div className="notification">notification</div>                                                                        
                    </div>
                    <div className="bottom-controls">                        
                        <Button style={{ textTransform: 'initial' }} variant="raised" size="small" color="primary">
                            See all activity
                        </Button>                        
                    </div>
                </div>
            </PopOverHelper>
        )
    }
}

// Notifications.propTypes = {
//     classes: PropTypes.object.isRequired
// };

// export default withStyles(styles)(Notifications);

export default Notifications;
