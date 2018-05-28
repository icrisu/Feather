import React, { Component } from 'react';
import PropTypes from 'prop-types';
import GenericPage from '../../base/GenericPage';
import { connect } from 'react-redux';
import { getEmailMessages } from '../../../../actions';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import EmailListItem from '../helpers/EmailListItem';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Pagination from '../../../common/misc/Pagination';
import Delete from '@material-ui/icons/Delete';
import Block from '@material-ui/icons/Block';

class Inbox extends Component {

    state = {
        selectAll: false, currentPage: 1, total: 0, messages: [], atLeastOneIsSelected: false,
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Inbox' }]
    }

    componentDidMount() {
        this.setState({ currentPage: 1 }, () => {
            this.props.getEmailMessages(this.state.currentPage);
        })
    } 

    static getDerivedStateFromProps(nextProps, prevState) {
        return { messages: nextProps.messages, totalPages: nextProps.totalPages, currentPage: nextProps.currentPage }
    } 

    _onPageChange(page) {
        this.setState({ currentPage: page }, () => {
            this.props.getEmailMessages(this.state.currentPage);
        })
    }    

    _onItemSelectSingleChange(selected, messageId) {
        let messages = [...this.state.messages];
        for (let i = 0; i < messages.length; i++) {
            if (messages[i]._id === messageId) {
                messages[i].selected = selected;
                break;
            }
        }
        this.setState({ messages });   
        this._checkIfAtLeastOneIsSelected();     
    }

    _onStarredChanged(rating, messageId) {
        console.log(rating);
        let messages = [...this.state.messages];
        for (let i = 0; i < messages.length; i++) {
            if (messages[i]._id === messageId) {
                messages[i].isStarred = rating;
                break;
            }
        }
        this.setState({ messages }); 
    }

    _handleSelectAllChange(event) {
        this.setState({ selectAll: event.target.checked }, () => {
            let messages = [...this.state.messages];
            for (let i = 0; i < messages.length; i++) {
                messages[i].selected = this.state.selectAll;
            }
            this.setState({ messages });
            this._checkIfAtLeastOneIsSelected();
        });
    }    

    _checkIfAtLeastOneIsSelected() {
        let atLeastOneIsSelected = false;
        for (let i = 0; i < this.state.messages.length; i++) {
            if (this.state.messages[i].selected === true) {
                atLeastOneIsSelected = true;
                break;
            }
        }
        this.setState({ atLeastOneIsSelected  })
    }

    _renderEmails() {
        const { messages } = this.state;
        return messages.map(message => {
            return <EmailListItem message={ message } key={ message._id } onStarredChanged={ this._onStarredChanged.bind(this) } onSelectChange={ this._onItemSelectSingleChange.bind(this) } />
        })
    }    

    render() {
        return(
            <GenericPage title={I18n.t('pages.inbox.title')} pageContentClasses="emails-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <FormControlLabel label="Select all" style={{ marginRight: 25 }}
                                control={
                                    <Checkbox color="primary" checked={ this.state.selectAll } onChange={ this._handleSelectAllChange.bind(this) } />
                                }
                            />
                            <div>
                                <Button className="email-control" disabled={ !this.state.atLeastOneIsSelected } variant="raised" size="small" style={{ textTransform: 'initial', marginRight: 15 }}>
                                    <Delete style={{ fontSize: 14, marginRight: 8 }} />
                                    Delete
                                </Button> 
                                <Button className="email-control" disabled={ !this.state.atLeastOneIsSelected } variant="raised" size="small" style={{ textTransform: 'initial' }}>
                                    <Block style={{ fontSize: 14, marginRight: 8 }} />
                                    Block
                                </Button>                                                                  
                            </div>
                        </div>
                        <Button component={ Link } to="/email/new" variant="raised" color="secondary" style={{ textTransform: 'initial' }}>COMPOSE</Button>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={12}>
                        <Table className="table" style={{ minWidth: 300 }}>
                            <TableBody>
                                { this._renderEmails() }
                            </TableBody>        
                        </Table>
                    </Grid> 

                    <Grid container spacing={24}>
                        <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
                            <Pagination onPageChange={ this._onPageChange.bind(this) } currentPage={ this.state.currentPage } totalPages={ this.state.totalPages } />
                        </Grid>
                    </Grid> 

                </Grid>
            </GenericPage> 
        )
    }
}

const mapStateToProps = ({ emailMessages }) => {
    return { 
        messages: emailMessages.messages || [],
        total: emailMessages.total || 0,
        currentPage: emailMessages.currentPage || 1,
        totalPages: emailMessages.totalPages || 1
    }
}

Inbox.propTypes = {
    messages: PropTypes.array,
    getEmailMessages: PropTypes.func
}

export default connect(mapStateToProps, { getEmailMessages })(Inbox);
