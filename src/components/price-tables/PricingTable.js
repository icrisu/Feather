import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class PricingTable extends Component {

    static defaultProps = {
        color: '#596376',
        info: ''
    }

    static propTypes = {
        color: PropTypes.string,
        info: PropTypes.string
    }

    render() {
        return(
            <div className="pricing-table-default">
                <div className="pricing-item">
                    <ul className="package">
                        <div className="pack-col" style={{ background: this.props.color }}></div>
                        <li className="header">Starter</li>
                        <li className="info">For designers who only need a few active projects.</li>
                        <li>Starter</li>
                        <li>100 Domains</li>
                        <li>1TB SSD</li>
                    </ul>
                </div>
                <div className="pricing-item">
                    <ul className="package">
                        <li className="header">Professional</li>
                    </ul>
                </div>
                <div className="pricing-item">
                    <ul className="package">
                        <li className="header">Team</li>
                    </ul>
                </div>                                
            </div>
        )
    }
}

// export default PricingTable;
