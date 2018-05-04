import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getRecentSalesByChannel } from '../../../actions';
import BaseChart from './BaseChart';
import _ from 'lodash'; 
import safe from 'undefsafe';

const chartOptions = {
    legend: {
        display: false,
        labels: {
            fontStyle: "'Roboto', sans-serif"
        }
    },
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                    callback: value => {
                        return `$${value}`;
                    }
                }
            }
        ]
    },
    tooltips: {
        mode: 'point',
        callbacks: {
            label: (tooltipItems, data) => { 
                let num = parseFloat(tooltipItems.yLabel);
                return ` $${num}`;
            }
        }                    
    },    
}

class ChannelSalesBar extends Component {

    constructor(props) {
        super(props);
        this._salesByChannnelChart = React.createRef();
    }

    componentDidMount() {
        this.props.getRecentSalesByChannel(result => {
            console.log(result);
            if (!_.isNil(safe(this._salesByChannnelChart, 'current'))) {
                let opts = { ...chartOptions };
                opts.legend.display = true;
                this._salesByChannnelChart.current.drawChart(result, chartOptions, 'bar');
            }            
        }, { fillColors: true });
    }

    render() {
        return(
            <div className="sales-by-channel">
                <BaseChart style={{ marginBottom: 17 }} ref={this._salesByChannnelChart} />
            </div>
        )
    }
}

export default connect(null, { getRecentSalesByChannel })(ChannelSalesBar);
