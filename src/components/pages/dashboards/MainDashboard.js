import React, { Component, Fragment } from 'react';
import { getExpences } from '../../../actions';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import QuickDashInfo from '../../common/info/QuickDashInfo';
import ChannelSalesBar from '../../common/charts/ChannelSalesBar';
import BestSellingWidget from '../../common/lists/BestSellingWidget';
import BalanceHistory from '../../common/lists/BalanceHistory';
import StatsList from '../../common/lists/StatsList';
import DocumentPaper from '../../common/paper/DocumentPaper';
import NotificationWidget from '../../common/NotificationWidget';


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
    //     <Typography style={{ fontWeight: 400 }} variant="title" gutterBottom>
    //     Good evening, Kara Thrace.
    // </Typography>
    // <Typography style={{ color: '#6d738e', marginBottom: 30 }} variant="body2" gutterBottom>
    //     Here's what's happening with your store today.
    // </Typography>          
        return(
            <Fragment>
                <div className="page-header">
                    <div className="left">
                        <h1 className="page-title">Dashboard</h1>
                    </div>
                    <div className="right">
                        right
                    </div>
                </div>
                <div className="content">
                    <Grid container spacing={24}>
                        { this._renderQuickInfo() }                
                        { this._renderRecentDocs() }
                        

                        <Grid item xs={12} sm={12} md={6}>           
                                <Grid container spacing={24}>
                                    <Grid item xs={6} sm={6} md={6}>
                                        <CustomPaper removepadding>
                                        </CustomPaper>                                 
                                    </Grid>
                                    <Grid item xs={6} sm={6} md={6}>
                                        <CustomPaper removepadding>
                                        </CustomPaper>                                   
                                    </Grid>

                                    <Grid item xs={6} sm={6} md={6}>
                                        <CustomPaper removepadding>
                                        </CustomPaper>                                 
                                    </Grid>
                                </Grid>                                    
                            <CustomPaper title="Sales by channel">
                                <ChannelSalesBar />
                            </CustomPaper>
                            <CustomPaper title="Expenses stat">
                                <StatsList retriveAction={ getExpences } />
                            </CustomPaper>        
                        </Grid>
                        <Grid item xs={12} sm={12} md={6}>
                            <CustomPaper title="Balance history" maxheight={300} removepadding="true">
                                <BalanceHistory />
                            </CustomPaper>
                            <CustomPaper title="Recent activity">
                                <NotificationWidget />
                            </CustomPaper>                              
                            <CustomPaper title="Best selling items" maxheight={300} removepadding="true">
                                <BestSellingWidget />
                            </CustomPaper>                          
                        </Grid>

                    </Grid>                                                          
                </div>
            </Fragment>
        )
    }
}

export default MainDashboard;
