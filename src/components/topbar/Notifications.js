import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import PopOverHelper from '../utils/PopOverHelper';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router'
import { APP_BAR_COLORS } from '../../theme/Customize';
import { I18n } from 'react-redux-i18n';
import IconButton from 'material-ui/IconButton';
import CustomBadge from '../widgets/CustomBadge';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import _ from 'lodash';


const navItemsStyle = {
    fontSize: 16, color: APP_BAR_COLORS.navigationItems
}

class Notifications extends Component {

    constructor(props) {
        super(props);
        this.state = { open: false, redirect: null }
    }
    
    // route internal clicks from HTML
    _captureClicks(e) {        
        const href = e.target.getAttribute('href');
        const target = e.target.getAttribute('target');
        e.preventDefault();
        console.log(href, target, e.currentTarget);
        if (_.isNil(target) && !_.isNil(href)) {
            e.preventDefault();
            this.props.history.push(href);
        }
        // default click behavior
    }

    // load content dynamically as HTML
    render() {
        return(
            <PopOverHelper position="top-right" open={ this.state.open } Button={
                <IconButton style={navItemsStyle}>
                    <CustomBadge content="5" />
                    <i className="far fa-bell"></i>
                </IconButton>
            }>    
                <div className="app-bar-notifications">
                    <div className="controls">
                        <Typography className="user-name" variant="body2" gutterBottom>{I18n.t('topbar.notifications.title')}</Typography>
                    </div>
                    <div className="content pretty-scroll" onClick={ this._captureClicks.bind(this) }>

                        <div className="notification">
                            <div className="n-icon-ui"><img src={`${window.DUMMY_IMGS_FOLDER}/2.jpg`} /></div>
                            <div className="n-content">
                                <a href="/">Anna Hamilton</a> moved <a href="/">Pirate's quest</a> from <span className="task progress">Progress</span> to <span className="task done">Done</span> <span className="time-ago">• Just now</span>
                            </div>
                        </div>

                        <div className="notification">
                            <div className="n-icon-ui"><img src={`${window.DUMMY_IMGS_FOLDER}/3.jpg`} /></div>
                            <div className="n-content">
                                <a href="/">Jason Bourne</a> added a new photo to the board <a href="/">Business Ideas</a> <span className="time-ago">• 2 minutes ago</span>
                            </div>
                        </div>

                        <div className="notification">
                            <div className="n-icon-ui"><img src={`${window.DUMMY_IMGS_FOLDER}/4.jpg`} /></div>
                            <div className="n-content">
                                <a href="/">Mark Robertson</a> added <span className="task urgent">#EEBS_bug</span> to the <a href="/">ASAP board</a> <span className="time-ago">• 12 minutes ago</span>
                            </div>
                        </div>                        

                        <div className="notification">
                            <div className="n-icon-ui"><img src={`${window.DUMMY_IMGS_FOLDER}/5.jpg`} /></div>
                            <div className="n-content">
                                <a href="/">Jack Martin</a> added you on to the board <a href="/">Adventures on the high sees</a> <span className="time-ago">• 1 day ago</span>
                            </div>
                        </div>

                        <div className="notification">
                            <div className="n-icon-ui"><img src={`${window.DUMMY_IMGS_FOLDER}/6.jpg`} /></div>
                            <div className="n-content">
                                <a href="/">Jesica Fisher</a> commented on your <a href="/">Eat clean recipe</a> <span className="time-ago">• 20 minutes ago</span>
                            </div>
                        </div>                         

                        <div className="notification">
                            <div className="n-content">
                                Simple notification with an <a target="_blank" href="http://google.com">External link</a> <span className="time-ago">• 2 days ago</span>
                            </div>
                        </div>                                      
                    </div>
                    <div className="bottom-controls">                        
                        <Button component={Link} to="/" style={{ textTransform: 'initial' }} variant="raised" size="small" color="primary">
                            {I18n.t('topbar.notifications.activity')}
                        </Button>                        
                    </div>
                </div>
            </PopOverHelper>
        )
    }
}


export default withRouter(Notifications);
