import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';
import PopOverHelper from '../utils/PopOverHelper';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText }  from 'material-ui/List';
import { Link } from 'react-router-dom';
import { MAIN_MENU_COLORS } from '../../theme/Customize';
import { I18n } from 'react-redux-i18n';
import { logOut } from '../../actions';

const styles = theme => ({
    list: {
        marginTop: 0, paddingTop: 0
    },
    listItem: {
        color: MAIN_MENU_COLORS.itemColor
    }
});

class CurrentUser extends Component {
    
    user = {
        firstName: 'Kara',
        lastName: 'Thrace',
        thumb: process.env.PUBLIC_URL + '/assets/dummy_data/imgs/user_1.jpg'
    }

    static propTypes = {
        logOut: () => {}
    }

    constructor(props) {
        super(props);
        this.state = { open: false }
        this._popoverClose = this._popoverClose.bind(this);
    }

    _popoverClose() {
        this.setState({ open: false });
    }

    render() {
        const { classes } = this.props;
        return(
            <PopOverHelper position="top-right" open={ this.state.open } Button={
                    <IconButton>
                        <Avatar src={this.user.thumb} />
                    </IconButton>
                }>    
                <div className="app-bar-user-popover">
                    <div className="user">
                        <div className="large-avatar">
                            <img src={this.user.thumb} alt="" />
                        </div>
                        <Typography className="user-name" variant="title" gutterBottom>{`${this.user.firstName} ${this.user.lastName}`}</Typography>
                    </div>

                    <List component="nav" className={classes.list}>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={I18n.t('topbar.currentUser.profile')} />
                        </ListItem>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={I18n.t('topbar.currentUser.settings')} />
                        </ListItem>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={I18n.t('topbar.currentUser.notifications')} />
                        </ListItem>
                        <ListItem onClick={ e => this.props.logOut() } disableGutters button>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={I18n.t('topbar.currentUser.logout')} />
                        </ListItem>                                                                          
                    </List>                     

                </div>
            </PopOverHelper>
        )        
    }
}

CurrentUser.propTypes = {
    classes: PropTypes.object.isRequired,
    logOut: PropTypes.func
};

export default connect(null, { logOut })(withStyles(styles)(CurrentUser));

