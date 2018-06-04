import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../components/common/paper/CustomPaper';

// will be using AsyncLoader
// you've also used it with pages @see PrivateRoutes
import AsyncLoader from '../../components/utils/AsyncLoader';
const FlatButtons = AsyncLoader.load({ importPath: import('./material-elements/FlatButtons') });
const OutlinedButtons = AsyncLoader.load({ importPath: import('./material-elements/OutlinedButtons') });
const RaisedButtons = AsyncLoader.load({ importPath: import('./material-elements/RaisedButtons') });
const FloatingActionButtons = AsyncLoader.load({ importPath: import('./material-elements/FloatingActionButtons') });
const FloatingActionButtonZoom = AsyncLoader.load({ importPath: import('./material-elements/FloatingActionButtonZoom') });
const ButtonsSizes = AsyncLoader.load({ importPath: import('./material-elements/ButtonsSizes') });
const IconButtons = AsyncLoader.load({ importPath: import('./material-elements/IconButtons') });
const IconLabelButtons = AsyncLoader.load({ importPath: import('./material-elements/IconLabelButtons') });


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
