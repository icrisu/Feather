import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';

class StoreLocator extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Store locator' }],
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.map.title')} pageContentClasses="calendar-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper hasMarginBottom>

                        </CustomPaper>
                    </Grid>
                </Grid>
            </GenericPage>
        )
    }
}

export default StoreLocator;

