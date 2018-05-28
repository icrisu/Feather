import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getProducts } from '../../../actions';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import CustomPaper from '../../common/paper/CustomPaper';

class SingleProduct extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Shop', to: '/' }, { label: 'Product' }],
        product: {
            "_id": 5,
            "title": "Leather Watch",
            "subTitle": "Jewellery",
            "price": 399,
            "isOnSale": false,
            "images": [
                "assets/dummy_data/imgs/products_medium/product-large.jpg"
            ]            
        }
    }

    // retrive product from SERVER based on product ID from props
    // componentDidMount() { 
    // }
  
    render() {
        return(
            <GenericPage title="Product title" pageContentClasses="shop-single-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper>
                            <div className="product-image-ui">
                                <img src={ this.state.product.images[0] }  alt="" />
                            </div>
                        </CustomPaper>
                    </Grid> 
                </Grid>               
            </GenericPage> 
        )
    }
}

export default connect(null, null)(SingleProduct);
