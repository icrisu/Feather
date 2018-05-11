import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addUser } from '../../../actions';
import GenericDialog from '../../common/dialogs/GenericDialog';
import Grid from 'material-ui/Grid';
import TextField from 'material-ui/TextField';
import { appNotify } from '../../../actions/ui-interact';

class NewUserModal extends PureComponent {

    constructor(props) {
        super(props);
        this.dialog = React.createRef();   
        this.state = {
            user: {
                first_name: '',
                last_name: '',            
                company: '',
                email: '',
                phone: '',
                link: '/users/kara-thrace', // dummy link for theme functionality
            },
            first_name_Error: false, last_name_Error: false
        }
    }

    _validateField(field, validatedField, value) {
        if (field === validatedField) {
            if (value === '') {
                this.setState({ [`${field}_Error`]: true });
            } else {
                this.setState({ [`${field}_Error`]: false });
            }
        }
    }
    
    _confirmAddUser() {
        if (!this.dialog) {
            return;
        }
        this.props.addUser(this.state.user);
        this.props.appNotify({
            message: `User "${this.state.user.first_name} ${this.state.user.last_name}" has been added`, 
            open: true
        });        
        this.dialog.current._handleClose();
    }

    _handleChange(event, field) {
        const value = event.target.value;
        this.setState({ user: { ...this.state.user, [field]: value } }, () => {
            if (field === 'first_name' || field === 'last_name')
            this._validateField(field, field, value)
        })
    }

    _renderForm() {
        return(
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        error={ this.state.first_name_Error }
                        label="First name"
                        onChange={ event => this._handleChange(event, 'first_name') }
                        value={this.state.user.first_name}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        error={ this.state.last_name_Error }
                        label="Last name"
                        onChange={ event => this._handleChange(event, 'last_name') }
                        value={this.state.user.last_name}
                        fullWidth
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        label="Company"
                        onChange={ event => this._handleChange(event, 'company') }
                        value={this.state.user.company}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        label="Email"
                        onChange={ event => this._handleChange(event, 'email') }
                        value={this.state.user.email}
                        fullWidth
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                    <TextField
                        label="Phone"
                        onChange={ event => this._handleChange(event, 'phone') }
                        value={this.state.user.phone}
                        fullWidth
                    />
                </Grid>                                               
            </Grid>
        )
    }

    render() {
        const acceptIsDisabled = this.state.first_name_Error || this.state.first_name_Error || this.state.user.first_name === '' || this.state.user.last_name === '' ? true : false;
        const newProps = { 
            ...this.props, title: "Create new user",
            onAccept: this._confirmAddUser.bind(this),
            acceptIsDisabled
        }
        return(
            <GenericDialog { ...newProps } ref={this.dialog}>
                { this._renderForm() }
            </GenericDialog>
        )
    }
}

NewUserModal.defaultProps = {
    open: PropTypes.bool,
    addUser: PropTypes.func.isRequired,
    appNotify: PropTypes.func
}

export default connect(null, { addUser, appNotify })(NewUserModal);
