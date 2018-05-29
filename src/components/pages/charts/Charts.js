import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../common/paper/CustomPaper';

class Charts extends Component {
    
    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Charts' }],
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.charts.title')} pageContentClasses="charts-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper title="Cart items">
                            
                        </CustomPaper>
                    </Grid> 
                </Grid>             
            </GenericPage>
        )         
    }
}

export default Charts;

