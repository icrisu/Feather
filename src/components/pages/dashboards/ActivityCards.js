import React from 'react';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import ActivityInfoCard from '../../common/info/ActivityInfoCard';

import CloudDone from '@material-ui/icons/CloudDone';
import CartIcon from '@material-ui/icons/ShoppingCart';
import WorkIcon from '@material-ui/icons/Work';
import EventIcon from '@material-ui/icons/Event';

const iconsStyle = { color: '#7f87a9' };
const green = '#46b39d';
const red = '#e16e9f';

export default props => {
    return(
        <Grid container spacing={24}>
            <Grid item xs={6} sm={6} md={6}>
                <CustomPaper removepadding="true">
                    <ActivityInfoCard link="/" color={ green } value="22"
                    icon={ <CloudDone className="icon" style={ iconsStyle } /> }
                    about="New files have been added to the cloud from external sources" />
                </CustomPaper>                                 
            </Grid>
            <Grid item xs={6} sm={6} md={6}>
                <CustomPaper removepadding="true">
                    <ActivityInfoCard link="/" color={ green } value="6"
                    icon={ <CartIcon className="icon" style={ iconsStyle } /> }
                    about="You have 6 items in your cart. Buy now and get 10% a discount" />
                </CustomPaper>                                   
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
                <CustomPaper removepadding="true">
                    <ActivityInfoCard link="/" color={ red } value="18"
                    icon={ <WorkIcon className="icon" style={ iconsStyle } /> }
                    about="Tasks have been moved from 'Done' pipeline to 'R&D' pipeline" />
                </CustomPaper>                                   
            </Grid>

            <Grid item xs={6} sm={6} md={6}>
                <CustomPaper removepadding="true" color="#e16e9f">
                    <ActivityInfoCard link="/" color={ green } value="11"
                    icon={ <EventIcon className="icon" style={ iconsStyle } /> }
                    about="There are 11 events that require your attention. Action is required" />
                </CustomPaper>                                   
            </Grid>                                    
        </Grid>           
    )
}