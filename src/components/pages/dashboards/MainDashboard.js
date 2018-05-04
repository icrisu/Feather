import React, { Component, Fragment } from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import QuickDashInfo from '../../common/info/QuickDashInfo';

class MainDashboard extends Component {
    
    _renderQuickInfo() {
        return(
            <Fragment>
                <Grid item sm={12} md={3}>
                    <QuickDashInfo title="Total transactions" info="Jun 23 - Jun24" value="232" />
                </Grid>
                <Grid item sm={12} md={3}>
                    <QuickDashInfo title="Total revenue" info="May 18 - Jun24" value="$12,340.00" trend="up" />
                </Grid>
                <Grid item sm={12} md={3}>
                    <QuickDashInfo title="Visits" info="Today's visits" value="857" trend="down" />
                </Grid>
                <Grid item sm={12} md={3}>
                    <QuickDashInfo title="Orders" info="Today" value="349" trend="up" />
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

                        <Grid item xs={12} sm={6}>
                            <CustomPaper title="hello">
                                <p>hello</p><p>hello</p>
                            </CustomPaper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomPaper>Hello</CustomPaper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomPaper>Hello</CustomPaper>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <CustomPaper>Hello</CustomPaper>
                        </Grid>
                        <Grid item xs={12} sm={12}>
                            <CustomPaper>Hello</CustomPaper>
                        </Grid>   

                    </Grid>                                                          
                </div>
            </Fragment>
        )
    }
}

export default MainDashboard;
