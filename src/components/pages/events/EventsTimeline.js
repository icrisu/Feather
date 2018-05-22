import React, { Component } from 'react';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import CustomPaper from '../../common/paper/CustomPaper';
import Grid from '@material-ui/core/Grid';
import TimelineEvents from '../../common/timeline/TimelineEvents';
import { retriveUserEvents, retriveCommunityEvents } from '../../../actions/index';

class EventsTimeline extends Component {
    render() {
        return(
            <GenericPage title={I18n.t('pages.events.title')} pageContentClasses="events-page-content">
                <Grid container spacing={24}>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Community events">
                            <TimelineEvents retriveEvents={ retriveCommunityEvents } />
                        </CustomPaper>                    
                    </Grid>
                    <Grid item xs={12} sm={12} md={6}>
                        <CustomPaper title="Kara's events">
                            <TimelineEvents retriveEvents={ retriveUserEvents } />
                        </CustomPaper>                    
                    </Grid>                    
                </Grid>
            </GenericPage>
        )
    }
}

export default EventsTimeline;
