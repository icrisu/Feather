import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import {Timeline, TimelineEvent} from 'react-event-timeline';
import Button from '@material-ui/core/Button';
import uniqid from 'uniqid';
import _ from 'lodash';

const styles = {
    eventTitle: {
        fontSize: 14, fontWeight: 500
    },
    contentStyle: {
        fontWeight: 400, fontSize: 14, background: '#f8f9fd'
    },
    bubbleStyle: { background: '#FFF' }
};

class TimelineEvents extends PureComponent {

    static defaultProps = {
        loadMoreLabel: 'Load more'
    }
    
    constructor(props) {
        super(props);
        this.state = { 
            events: [],
            defaultColor: '#8450fb',
            defaultIcon: '<i class="far fa-calendar-alt"></i>',
            currentPage: 1,
            hasMore: true,
            isLoading: false
        };
    }

    componentDidMount() {
        this._loadEvents();
    }

    _loadMore() {
        if (this.state.hasMore === true) {
            this.setState({ currentPage: this.state.currentPage + 1 }, () => {
                this._loadEvents();
            })
        }
    }

    _loadEvents() {
        this.setState({ isLoading: true }, () => {
            this.props.retriveEvents(this.state.currentPage, this.props.resourceId)
            .then(result => {
                this.setState({ hasMore: result.hasMore, events: [ ...this.state.events, ...result.events ], isLoading: false });
            })
        })
    }

    // route internal clicks from HTML
    _captureClicks(e) {        
        const href = e.target.getAttribute('href');
        const target = e.target.getAttribute('target');
        if (_.isNil(target) && !_.isNil(href)) {
            e.preventDefault();
            this.props.history.push(href);
        }
        // default click behavior
    }    

    _renderEvents() {
        return this.state.events.map(event => {
            return(
                    <TimelineEvent title={ event.title || '' } key={ uniqid() }
                        titleStyle={ styles.eventTitle }
                        contentStyle={ styles.contentStyle }
                        bubbleStyle={ styles.bubbleStyle }
                        createdAt={ event.createdAt }
                        iconColor={ event.iconColor || this.state.defaultColor }
                        icon={ <span dangerouslySetInnerHTML={{ __html: event.icon ? event.icon : this.state.defaultIcon }}></span> }
                    >
                        <div onClick={ this._captureClicks.bind(this) } dangerouslySetInnerHTML={{ __html: event.html }} />
                    </TimelineEvent>                
            )
        })
    }

    render() {
        return(
            <div className="timeline-events-ui">
                <Timeline className="timeline-events">
                    { this._renderEvents() }
                </Timeline>
                <div className="load-more" style={{ display: this.state.hasMore ? 'flex' : 'none' }}>
                    <Button disabled={ this.state.isLoading } onClick={ this._loadMore.bind(this) } variant="raised" color="primary" size="medium">
                        { this.props.loadMoreLabel }
                    </Button>
                </div>                
            </div>
        );
    }
}

TimelineEvents.propTypes = {
    retriveEvents: PropTypes.func.isRequired,
    resourceId: PropTypes.number,
    loadMoreLabel: PropTypes.string
}

export default withRouter(TimelineEvents);
