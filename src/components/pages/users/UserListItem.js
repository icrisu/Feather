import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import PopOverHelper from '../../utils/PopOverHelper';
import List, { ListItem, ListItemText, ListItemIcon }  from 'material-ui/List';
import { withStyles } from 'material-ui/styles';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';

const styles = theme => ({
    list: {
        marginTop: 0, paddingTop: 0
    },
    listItem: {
        padding: 0,
        fontSize: 14
    }
});

class UserListItem extends PureComponent {

    static defaultProps = {
        user: {}
    }

    constructor(props) {
        super(props);
        this.state = { anchorEl: null, open: false }        
        this._popoverClose = this._popoverClose.bind(this);
    }    

    _actionClick(action) {

    }

    _popoverClose() {
        this.setState({ open: false });
    }

    _renderActions() {
        const { classes } = this.props;
        return(
            <PopOverHelper position="top-right" open={ this.state.open } Button={
                <IconButton>
                    <MoreVertIcon />
                </IconButton>
            }>    
            <List component="nav" className={classes.list}>
                <ListItem component={Link} to={ this.props.user.link } disableGutters button onClick={ this._popoverClose }>
                    <ListItemIcon style={{ margin: 0, marginLeft: 15 }}><EditIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItem }} primary='Edit user' />
                </ListItem>            
                <ListItem component={Link} to={`#`} disableGutters button onClick={ this._popoverClose }>
                    <ListItemIcon style={{ margin: 0, marginLeft: 15 }}><PhoneIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItem }} primary='Call user' />
                </ListItem>            
                <ListItem component={Link} to={`#`} disableGutters button onClick={ this._popoverClose }>
                    <ListItemIcon style={{ margin: 0, marginLeft: 15 }}><DeleteIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItem }} primary='Delete user' />
                </ListItem>
            </List>
            </PopOverHelper>            
        )
    }

    _renderImageAvatar() {
        return <div className="avatar-small"><img src={ this.props.user.thumb } alt="" /></div>;
    }

    _renderTextAvatar() {
        const f = String(this.props.user.first_name).substr(0, 1);
        const l = String(this.props.user.last_name).substr(0, 1);
        return <div className="avatar-small avatar-small-text">{ f }{ l }</div>;
    }    

    render() {
        return(
            <TableRow>
                <TableCell style={{  padding: '17px 15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        { this.props.user.thumb ? this._renderImageAvatar() : this._renderTextAvatar() }
                        <Link className="table-link-bold" style={{ fontWeight: 500, textDecoration: 'none' }} to={ this.props.user.link }>{ this.props.user.first_name } { this.props.user.last_name }</Link>                           
                    </div>
                </TableCell>
                <TableCell>{this.props.user.company}</TableCell>
                <TableCell>{this.props.user.email}</TableCell>
                <TableCell>{this.props.user.phone}</TableCell>
                <TableCell style={{ textAlign: 'right' }}>{ this._renderActions() }</TableCell>
            </TableRow>            
        )
    }
}

UserListItem.porpTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object
}

export default withStyles(styles)(UserListItem);
