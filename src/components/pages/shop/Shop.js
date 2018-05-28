import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from '../../../actions';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import ShopListItem from './ShopListItem';
import Pagination from '../../common/misc/Pagination';

class Shop extends Component {

    state = {
        currentPage: 1, total: 0, products: [],
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Shop' }]
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { products: nextProps.products, totalPages: nextProps.totalPages, currentPage: nextProps.currentPage }
    }

    componentDidMount() {
        this.props.getProducts(this.state.currentPage);
    }

    _onPageChange(page) {
        this.setState({ currentPage: page }, () => {
            this.props.getProducts(this.state.currentPage);
        })
    }    

    _renderProducts() {
        return this.state.products.map(product => {
            return <ShopListItem product={ product } key={ product._id } />
        });
    }
  
    render() {
        return(
            <GenericPage title={I18n.t('pages.shop.title')} pageContentClasses="shop-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <div className="products clearfix">
                            { this._renderProducts() }
                        </div>
                    </Grid> 
                </Grid>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12} style={{ textAlign: 'center' }}>
                        <Pagination onPageChange={ this._onPageChange.bind(this) } currentPage={ this.state.currentPage } totalPages={ this.state.totalPages } />
                    </Grid>
                </Grid>                
            </GenericPage> 
        )
    }
}

const mapStateToProps = ({ shopProducts }) => {
    return { 
        products: shopProducts.products || [],
        total: shopProducts.total || 0,
        currentPage: shopProducts.currentPage || 1,
        totalPages: shopProducts.totalPages || 1
    }
}

Shop.propTypes = {
    products: PropTypes.array,
    getProducts: PropTypes.func
}

export default connect(mapStateToProps, { getProducts })(Shop);
