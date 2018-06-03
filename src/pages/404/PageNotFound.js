import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import { Link } from 'react-router-dom';

class PageNotFound extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: '404' }]
    }

    render() {
        return(
            <GenericPage title="Page not found" pageContentClasses="not-found-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}> 
                        <div className="not-found-content">
                            <div className="code">
                                <span>4</span>
                                <span className="o">0</span>
                                <span>4</span>
                            </div>
                            <div style={{ marginBottom: 10 }} className="info">Adventure is out there</div>
                            <div className="info"><Link to="/">Keep looking!</Link></div>
                        </div>
                    </Grid>                    
                </Grid>
            </GenericPage>            
        )
    }
}

export default PageNotFound;
