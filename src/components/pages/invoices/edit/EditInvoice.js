import React, { Component } from 'react';
import GenericPage from '../../base/GenericPage';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../../routes/Routes';
import { appNotify } from '../../../../actions/ui-interact';
import { I18n } from 'react-redux-i18n';
import CustomPaper from '../../../common/paper/CustomPaper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CustomInput from '../../../common/custom-form-elements/CustomInput';
import CustomTextarea from '../../../common/custom-form-elements/CustomTextarea';
import uniqid from 'uniqid';
import SaveIcon from '@material-ui/icons/Save';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';


class EditInvoice extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            invoice: {
                billFrom: '',
                billTo: '',
                billFromAddress: '',
                billToAddress: '',
                invoiceItems: [],
                vatPercent: 10,
                status: 2
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
                vatPercent: 20,
                status: 2             
            }
        });
    }

    _addItem() {
        let invoiceItems = [...this.state.invoice.invoiceItems, {
            _id: uniqid(),
            no: this.state.invoice.invoiceItems.length + 1,
            name: '',
            unitCost: 0,
            units: 0 
        }];
        this.setState({ invoice: { ...this.state.invoice, invoiceItems } })
    }

    _onVatChange(event) {
        this.setState({ invoice: { ...this.state.invoice, vatPercent: event.target.value } })
    }

    _updateItem(event, field, _id) {
        let invoiceItems = [...this.state.invoice.invoiceItems];
        for (let i = 0; i < invoiceItems.length; i++) {
            const item = invoiceItems[i];
            if (item._id === _id) {
                item[field] = event.target.value;
                invoiceItems[i] = item;
                break;
            }
        }
        this.setState({ invoice: { ...this.state.invoice, invoiceItems } });
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

    _save() {
        // implement save on server side
        this.props.appNotify({
            message:  'Invoice successfully updated', 
            open: true
        });
        this.setState({ redirectToInvoices: true });
    }

    _removeItem(_id) {
        let invoiceItems = [...this.state.invoice.invoiceItems];
        for (let i = 0; i < invoiceItems.length; i++) {
            const item = invoiceItems[i];
            if (item._id === _id) {
                invoiceItems.splice(i, 1);
                break;
            }
        }

        this.setState({ invoice: { ...this.state.invoice, invoiceItems } })
    }

    _companyDataChange(val, field) {
        this.setState({ invoice: {
            ...this.state.invoice, [field]: val
        } })
    }    

    _renderSave() {
        return(
            <Button onClick={ this._save.bind(this) } color="primary" variant="raised" style={{ textTransform: 'initial' }}>
                <SaveIcon style={{ marginRight: 8, fontSize: 20 }} />
                Save invoice
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
                        <input onChange={ e => this._updateItem(e, 'name', item._id) } style={{ width: '100%' }} type="text" value={ item.name } />
                    </TableCell>
                    <TableCell>
                        <input onChange={ e => this._updateItem(e, 'unitCost', item._id) } type="number" min="0" value={ item.unitCost } />
                    </TableCell>
                    <TableCell>
                        <input onChange={ e => this._updateItem(e, 'units', item._id) } type="number" min="0" value={ item.units } />
                    </TableCell>
                    <TableCell>
                        { this._calculateItemPrice(item._id) }
                    </TableCell>
                    <TableCell>
                        <IconButton onClick={ e => this._removeItem(item._id) }>
                            <DeleteIcon />
                        </IconButton>
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
                            <TableCell></TableCell>                             
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        { this._renderItemsData() }
                    </TableBody>        
                </Table>                   
            </div>
        )
    }    

    _redirectToInvoices() {
        if (this.state.redirectToInvoices) {
            return <Redirect to={ ROUTES.invoices.path } />
        }
    }

    handleStatusChange = event => {
        this.setState({ invoice: { ...this.state.invoice, status: event.target.value } })
    };

    _renderStatus() {
        return(
            <Select
                value={this.state.invoice.status}
                onChange={this.handleStatusChange}
                inputProps={{
                    name: 'status',
                    id: 'status-simple',
                }}
                >
                <MenuItem value={1}>Paid</MenuItem>
                <MenuItem value={2}>Pending</MenuItem>
                <MenuItem value={3}>Rejected</MenuItem>
            </Select>            
        )
    }

    render() {
        return(
            <GenericPage title={`${I18n.t('pages.editInvoice.title')} #${this.state.invoice.invoiceNo}`} pageContentClasses="edit-invoice-page-content">
                <Grid container spacing={24}>
                
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div>{ this._renderStatus() }</div>
                        <div>
                            { this._renderSave() }
                        </div>
                    </Grid>      

                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Bill from">
                            <CustomInput onChange={ val => this._companyDataChange(val, 'billFrom') } value={this.state.invoice.billFrom} label="From company" placeholder="Company" style={{ marginBottom: 20 }} />
                            <CustomTextarea onChange={ val => this._companyDataChange(val, 'billFromAddress') } value={this.state.invoice.billFromAddress} label="Address" placeholder="Enter address" />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Bill to">
                            <CustomInput onChange={ val => this._companyDataChange(val, 'billTo') } value={this.state.invoice.billTo} label="To company" placeholder="Company" style={{ marginBottom: 20 }} />
                            <CustomTextarea onChange={ val => this._companyDataChange(val, 'billToAddress') } value={this.state.invoice.billToAddress} label="Address" placeholder="Enter address" />
                        </CustomPaper>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper title="Items">
                            <div className="invoice-table">
                                { this._renderItems() }
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 20 }}>
                                <Button onClick={ this._addItem.bind(this) } variant="raised" color="secondary" style={{ textTransform: 'initial' }}>Add item</Button>
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
                                        <div><input onChange={ this._onVatChange.bind(this) } value={ this.state.invoice.vatPercent } placeholder="%" type="number" min="0" style={{ maxWidth: 60, textAlign: 'right' }} /></div>
                                    </div>
                                    <div className="summary-block">
                                        <div>Total</div>
                                        <div>${ this._calculateWithVat() }</div>
                                    </div>                                                                        
                                </Grid>
                                <Grid item xs={12} sm={12} md={7}>
                                    <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', height: '100%' }}>
                                        { this._renderSave() }
                                    </div>
                                </Grid>                                
                            </Grid>
                        </CustomPaper>
                    </Grid>                    

                </Grid> 
                { this._redirectToInvoices() }                           
            </GenericPage>
        )
    }    
}

export default connect(null, { appNotify })(EditInvoice);
