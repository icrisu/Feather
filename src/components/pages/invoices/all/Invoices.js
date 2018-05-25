import React, { Component } from 'react';
import GenericPage from '../../base/GenericPage';
import { connect } from 'react-redux';
import { searchInvoice, getInvoices } from '../../../../actions';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import Pagination from '../../../common/misc/Pagination';
import SearchWidget from '../../../common/search/SearchWidget';
import InvoiceListItem from './InvoiceListItem';
import uniqid from 'uniqid';

class Invoices extends Component {

    constructor(props) {
        super(props);
        this.state = { invoices: [], currentPage: 1, total: 0, invoiceToEdit: null,
            _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Invoices'  } ]
        }
    }    

    componentDidMount() {
        this.setState({ currentPage: 1 }, () => {
            this.props.getInvoices(this.state.currentPage);
        })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { invoices: nextProps.invoices, totalPages: nextProps.totalPages, currentPage: nextProps.currentPage }
    }    

    _onPageChange(page) {
        this.setState({ currentPage: page }, () => {
            this.props.getInvoices(this.state.currentPage);
        })
    }

    _renderInvoicesData() {
        return this.state.invoices.map(invoice => {
            return <InvoiceListItem invoice={ invoice } key={uniqid()} />;
        });
    }

    _renderInvoices() {
        return(
            <Table className="table" style={{ minWidth: 300 }}>
                <TableHead>
                    <TableRow style={{ color: '#000' }}>
                        <TableCell>NUMBER</TableCell>
                        <TableCell className="company">CLIENT</TableCell>
                        <TableCell className="amount">AMOUNT</TableCell>
                        <TableCell className="date">DATE</TableCell>
                        <TableCell className="status">STATUS</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                { this._renderInvoicesData() }
                </TableBody>        
            </Table>             
        )  
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.invoices.title')} pageContentClasses="invoices-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex' }}>
                            <Button component={ Link } to="/invoices/new" variant="raised" color="secondary" style={{ textTransform: 'initial', marginRight: 25 }}>Create invoice</Button>
                            <SearchWidget className="search" searchAction={ this.props.searchInvoice } placeholder="Search invoice..." />
                        </div>
                        <Button style={{ textTransform: 'initial' }}>Export all (xls)</Button>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={12}>
                        { this._renderInvoices() }
                    </Grid>                                        
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
                        <Pagination onPageChange={ this._onPageChange.bind(this) } currentPage={ this.state.currentPage } totalPages={ this.state.totalPages } />
                    </Grid>
                </Grid>                 
            </GenericPage>
        )
    }    
}

const mapStateToProps = ({ invoices }) => {
    return { 
        invoices: invoices.invoices || [],
        total: invoices.total || 0,
        currentPage: invoices.currentPage || 1,
        totalPages: invoices.totalPages || 1
    }
}

export default connect(mapStateToProps, { searchInvoice, getInvoices })(Invoices);
