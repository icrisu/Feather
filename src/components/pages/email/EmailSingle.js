import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { appNotify } from '../../../actions/ui-interact';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { Link } from 'react-router-dom';
import CustomPaper from '../../common/paper/CustomPaper';
import CustomInput from '../../common/custom-form-elements/CustomInput';
import CustomTextarea from '../../common/custom-form-elements/CustomTextarea';
import Reply from '@material-ui/icons/Replay';
import Send from '@material-ui/icons/Send';
import TextFormat from '@material-ui/icons/TextFormat';
import AttachFile from '@material-ui/icons/AttachFile';
import AddAPhoto from '@material-ui/icons/AddAPhoto';


class EmailSingle extends Component {

    state = {
        from: 'chris.john@company.io', to: 'chris.john@company.io', messageBody: '',
        showReply: false,
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Inbox', to: '/email/inbox' }, { label: 'Email subject' }]
    } 

    // implement retrive email from ID from props
    // componentDidMount() {

    // }

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

    _renderDummyMessage() {
        return {__html: `
            Dear Kara,<br /><br />
            I'm John from the Accounts Payable department at GHI. Ltd. I understand that we have an invoice outstanding with your company since 07/01/2018. This email is to request you for a copy of the invoice, so that we can clear it for payment at the earliest. 
            <br /><br />
            Thank you,<br />
            John,<br />
            Senior Executive<br />
            Accounts Payable,<br />
            GHI. Ltd<br />
        `};
    }

    _renderReply() {
        if (this.state.showReply) {
            return(
                <CustomPaper>
                    <CustomInput onChange={ val => this._handleChange(val, 'to') } value={ this.state.to } placeholder="To:" />
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
            )             
        }
    }
  
    render() {
        return(
            <GenericPage title={`${I18n.t('pages.emailSingle.title')} subject`} pageContentClasses="single-email-page-content compose-email-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>

                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div className="from">
                            from { this.state.from } to me
                        </div>
                        <Button onClick={ e => this.setState({ showReply: true }) } variant="raised" color="secondary" style={{ textTransform: 'initial' }}>
                            <Reply style={{ fontSize: 18, marginRight: 5 }} />
                            Reply
                        </Button>
                    </Grid> 

                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper hasMarginBottom>
                            <div className="fromContent" dangerouslySetInnerHTML={ this._renderDummyMessage() }></div>
                        </CustomPaper>                            
                        { this._renderReply() }              
                    </Grid> 
                </Grid>
            </GenericPage> 
        )
    }
}

export default withRouter(connect(null, { appNotify })(EmailSingle));
