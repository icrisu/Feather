import React, { Component } from 'react';
import { connect } from 'react-redux';
import BaseChart from '../../common/charts/BaseChart';
import { getRecentSales, getRecentSalesByChannel } from '../../../actions';
import { chartOptions } from './CharsOptions';
import { I18n } from 'react-redux-i18n';
import _ from 'lodash'; 
import safe from 'undefsafe';

class SidebarSales extends Component {

    
    constructor(props) {
        super(props);
        this.salesChart = React.createRef();
        this.salesByChannnelChart = React.createRef();
    }

    componentDidMount() {
        this.props.getRecentSales(result => {
            if (!_.isNil(safe(this.salesChart, 'current'))) {
                this.salesChart.current.drawChart(result, chartOptions, 'bar');
            }            
        });
        this.props.getRecentSalesByChannel(result => {
            if (!_.isNil(safe(this.salesByChannnelChart, 'current'))) {
                let opts = { ...chartOptions };
                opts.legend.display = true;
                this.salesByChannnelChart.current.drawChart(result, chartOptions, 'line');
            }            
        });
    }

    render() {
        return(
            <div className="sidebar-sales pretty-scroll">
                <div className="sidebar-group">
                    <div className="group-title">
                        <span className="pull-left">{I18n.t('sidebar.recent_sales')}</span><span className="pull-right">May 20</span>
                        <div className="clearfix"></div>
                    </div>
                    <div className="group-content">
                        <div className="simple-card">
                            <div className="entry-title">
                                <div className="title">$1529.00</div>
                                <div className="info">58 {I18n.t('sidebar.orders')}</div>                            
                            </div>
                            <BaseChart ref={this.salesChart} />
                        </div>
                    </div>
                    <div className="group-title">
                        <span className="pull-left">{I18n.t('sidebar.salesByChannel')}</span><span className="pull-right">May 20</span>
                        <div className="clearfix"></div>
                    </div>
                    <div className="group-content">
                        <div className="simple-card">
                            <BaseChart style={{ marginBottom: 17 }} ref={this.salesByChannnelChart} />
                            <div className="entry-sales-channel separator">
                                <div className="channel-name">Amazon</div>
                                <div className="entry-title">
                                    <div className="title">$1235.00</div>
                                    <div className="info">28 {I18n.t('sidebar.orders')}</div>                            
                                </div>                              
                            </div>
                            <div className="entry-sales-channel">
                                <div className="channel-name">Shopify</div>
                                <div className="entry-title">
                                    <div className="title">$325.00</div>
                                    <div className="info">18 {I18n.t('sidebar.orders')}</div>                            
                                </div>                              
                            </div>                                                       
                        </div>
                    </div>                    
                </div>
            </div>
        )
    }
}

export default connect(null, { getRecentSales, getRecentSalesByChannel })(SidebarSales);
