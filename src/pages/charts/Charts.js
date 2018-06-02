import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';
import BaseChart from '../../components/common/charts/BaseChart';

import { DEMO_DATA } from './demoDataSets';
import { CHARTS_OPTS } from './chartsOptions';

// additional examples on how to use ChartsJS 
// can be found here: http://tobiasahlin.com/blog/chartjs-charts-to-get-you-started/
class Charts extends Component {
    
    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Charts' }],
    }

    _barChart;
    _lineChart;
    _radarChart;
    _pieChart;
    _doughnut;
    _polar;
    _horizontalBar;
    _grouped;

    constructor(props) {
        super(props);
        this._barChart = React.createRef();
        this._lineChart = React.createRef();
        this._radarChart = React.createRef();
        this._pieChart = React.createRef();
        this._doughnut = React.createRef();
        this._polar = React.createRef();
        this._horizontalBar = React.createRef();
        this._grouped = React.createRef();
    }

    // retrieve data from the server side
    // NOTE! for an example implementation with dynamic data
    // see components/common/charts/ChannelSalesBar.js
    // currently we're using dataSets demo
    // NOTE! I've built a wrapper component "BaseChart" around ChartJs.org charts
    componentDidMount() {
        this._barChart.current.drawChart(DEMO_DATA.barData, CHARTS_OPTS.barOpts, 'bar');
        this._lineChart.current.drawChart(DEMO_DATA.lineData, CHARTS_OPTS.barOpts, 'line');
        this._radarChart.current.drawChart(DEMO_DATA.radarData, CHARTS_OPTS.radarOpts, 'radar');
        this._pieChart.current.drawChart(DEMO_DATA.pieData, CHARTS_OPTS.radarOpts, 'pie');
        this._doughnut.current.drawChart(DEMO_DATA.doughnutData, CHARTS_OPTS.radarOpts, 'doughnut');
        this._polar.current.drawChart(DEMO_DATA.polarData, CHARTS_OPTS.poarOpts, 'polarArea');
        this._horizontalBar.current.drawChart(DEMO_DATA.horizontalBarData, CHARTS_OPTS.horizontalBarOpts, 'horizontalBar');
        this._grouped.current.drawChart(DEMO_DATA.groupedChartData, CHARTS_OPTS.groupedChartOpts, 'bar');        
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.charts.title')} pageContentClasses="charts-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Sales by channel" hasMarginBottom>
                            <BaseChart ref={this._barChart} />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Recent purchases" hasMarginBottom>
                            <BaseChart ref={this._lineChart} />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Today's sales" hasMarginBottom>
                            <BaseChart ref={this._pieChart} />
                        </CustomPaper>
                    </Grid>                     
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Weekly sales" hasMarginBottom>
                            <BaseChart ref={this._doughnut} />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Customers by location" hasMarginBottom>
                            <BaseChart ref={this._polar} />
                        </CustomPaper>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="New visits" hasMarginBottom>
                            <BaseChart ref={this._horizontalBar} />
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Pending sales" hasMarginBottom>
                            <BaseChart ref={this._grouped} />
                        </CustomPaper>
                    </Grid>                                                           
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Performance" hasMarginBottom>
                            <BaseChart ref={this._radarChart} />
                        </CustomPaper>
                    </Grid>                                                                                 
                </Grid>             
            </GenericPage>
        )         
    }
}

export default Charts;

