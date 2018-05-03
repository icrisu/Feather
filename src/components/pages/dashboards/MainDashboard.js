import React, { Component, Fragment } from 'react';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import CustomPaper from '../../common/paper/CustomPaper';

class MainDashboard extends Component {
    render() {
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
                        <Grid item xs={12} sm={6}>
                            <CustomPaper>Hello</CustomPaper>
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
                    </Grid>                      
                </div>
            </Fragment>
        )
    }
}

export default MainDashboard;
