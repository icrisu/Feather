import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import PopOverHelper from '../../utils/PopOverHelper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import EditIcon from '@material-ui/icons/Edit';
import PhoneIcon from '@material-ui/icons/Phone';
import DeleteIcon from '@material-ui/icons/Delete';
import LinkIcon from '@material-ui/icons/Link';
import { I18n } from 'react-redux-i18n';
import { ROUTES } from '../../../routes/Routes';

const styles = theme => ({
    list: {
        marginTop: 0, paddingTop: 0
    },
    listItem: {
        padding: 0,
        fontSize: 14
    }
});

class InvoiceListItem extends PureComponent {

    static defaultProps = {
        invoice: {}
    }

    constructor(props) {
        super(props);
        this.state = { anchorEl: null, open: false }        
        this._popoverClose = this._popoverClose.bind(this);
    }    

    _renderStatus(status) {
        let style = {};
        switch (status) {
            case 'Paid':
                style = { background: 'rgb(63, 214, 152)' }
                break;
            case 'Pending':
                style = { background: '#90b1f6' }
                break;
            case 'Rejected':
                style = { background: '#fe7a87' }
                break;                                
            default:
                break;
        }
        return style;

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
                <ListItem component={Link} to={ `${ROUTES.invoices.path}/view/${this.props.invoice._id}` } disableGutters button>
                    <ListItemIcon style={{ margin: 0, marginLeft: 15 }}><LinkIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItem }} primary="View invoice" />
                </ListItem>               
                <ListItem component={Link} to={ `${ROUTES.invoices.path}/edit/${this.props.invoice._id}` } disableGutters button>
                    <ListItemIcon style={{ margin: 0, marginLeft: 15 }}><EditIcon /></ListItemIcon>
                    <ListItemText classes={{ primary: classes.listItem }} primary="Edit invoice" />
                </ListItem>
            </List>
            </PopOverHelper>            
        )
    }

    render() {
        return(
            <TableRow>
                <TableCell>
                    <Link className="table-link-bold" style={{ fontWeight: 500, textDecoration: 'none' }} to={ `${ROUTES.invoices.path}/view/${this.props.invoice._id}` }>{ this.props.invoice.invoice_number } </Link>
                </TableCell>
                <TableCell className="company">{this.props.invoice.company}</TableCell>
                <TableCell className="amount">{this.props.invoice.amount}</TableCell>
                <TableCell className="status">
                    <div className="invoice-status" style={ this._renderStatus(this.props.invoice.status) }>{this.props.invoice.status}</div>
                </TableCell>
                <TableCell style={{ textAlign: 'right' }}>{ this._renderActions() }</TableCell>
            </TableRow>            
        )
    }
}

InvoiceListItem.porpTypes = {
    classes: PropTypes.object.isRequired,
    invoice: PropTypes.object
}

export default withStyles(styles)(InvoiceListItem);
