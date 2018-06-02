import React, { Component, Fragment } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';
import SimpleMap from '../../components/maps/SimpleMap';
import { Marker } from 'react-google-maps';
import Button from '@material-ui/core/Button';
import CallIcon from '@material-ui/icons/Call';
import EmailIcon from '@material-ui/icons/Email';
import { Link } from 'react-router-dom';

// NOTE! - Add your own Google API key in /public/index.html
class StoreLocator extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Store locator' }],
        store: 1
    }

    _chooseStore(store, event) {
        this.setState({ store });
    }

    _renderStore() {
        if (this.state.store === 1) {
            return(
                <Fragment>
                    <div className="store-title">A votre sante</div>
                    <div>999 Third Avenue, San Francisco</div>
                    <div>Open until 9:00pm</div>
                    <div style={{ marginTop: '20px', marginBottom: 10 }}>
                        <Button variant="raised" color="secondary" size="medium" style={{ marginRight: 15 }}>
                            <CallIcon style={{ marginRight: 10, fontSize: 18 }} />
                            Call
                        </Button>
                        <Button component={ Link } to="email/new" variant="raised" size="medium">
                            <EmailIcon style={{ marginRight: 10, fontSize: 18 }} />
                            Email
                        </Button>                                
                    </div>                     
                </Fragment>
            )
        } else {
            return(
                <Fragment>
                    <div className="store-title">Big House Coffee</div>
                    <div>883 First Avenue, San Francisco</div>
                    <div>Open until 5:00pm</div>
                    <div style={{ marginTop: '20px', marginBottom: 10 }}>
                        <Button variant="raised" color="secondary" size="medium" style={{ marginRight: 15 }}>
                            <CallIcon style={{ marginRight: 10, fontSize: 18 }} />
                            Call
                        </Button>
                        <Button component={ Link } to="email/new" variant="raised" size="medium">
                            <EmailIcon style={{ marginRight: 10, fontSize: 18 }} />
                            Email
                        </Button>                                
                    </div>                     
                </Fragment>
            )            
        }
    }

    _renderMarkers() {
        return(
            <Fragment>
                <Marker onClick={ e => this._chooseStore(1, e) } position={{ lat: 37.7770501, lng: -122.4208018 }} />
                <Marker onClick={ e => this._chooseStore(2, e) } position={{ lat: 37.7763014, lng: -122.424422 }} />                
            </Fragment>
        )
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.map.title')} pageContentClasses="store-locator-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper hasMarginBottom>
                            <SimpleMap 
                                defaultCenter={{lat: 37.7770501, lng: -122.4208018}}
                                defaultZoom={15}
                            >
                                { this._renderMarkers() }
                            </SimpleMap>
                        </CustomPaper>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Shop info" hasMarginBottom>
                            { this._renderStore() }                                                        
                        </CustomPaper>
                    </Grid>                    
                </Grid>
            </GenericPage>
        )
    }
}

export default StoreLocator;

