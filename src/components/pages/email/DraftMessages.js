import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

class DraftMessages extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Email', to: '/email/inbox' }, { label: 'Draft' }]
    }

    componentDidMount() {
        // retrive draft messages from server side
        // see example within Inbox, Sent and Starred
    } 
  

    render() {
        return(
            <GenericPage title={I18n.t('pages.draft.title')} pageContentClasses="emails-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <p>Your draft folder is empty.</p>
                        <Button component={ Link } to="/email/inbox" variant="raised" color="secondary" style={{ textTransform: 'initial' }}>Go to inbox</Button>
                    </Grid> 

                </Grid>
            </GenericPage> 
        )
    }
}

export default DraftMessages;
