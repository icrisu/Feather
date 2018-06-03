import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Check from '@material-ui/icons/Check';

// pricing package
export class PricingPackage extends PureComponent {

    static defaultProps = {
        info: '',
        color: '#596376',
        packageTitle: 'Ttitle',
        currency: '$'
    }

    static propTypes = {
        info: PropTypes.string,
        color: PropTypes.string,
        packageTitle: PropTypes.string,
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        buyButton: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ]),
        price: PropTypes.string,
        currency: PropTypes.string,
        per: PropTypes.string        
    }
    
    render() {
        return(
            <div className="pricing-item">
                <ul className="package">
                    <div className="pack-col" style={{ background: this.props.color }}></div>
                    <li className="header list-item">{ this.props.packageTitle }</li>
                    <li className="list-item info">{ this.props.info }</li>
                    <li className="list-item">
                        <ul className="features">
                            { this.props.children }
                        </ul>
                    </li>
                    <li className="list-item price-ui">
                        <div className="price-info">
                            <div className="currency">{ this.props.currency }</div>
                            <div className="price">
                                { this.props.price }
                            </div>
                            <div className="per">{ this.props.per }</div>
                        </div>
                    </li>
                    <li className="list-item">{ this.props.buyButton }</li>
                </ul>
            </div>        
        )
    }
}

export const PackageFeature = props => {
    return <li><span><Check /></span>{ props.children }</li>;
}

export class PricingTable extends PureComponent {

    static propTypes = {
        children: PropTypes.oneOfType([
            PropTypes.arrayOf(PropTypes.node),
            PropTypes.node
        ])        
    }

    render() {
        return(
            <div className="pricing-table-default">
                { this.props.children }                             
            </div>
        )
    }
}

