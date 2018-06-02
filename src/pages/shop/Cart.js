import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pushFakeDataToCart, removeCartItem, clearShopingCart } from '../../actions';
import { appNotify } from '../../actions/ui-interact';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';
import CartStepper from '../../components/common/misc/CartStepper';
import Delete from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';

class Cart extends Component {

    state = {
        cartItems: [], orderJustPlaces: false,
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Shop', to: '/shop' }, { label: 'Cart' }],
    }

    static defaultProps = {
        cartItems: []
    }

    static getDerivedStateFromProps(props, state) {
        return {
            cartItems: props.cartItems
        }
    }

    componentDidMount() {
        // fake implementation
        this.setState({ orderJustPlaces: false });
        this.props.pushFakeDataToCart();
    }

    _onCountChange(val, itemId) {
        let cartItems = [ ...this.state.cartItems ];
        for (let i = 0; i < cartItems.length; i++) {
            if (cartItems[i]._id === itemId) {
                cartItems[i].howMany = val;
                break;
            }
        }
        this.setState({ cartItems });
    }

    _calculateTotal() {
        let total = 0;
        let cartItems = [ ...this.state.cartItems ];
        for (let i = 0; i < cartItems.length; i++) {
            total+= cartItems[i].price * cartItems[i].howMany;
        }        
        return total;
    }

    _removeItem(itemId) {
        this.props.removeCartItem(itemId);
    }

    _placeOrder() {
        this.setState({ orderJustPlaces: true })
        this.props.clearShopingCart();
        this.props.appNotify({
            message: 'Your order has been placed!', 
            open: true
        });
    }

    _renderItems() {
        const { cartItems } = this.state;
        return cartItems.map(item => {
            return(
                <div className="cart-item" key={ item._id }>
                    <div className="control">
                        <div style={{ marginRight: 10 }}>
                            <div className="title">{ item.title }</div>
                            <div className="subtitle">{ item.subTitle }</div>                            
                            <div className="price">${ item.price * item.howMany }</div>
                        </div>
                        
                    </div>
                    <div className="control">
                        <CartStepper count={ item.howMany } onCountChange={ val => this._onCountChange(val, item._id) } style={{ marginRight: 10 }} />
                        <IconButton onClick={ e => this._removeItem(item._id) }><Delete /></IconButton>
                    </div>
                </div>
            )
        })
    }

    _renderSumarize() {
        if (this.state.cartItems.length > 0) {
            return(
                <div className="summarize">
                    <div className="total">Total: ${ this._calculateTotal() }</div>
                    <Button onClick={ this._placeOrder.bind(this) } variant="raised" color="primary" style={{ textTransform: 'initial' }}>
                        Place order
                    </Button>                                
                </div>
            )
        }
    }

    _renderEmpty() {
        const text = this.state.orderJustPlaces ? 'Your order has been placed!' : 'Shoping cart is empty.';
        if (this.state.cartItems.length === 0) {
            return(
                <div style={{ textAlign: 'center' }}>
                    <p>{ text }</p>
                    <Button component={ Link } to="/shop" variant="raised" color="secondary" style={{ textTransform: 'initial' }}>
                        Continue shopping
                    </Button>                     
                </div>
            )
        }
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.cart.title')} pageContentClasses="shop-cart-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper title="Cart items">
                            { this._renderItems() }
                            { this._renderSumarize() }
                            { this._renderEmpty() }
                        </CustomPaper>
                    </Grid> 
                </Grid>             
            </GenericPage> 
        )
    }
}

const mapStateToProps = ({ cartItems }) => {
    return { cartItems };
}

Cart.propTypes = {
    cartItems: PropTypes.array,
    removeCartItem: PropTypes.func
}

export default connect(mapStateToProps, { pushFakeDataToCart, removeCartItem, clearShopingCart, appNotify })(Cart);
