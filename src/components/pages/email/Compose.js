import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { appNotify } from '../../../actions/ui-interact';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import CustomPaper from '../../common/paper/CustomPaper';
import CustomInput from '../../common/custom-form-elements/CustomInput';
import CustomTextarea from '../../common/custom-form-elements/CustomTextarea';
import Send from '@material-ui/icons/Send';
import TextFormat from '@material-ui/icons/TextFormat';
import AttachFile from '@material-ui/icons/AttachFile';
import AddAPhoto from '@material-ui/icons/AddAPhoto';


class Compose extends Component {

    state = {
        to: '', subject: '', messageBody: '',
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Inbox', to: '/email/inbox' }, { label: 'New' }]
    }

    _handleChange(val, field) {
        this.setState({ [field]: val });
    }

    _send() {
        // implement send to server
        this.props.appNotify({
            message:  'Message sent!', 
            open: true
        }); 
        this.props.history.push('/email/inbox');
    }
  
    render() {
        return(
            <GenericPage title={I18n.t('pages.emailCompose.title')} pageContentClasses="compose-email-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper>
                            <CustomInput onChange={ val => this._handleChange(val, 'to') } value={ this.state.to } placeholder="To:" />
                            <CustomInput onChange={ val => this._handleChange(val, 'subject') } value={ this.state.subject } placeholder="Subject" />
                            <CustomTextarea onChange={ val => this._handleChange(val, 'messageBody') } value={ this.state.messageBody } />
                            <div className="compose-controls">
                                <Button onClick={ this._send.bind(this) } variant="raised" color="secondary" style={{ textTransform: 'initial' }}>
                                    Send
                                    <Send style={{ fontSize: 18, marginLeft: 5 }} />
                                </Button>
                                <div>
                                    <IconButton>
                                        <TextFormat />
                                    </IconButton>
                                    <IconButton>
                                        <AttachFile />
                                    </IconButton>
                                    <IconButton>
                                        <AddAPhoto />
                                    </IconButton>                                     
                                </div>                                                               
                            </div>
                        </CustomPaper>               
                    </Grid> 
                </Grid>
            </GenericPage> 
        )
    }
}

export default withRouter(connect(null, { appNotify })(Compose));
