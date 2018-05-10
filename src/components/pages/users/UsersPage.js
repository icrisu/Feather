import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUsers, searchUser } from '../../../actions';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Loader from '../../common/misc/Loader';
import { I18n } from 'react-redux-i18n';
import uniqid from 'uniqid';
import UserListItem from './UserListItem';
import Button from 'material-ui/Button';
import Pagination from '../../common/misc/Pagination';
import SearchWidget from '../../common/search/SearchWidget';


class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [], currentPage: 1, total: 0 }
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

    _renderUsersData() {
        return this.state.users.map(user => {
            return <UserListItem user={ user } key={uniqid()} />;
        });
    }

    _renderUsers() {
        return(
            <Table className="table" style={{ minWidth: 300 }}>
                <TableHead>
                    <TableRow style={{ color: '#000' }}>
                        <TableCell>NAME</TableCell>
                        <TableCell>COMPANY</TableCell>
                        <TableCell>EMAIL</TableCell>
                        <TableCell>PHONE</TableCell>
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
            <Fragment>
                <div className="page-header">
                    <div className="left">
                        <h1 className="page-title">{I18n.t('pages.users.title')}</h1>
                    </div>
                    <div className="right">
                        right
                    </div>
                </div> 
                <div className="content">
                    <Loader showloader={false} pageloader />
                    <Grid container spacing={24}>
                        <Grid className="page-actions" item xs={12} sm={12} md={12}>
                            <div style={{ display: 'flex' }}>
                                <Button variant="raised" color="secondary" style={{ textTransform: 'initial', marginRight: 25 }}>Add new user</Button>
                                <SearchWidget searchAction={ this.props.searchUser } placeholder="Search user..." />
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
                </div>
            </Fragment>           
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
    getUsers: PropTypes.func
}

export default connect(mapStateToProps, { getUsers, searchUser })(UsersPage);
