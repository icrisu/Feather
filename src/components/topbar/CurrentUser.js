import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import PopOverHelper from '../utils/PopOverHelper';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import List, { ListItem, ListItemText }  from 'material-ui/List';
import { Link } from 'react-router-dom';
import { MAIN_MENU_COLORS } from '../../config/colors'

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
        thumb: process.env.PUBLIC_URL + '/assets/dummy_imgs/user_1.jpg'
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
                            <img src={this.user.thumb} />
                        </div>
                        <Typography className="user-name" variant="title" gutterBottom>{`${this.user.firstName} ${this.user.lastName}`}</Typography>
                    </div>

                    <List component="nav" className={classes.list}>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`My profile`} />
                        </ListItem>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`My settings`} />
                        </ListItem>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`Notifications`} />
                        </ListItem>
                        <ListItem component={Link} to={`/users`} disableGutters button onClick={ this._popoverClose }>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`Logout`} />
                        </ListItem>                                                                          
                    </List>                     

                </div>
            </PopOverHelper>
        )        
    }
}

CurrentUser.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CurrentUser);

