import React, { Component } from 'react';
import GenericPage from '../../base/GenericPage';
import { connect } from 'react-redux';
import { ROUTES } from '../../../../routes/Routes';
import { appNotify } from '../../../../actions/ui-interact';
import { Link } from 'react-router-dom';
import { I18n } from 'react-redux-i18n';
import CustomPaper from '../../../common/paper/CustomPaper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import uniqid from 'uniqid';
import EditIcon from '@material-ui/icons/Edit';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';


class ViewInvoice extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            invoice: {
                billFrom: '',
                billTo: '',
                billFromAddress: '',
                billToAddress: '',
                invoiceItems: [],
                vatPercent: 10
            },
            redirectToInvoices: false
        };
    }    

    componentDidMount() {
        // create logic for retriving the invoice from
        // the server using the invoice ID
        // this.props.match.params._id
        // than set the loca state

        // fake implementation bellow
        this.setState({
            invoice: {
                invoiceNo: 'FD6328',
                billFrom: 'Robertson Inc 25 Street',
                billTo: 'Quantum Inc',
                billFromAddress: 'Keas 69 Str.15234, Chalandri Athens Greece',
                billToAddress: 'Mariah Santiago 495 Hoover Boulevard Brownsville',
                invoiceItems: [
                    {
                        _id: uniqid(),
                        no: 1,
                        name: 'Programming',
                        unitCost: 50,
                        units: 80                         
                    },
                    {
                        _id: uniqid(),
                        no: 2,
                        name: 'Database optimization',
                        unitCost: 2,
                        units: 120                         
                    }                    
                ],
                vatPercent: 20               
            }
        });
    }

    _calculateItemPrice(_id) {
        let items = this.state.invoice.invoiceItems;
        let out = 0;
        for (let i = 0; i < items.length; i++) {
            if(items[i]._id === _id) {
                out = items[i].unitCost * items[i].units;
                break;
            }
        }
        return out;
    }

    _calculateTotal() {
        let items = this.state.invoice.invoiceItems;
        let out = 0;
        for (let i = 0; i < items.length; i++) {
            out += items[i].unitCost * items[i].units;
        }
        return out;        
    }

    _calculateWithVat() {
        const cost = this._calculateTotal();
        const vat = ( this.state.invoice.vatPercent * cost ) / 100;
        return cost + vat;
    }

    _renderEdit() {
        return(
            <Button component={ Link } to={ `${ROUTES.invoices.path}/edit/${this.props.match.params._id}` } color="primary" variant="raised" style={{ textTransform: 'initial' }}>
                <EditIcon style={{ marginRight: 8, fontSize: 20 }} />
                Edit invoice
            </Button>            
        )
    }

    _renderItemsData() {
        return this.state.invoice.invoiceItems.map(item => {
            return(
                <TableRow key={ item._id }>
                    <TableCell>
                        { item.no }
                    </TableCell>
                    <TableCell>
                        { item.name}
                    </TableCell>
                    <TableCell>
                        { item.unitCost }
                    </TableCell>
                    <TableCell>
                        { item.units }
                    </TableCell>
                    <TableCell>
                        { this._calculateItemPrice(item._id) }
                    </TableCell>                                                                                                    
                </TableRow>                 
            )
        })
    }

    _renderItems() {
        return(
            <div>
                <Table className="table">
                    <TableHead>
                        <TableRow style={{ color: '#000', background: '#f8f9fd' }}>
                            <TableCell className="no">#</TableCell>
                            <TableCell className="name">Name</TableCell>
                            <TableCell className="unit-cost">Unit cost</TableCell>
                            <TableCell className="units">Units</TableCell>
                            <TableCell className="price">Price</TableCell>                         
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { this._renderItemsData() }
                    </TableBody>        
                </Table>                   
            </div>
        )
    }    

    render() {
        return(
            <GenericPage title={`${I18n.t('pages.viewInvoice.title')} #${this.state.invoice.invoiceNo}`} pageContentClasses="view-invoice-page-content">
                <Grid container spacing={24}>
                
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div className="invoice-status paid">PAID</div>
                        <div>
                            <Button style={{ textTransform: 'initial', marginRight: 20 }}>Export invoice (pdf)</Button>
                            { this._renderEdit() }
                        </div>
                    </Grid>      

                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Bill from">
                            <div className="invoice-info-block">
                                <div className="label">From company</div>
                                <div className="info">{this.state.invoice.billFrom}</div>
                            </div>
                            <div className="invoice-info-block">
                                <div className="label">Address</div>
                                <div className="info">{this.state.invoice.billFromAddress}</div>
                            </div>
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Bill to">
                            <div className="invoice-info-block">
                                <div className="label">From company</div>
                                <div className="info">{this.state.invoice.billTo}</div>
                            </div>
                            <div className="invoice-info-block">
                                <div className="label">Address</div>
                                <div className="info">{this.state.invoice.billToAddress}</div>
                            </div>                        
                        </CustomPaper>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper title="Items">
                            <div className="invoice-table">
                                { this._renderItems() }
                            </div>
                        </CustomPaper>
                    </Grid>

                    <Grid className="invoice-summary" item xs={12} sm={12} md={12}>
                        <CustomPaper title="Summary">
                            <Grid container spacing={24}>
                                <Grid item xs={12} sm={12} md={5}>
                                    <div className="summary-block">
                                        <div>Sub-total</div>
                                        <div>${ this._calculateTotal() }</div>
                                    </div>
                                    <div className="summary-block">
                                        <div>VAT (percent)</div>
                                        <div>{ this.state.invoice.vatPercent }%</div>
                                    </div>
                                    <div className="summary-block">
                                        <div>Total</div>
                                        <div>${ this._calculateWithVat() }</div>
                                    </div>                                                                        
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%' }}>
                                        { this._renderEdit() }
                                    </div>
                                </Grid>                                
                            </Grid>
                        </CustomPaper>
                    </Grid>                    

                </Grid>                        
            </GenericPage>
        )
    }    
}

export default connect(null, { appNotify })(ViewInvoice);
