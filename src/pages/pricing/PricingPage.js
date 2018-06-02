import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';
import { PricingTable } from '../../components/price-tables/PricingTable';

class PricingPage extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Pricing' }]
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.pricing.title')} pageContentClasses="pricing-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>                        
                        <PricingTable>
                        </PricingTable>
                    </Grid>                    
                </Grid>
            </GenericPage>
        )
    }
}

export default PricingPage;

