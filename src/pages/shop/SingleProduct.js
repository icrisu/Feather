import React, { Component } from 'react';
import { connect } from 'react-redux';
import { appNotify } from '../../actions/ui-interact';
import GenericPage from '../base/GenericPage';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CustomPaper from '../../components/common/paper/CustomPaper';
import IconAddToCart from '@material-ui/icons/AddShoppingCart';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import CartStepper from '../../components/common/misc/CartStepper';
import Fade from '@material-ui/core/Fade';

class SingleProduct extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Shop', to: '/shop' }, { label: 'Product' }],
        // dummy data (get data from the server side on componentDidMount @see below)
        product: {
            "_id": 5,
            "title": "Sherwood Recliner Chair",
            "subTitle": "By Darbi Home Co",
            "price": 399,
            "isOnSale": false,
            "description": `
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            <br /><br />
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            `,
            "images": [
                "assets/dummy_data/imgs/products_medium/product-large.jpg"
            ]            
        },
        count: 1,
        hasBeenAddedToCart: false
    }

    // retrive product from SERVER based on product ID from props
    // componentDidMount() { 
    //     console.log(this.props.match.params._id)
    // }

    _onCountChange(value) {
        this.setState({ count: value })
    }

    _addToCard() {
        this.setState({ hasBeenAddedToCart: true });
        this.props.appNotify({
            message:  'Added to cart!', 
            open: true
        });         
    }

    _renderViewCart() {
        if (this.state.hasBeenAddedToCart) {
            return(
                <Fade in={ true } timeout={ 500 }>
                    <Button component={ Link } to="/shop/cart" variant="raised" color="secondary" style={{ textTransform: 'initial' }}>
                        <ShoppingCart style={{ fontSize: 20, marginRight: 5 }} />
                        View cart
                    </Button>
                </Fade>
            )
        }
    }
  
    render() {
        return(
            <GenericPage title="Product: Sherwood chair" pageContentClasses="shop-single-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper>
                            <div className="product-single-image-ui pull-left">
                                <img src={ this.state.product.images[0] }  alt="" />
                            </div>
                            <div className="product-description">
                                <div className="product-title">{ this.state.product.title }</div>
                                <div className="subtitle">{ this.state.product.subTitle }</div>
                                <div className="price-ui">
                                    <div className="product-price">${ this.state.product.price * this.state.count }</div>
                                    <CartStepper count={ this.state.count } onCountChange={ this._onCountChange.bind(this) } />
                                </div>
                                <div className="description">Description</div>
                                <div className="description-content" dangerouslySetInnerHTML={{__html: this.state.product.description}} ></div>
                                <div className="controls">
                                    <Button onClick={ this._addToCard.bind(this) } variant="raised" color="primary" style={{ textTransform: 'initial', marginRight: 20 }}>
                                        <IconAddToCart style={{ fontSize: 20, marginRight: 5 }} />
                                        Add to cart
                                    </Button>
                                    { this._renderViewCart() }           
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </CustomPaper>
                    </Grid> 
                </Grid>               
            </GenericPage> 
        )
    }
}

export default connect(null, { appNotify })(SingleProduct);
