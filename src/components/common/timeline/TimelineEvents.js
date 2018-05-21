import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import Button from '@material-ui/core/Button';

const styles = {
    eventTitle: {
        fontSize: 14, fontWeight: 500
    },
    contentStyle: {
        fontWeight: 400, fontSize: 14, background: '#f8f9fd'
    }
};

class TimelineEvents extends PureComponent {
    
    render() {
        return(
            <div className="timeline-events-ui">
                <Timeline className="timeline-events" style={{ ':first-child': { display: 'none' } }}>
                    <TimelineEvent title="John Doe sent a SMS"
                        titleStyle={ styles.eventTitle }
                        contentStyle={ styles.contentStyle }
                        createdAt="2018-09-12 10:06 PM"
                        iconColor="#8450fb"
                        icon={<i className="far fa-calendar-alt"></i>}
                    >
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged...</div>
                        <p><a href="#">Read more</a></p>
                    </TimelineEvent>
                    <TimelineEvent title="Kara Trace attended to World Conf meeting"
                        titleStyle={ styles.eventTitle }
                        contentStyle={ styles.contentStyle }
                        createdAt="2018-09-12 10:06 AM"
                        iconColor="#8450fb"
                        icon={<i className="far fa-calendar-alt"></i>}
                    >
                        <div>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
                        <p><a href="#">Read more</a></p>
                    </TimelineEvent>                
                </Timeline>
                <div className="load-more">
                    <Button variant="raised" color="primary" size="medium">
                        Load more
                    </Button>
                </div>                
            </div>
        );
    }
}

export default TimelineEvents;
