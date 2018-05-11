import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { connect } from 'react-redux';
import { getUsers, searchUser, removeUser } from '../../../actions';
import { appNotify } from '../../../actions/ui-interact';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import { I18n } from 'react-redux-i18n';
import uniqid from 'uniqid';
import UserListItem from './UserListItem';
import Button from 'material-ui/Button';
import Pagination from '../../common/misc/Pagination';
import SearchWidget from '../../common/search/SearchWidget';
import GenericDialog from '../../common/dialogs/GenericDialog';
import NewUserModal from './NewUserModal';


class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [], currentPage: 1, total: 0, 
            removeUserAlert: false, userToRemove: null, openNewUserModal: false }
    }

    componentDidMount() {
        this.props.getUsers(this.state.currentPage);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { users: nextProps.users, totalPages: nextProps.totalPages, currentPage: nextProps.currentPage }
    }

    _onPageChange(page) {
        this.setState({ currentPage: page }, () => {
            this.props.getUsers(this.state.currentPage);
        })
    }

    _removeUser(user) { 
        this.setState({ userToRemove: user }, () => {
            this.setState({ removeUserAlert: true })
        })      
    }

    _createNewUser(event) {
        this.setState({ openNewUserModal: true })
    }

    _confirmRemoveUser(user) {
        this.props.appNotify({
            message: `User "${user.first_name} ${user.last_name}" has been removed`, 
            open: true
        });          
        this.setState({ removeUserAlert: false });
        this.props.removeUser(user._id);      
    }

    _renderUsersData() {
        return this.state.users.map(user => {
            return <UserListItem removeUser={ this._removeUser.bind(this) } user={ user } key={uniqid()} />;
        });
    }

    _renderUsers() {
        return(
            <Table className="table" style={{ minWidth: 300 }}>
                <TableHead>
                    <TableRow style={{ color: '#000' }}>
                        <TableCell>NAME</TableCell>
                        <TableCell className="company">COMPANY</TableCell>
                        <TableCell className="email">EMAIL</TableCell>
                        <TableCell className="phone">PHONE</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                { this._renderUsersData() }
                </TableBody>        
            </Table>             
        )        
    }

    render() {        
        return(
            <GenericPage title={I18n.t('pages.users.title')}>
                <Grid container spacing={24}>
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex' }}>
                            <Button onClick={ this._createNewUser.bind(this) } variant="raised" color="secondary" style={{ textTransform: 'initial', marginRight: 25 }}>Add new user</Button>
                            <SearchWidget className="search" searchAction={ this.props.searchUser } placeholder="Search user..." />
                        </div>
                        <Button style={{ textTransform: 'initial' }}>Export (xls)</Button>
                    </Grid>                    
                    <Grid item xs={12} sm={12} md={12}>
                        { this._renderUsers() }
                    </Grid>                      
                </Grid> 
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
                        <Pagination onPageChange={ this._onPageChange.bind(this) } currentPage={ this.state.currentPage } totalPages={ this.state.totalPages } />
                    </Grid>
                </Grid>                 
                <GenericDialog transportData={ this.state.userToRemove } 
                    open={ this.state.removeUserAlert } 
                    title="Remove user" 
                    textContent={ this.state.userToRemove ? `Are you sure you want to remove ${this.state.userToRemove.first_name} ${this.state.userToRemove.last_name} from the database?` : ''} 
                    onAccept={ this._confirmRemoveUser.bind(this) } 
                    onReject={ d => this.setState({ removeUserAlert: false }) } 
                    rejectText="Cancel"
                    acceptText="Agree"
                    />
                <NewUserModal open={ this.state.openNewUserModal } onReject={ e => this.setState({ openNewUserModal: false }) } />
            </GenericPage>
        )
    }
}

const mapStateToProps = ({ users }) => {
    return { 
        users: users.users || [],
        total: users.total || 0,
        currentPage: users.currentPage || 1,
        totalPages: users.totalPages || 1
    }
}

UsersPage.propTypes = {
    users: PropTypes.array,
    getUsers: PropTypes.func,
    removeUser: PropTypes.func
}

export default connect(mapStateToProps, { getUsers, searchUser, removeUser, appNotify })(UsersPage);
