import React, { PureComponent } from 'react';
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

class CurrentUser extends PureComponent {
    
    user = {
        firstName: 'Kara',
        lastName: 'Thrace',
        thumb: process.env.PUBLIC_URL + '/assets/dummy_imgs/user_1.jpg'
    }
    render() {
        const { classes } = this.props;
        return(
            <PopOverHelper position="top-right" Button={
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
                        <ListItem disableGutters button component={Link} to={`/users`}>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`My profile`} />
                        </ListItem>
                        <ListItem disableGutters button component={Link} to={`/users`}>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`My settings`} />
                        </ListItem>
                        <ListItem disableGutters button component={Link} to={`/users`}>
                            <ListItemText classes={{ primary: classes.listItem }} inset primary={`Notifications`} />
                        </ListItem>
                        <ListItem disableGutters button component={Link} to={`/users`}>
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

