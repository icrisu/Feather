import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import Fade from '@material-ui/core/Fade';
import LinkIcon from '@material-ui/icons/Link';

class ShopListItem extends Component {
    

    state = { showLink: false }
    
    onMouseEnter() {
        this.setState({ showLink: true })
    }

    onMouseLeave() {
        this.setState({ showLink: false })
    }

    _renderShowLink() {
        if (this.state.showLink) {
            return(
                <Fade in={ true } timeout={ 200 }>
                    <div className="show-link"><LinkIcon style={{ color: '#FFFFFF', fontSize: 36 }} /></div>
                </Fade>
            )
        }
    }

    _onClick() {
        this.props.history.push(`/shop/${ this.props.product._id }`);
    }

    render() {
        const { product } = this.props;
        return(
            <div className="shop-list-item pull-left" 
                onClick={ this._onClick.bind(this) }
                onMouseEnter={ this.onMouseEnter.bind(this) }
                onMouseLeave={ this.onMouseLeave.bind(this) }
                >
                <div className="image-ui">
                    <img src={ product.images[0] } alt="" />
                    { this._renderShowLink() }
                </div>
                <div className="details">
                    <div>
                        <div className="product-title">{ product.title }</div>
                        <div className="product-subtitle">{ product.subTitle }</div>                        
                    </div>
                    <div className="price">${ product.price }</div>
                </div>
            </div>
        )
    }
}

ShopListItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default withRouter(ShopListItem);
