import React, { PureComponent } from 'react';
import shortid from 'shortid';
import Chart from 'chart.js';
import CircularProgress from '@material-ui/core/CircularProgress';
import { WIDGET_LOADER_COLOR } from '../../../theme/Customize';

class BaseChart extends PureComponent {
    _canvasID;
    _ctx;
    _chart;

    constructor(props) {
        super(props);
        this._canvasID = shortid();
        this.state = { showLoader: true };
    }

    componentDidMount() {
        this._ctx = document.getElementById(this._canvasID).getContext('2d');
        Chart.defaults.global.responsive = true;
    }

    drawChart = (data, options = {}, type = 'bar') => {
        this.setState({ showLoader: false })
        this._chart = new Chart(this._ctx, {
            type, data, options
        });
    }

    getChart = () => {
        return this._chart;
    }

    _renderLoader() {
        if (this.state.showLoader) {
            return(
                <div style={{ width: 40,  margin: 'auto', marginTop: 30 }}>
                    <CircularProgress style={{ color: WIDGET_LOADER_COLOR }} />
                </div>
            )
        }
    }

    render() {
        return(
            <div className="base-chart" { ...this.props }>                
                { this._renderLoader() }
                <canvas id={this._canvasID}></canvas>
            </div>
        )
    }
}

export default BaseChart;
