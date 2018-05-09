import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getUsers } from '../../../actions';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Loader from '../../common/misc/Loader';
import { I18n } from 'react-redux-i18n';
import uniqid from 'uniqid';
import UserListItem from './UserListItem';


class UsersPage extends Component {

    constructor(props) {
        super(props);
        this.state = { users: [], currentPage: 1, total: 0 }
    }

    componentDidMount() {
        this.props.getUsers(1);
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { users: nextProps.users }
    }    

    _renderUsersData() {
        return this.state.users.map(user => {
            return (
                <UserListItem user={ user } key={uniqid()} />
            );
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
                        <Grid item xs={12} sm={12} md={12}>
                            { this._renderUsers() }
                        </Grid>                      
                    </Grid>                           
                </div>
            </Fragment>           
        )
    }
}

const mapStateToProps = ({ users }) => {
    console.log(users)
    return { 
        users: users.users || [],
        total: users.total || 0,
        currentPage: users.currentPage || 1,
    }
}

UsersPage.propTypes = {
    users: PropTypes.array,
    getUsers: PropTypes.func
}

export default connect(mapStateToProps, { getUsers })(UsersPage);
