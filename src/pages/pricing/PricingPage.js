import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import { PricingTable, PricingPackage, PackageFeature } from '../../components/price-tables/PricingTable';
import Button from '@material-ui/core/Button';

class PricingPage extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Pricing' }]
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.pricing.title')} pageContentClasses="pricing-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={12}>                        
                        <PricingTable>
                            <PricingPackage
                                packageTitle="Starter" 
                                info="For designers who only need a few active projects."
                                buyButton={ 
                                    <Button variant="raised" size="medium">Buy now</Button>
                                }
                                price="22" currency="$" per="/mo"
                            >
                                <PackageFeature>3 prototypes</PackageFeature>
                                <PackageFeature>3 boards</PackageFeature>
                                <PackageFeature>3 team members</PackageFeature>
                            </PricingPackage>
                            <PricingPackage
                                packageTitle="Professional" 
                                info="For professional designers with lots of active projects."
                                color="rgb(63, 214, 152)"
                                buyButton={ 
                                    <Button color="secondary" variant="raised" size="medium">Buy now</Button>
                                }
                                price="49" currency="$" per="/mo"                             
                            >
                                <PackageFeature>Unlimited prototypes</PackageFeature>
                                <PackageFeature>Unlimited boards</PackageFeature>
                                <PackageFeature>10 team members</PackageFeature>
                            </PricingPackage>
                            <PricingPackage
                                packageTitle="Enterprise" 
                                info="Advanced features for large teams with complex projects."
                                color="#763eff"
                                buyButton={ 
                                    <Button color="primary" variant="raised" size="medium">Buy now</Button>
                                }
                                price="89" currency="$" per="/mo"                                
                            >
                                <PackageFeature>Unlimited prototypes</PackageFeature>
                                <PackageFeature>Unlimited boards</PackageFeature>
                                <PackageFeature>Unlimited team members</PackageFeature>
                            </PricingPackage>                                                        
                        </PricingTable>
                    </Grid>                    
                </Grid>
            </GenericPage>
        )
    }
}

export default PricingPage;

