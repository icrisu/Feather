import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';
import Loadable from 'react-loadable';
import PageLoader from '../../components/utils/PageLoader';

// will be using async loading
// you've also used it with pages @see PrivateRoutes

const FlatButtons = Loadable({ loader: () => import('./material-elements/FlatButtons'), loading: PageLoader });
const OutlinedButtons = Loadable({ loader: () => import('./material-elements/OutlinedButtons'), loading: PageLoader });
const RaisedButtons = Loadable({ loader: () => import('./material-elements/RaisedButtons'), loading: PageLoader });
const FloatingActionButtons = Loadable({ loader: () => import('./material-elements/FloatingActionButtons'), loading: PageLoader });
const FloatingActionButtonZoom = Loadable({ loader: () => import('./material-elements/FloatingActionButtonZoom'), loading: PageLoader });
const ButtonsSizes = Loadable({ loader: () => import('./material-elements/ButtonsSizes'), loading: PageLoader });
const IconButtons = Loadable({ loader: () => import('./material-elements/IconButtons'), loading: PageLoader });
const IconLabelButtons = Loadable({ loader: () => import('./material-elements/IconLabelButtons'), loading: PageLoader });

class ButtonsDemos extends Component {

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'UI Buttons' }]
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.buttonsSample.title')} pageContentClasses="elements-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>             
                    <Grid item xs={12} sm={12} md={12}> 
                        <CustomPaper title="Flat buttons" hasMarginBottom>
                            <FlatButtons />
                        </CustomPaper>

                        <CustomPaper title="Outlined buttons" hasMarginBottom>
                            <OutlinedButtons />
                        </CustomPaper>

                        <CustomPaper title="Raised buttons" hasMarginBottom>
                            <RaisedButtons />
                        </CustomPaper>

                        <CustomPaper title="Floating action buttons" hasMarginBottom>
                            <FloatingActionButtons />
                        </CustomPaper>

                        <CustomPaper title="Buttons sizes" hasMarginBottom>
                            <ButtonsSizes />
                        </CustomPaper>

                        <CustomPaper title="Icon buttons" hasMarginBottom>
                            <IconButtons />
                        </CustomPaper>

                        <CustomPaper title="Buttons with icons and label" hasMarginBottom>
                            <IconLabelButtons />
                        </CustomPaper>                        

                        <CustomPaper title="Floating action button zoom" hasMarginBottom>
                            <FloatingActionButtonZoom />
                        </CustomPaper>

                    </Grid>
                </Grid>
            </GenericPage>
        )
    }    
}

export default ButtonsDemos;
