import React, { Component, Fragment } from 'react';
import { getExpences } from '../../../actions';
import GenericPage from '../base/GenericPage';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import QuickDashInfo from '../../common/info/QuickDashInfo';
import ChannelSalesBar from '../../common/charts/ChannelSalesBar';
import BestSellingWidget from '../../common/lists/BestSellingWidget';
import BalanceHistory from '../../common/lists/BalanceHistory';
import StatsList from '../../common/lists/StatsList';
import DocumentPaper from '../../common/paper/DocumentPaper';
import NotificationWidget from '../../common/NotificationWidget';
import ActivityCards from './ActivityCards';
import { I18n } from 'react-redux-i18n';

class MainDashboard extends Component {
    
    _renderQuickInfo() {
        return(
            <Fragment>
                <Grid item xs={6} sm={3}>
                    <QuickDashInfo title="Total transactions" info="Jun 23 - Jun24" value="232" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <QuickDashInfo title="Total revenue" info="May 18 - Jun24" value="$12,340.00" trend="up" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <QuickDashInfo title="Visits" info="Today's visits" value="857" trend="down" />
                </Grid>
                <Grid item xs={6} sm={3}>
                    <QuickDashInfo title="Orders" info="Today" value="349" trend="up" />
                </Grid>
            </Fragment>              
        )
    }

    _renderRecentDocs() {
        const dummyText = 'Since your last visit, there are 50 documents to sign. In publishing and graphic design, lorem ipsum is common placeholder text used to demonstrate the graphic';
        return(
            <Fragment>
                <Grid item xs={6} sm={4}>
                    <DocumentPaper title="Documents" info={dummyText} date="Ten minutes ago" doctype="PDF" color="#ea6278" />
                </Grid>
                <Grid item xs={6} sm={4}>
                    <DocumentPaper title="22 new contracts" info={dummyText} date="20 Jun 2018" doctype="DOC" color="#4ea0ea" />
                </Grid> 
                <Grid item xs={6} sm={4}>
                    <DocumentPaper title="Business analysis" info={dummyText} date="22 Jul 2018" doctype="XLS" color="#46b39d" />
                </Grid>                               
            </Fragment>              
        )
    }    

    render() {  
        return(
            <GenericPage title={I18n.t('pages.dashboard.title')}>
                <Grid container spacing={24}>
                    { this._renderQuickInfo() }                
                    { this._renderRecentDocs() }
                    
                    <Grid item xs={12} sm={12} md={6}>                                               
                        <CustomPaper title={I18n.t('pages.dashboard.salesByChannel')} hasMarginBottom>
                            <ChannelSalesBar />
                        </CustomPaper>
                        <CustomPaper title={I18n.t('pages.dashboard.espensesStats')} hasMarginBottom>
                            <StatsList retriveAction={ getExpences } />
                        </CustomPaper>        
                        <ActivityCards />
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title={I18n.t('pages.dashboard.balanceHistory')} maxheight={300} removepadding="true" hasMarginBottom>
                            <BalanceHistory />
                        </CustomPaper>
                        <CustomPaper title={I18n.t('pages.dashboard.recentActivity')} hasMarginBottom>
                            <NotificationWidget />
                        </CustomPaper>                              
                        <CustomPaper title={I18n.t('pages.dashboard.bestSellingItems')} maxheight={300} removepadding="true">
                            <BestSellingWidget />
                        </CustomPaper>                          
                    </Grid>

                </Grid>            
            </GenericPage>
        )
    }
}

export default MainDashboard;
