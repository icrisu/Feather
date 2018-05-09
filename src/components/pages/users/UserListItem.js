import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

class UserListItem extends PureComponent {

    static defaultProps = {
        user: {}
    }

    state = { anchorEl: null }

    _handleClick(event) {
        this.setState({ anchorEl: event.currentTarget });
    }

    _handleClose() {
        this.setState({ anchorEl: null });
    }

    _actionClick() {

    }

    _renderActions() {
        const { anchorEl } = this.state;
        return(
            <div style={{ textAlign: 'right' }}>
                <IconButton
                aria-owns={anchorEl ? 'long-menu' : null}
                aria-haspopup="true"
                onClick={this._handleClick.bind(this)}
                >
                    <MoreVertIcon />
                </IconButton>
                <Menu
                    id="long-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={this._handleClose.bind(this)}
                >
                    <MenuItem onClick={ e => this._actionClick('edit') }>Edit profile</MenuItem>
                    <MenuItem onClick={ e => this._actionClick('delete') }>Block user</MenuItem>
                    <MenuItem onClick={ e => this._actionClick('delete') }>Delete user</MenuItem>
                </Menu>                                
            </div>
        )
    }

    render() {
        return(
            <TableRow>
                <TableCell style={{  padding: '17px 15px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div className="avatar-small"><img src={ this.props.user.thumb } alt="" /></div>
                        <span style={{ fontWeight: 500 }}>{this.props.user.name}</span>                            
                    </div>
                </TableCell>
                <TableCell>{this.props.user.company}</TableCell>
                <TableCell>{this.props.user.email}</TableCell>
                <TableCell>{this.props.user.phone}</TableCell>
                <TableCell>{ this._renderActions() }</TableCell>
            </TableRow>            
        )
    }
}

UserListItem.porpTypes = {
    user: PropTypes.object
}

export default UserListItem;
