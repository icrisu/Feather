import React, { Component } from 'react';
import { connect } from 'react-redux';
import { chatSearch, getChatRooms } from '../../../actions';
import PropTypes from 'prop-types';
import GenericPage from '../base/GenericPage';
import SearchWidget from '../../common/search/SearchWidget';
import Grid from '@material-ui/core/Grid';
import CustomPaper from '../../common/paper/CustomPaper';
import { I18n } from 'react-redux-i18n';
import _ from 'lodash';
import safe from 'undefsafe';
import uniqid from 'uniqid';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import classNames from 'classnames';
import { Redirect } from 'react-router-dom';
import { ROUTES } from '../../../routes/Routes';

class Messenger extends Component {

    static defaultProps = {
        chatRooms: {}
    }

    _pageNavigation = [{ label: 'Dashboard', to: '/' }, { label: 'Messenger' }];

    state = { selectedRoom: null };

    componentDidMount() {
        this.props.getChatRooms();
    }

    _onClick(selectedRoom) {
        this.setState({ selectedRoom })
    }

    _renderUnRead(room) {
        if (_.isNumber(room.unread)) {
            return <span className="notification">{ room.unread }</span>;
        }
    }

    _redirect() {
        if (!_.isNil(this.state.selectedRoom)) {
            return <Redirect to={`${ROUTES.messenger.path}/${this.state.selectedRoom._id}`} />
        }
    }

    _renderRoomItem(room) {
        return(
            <div onClick={ e => this._onClick(room) } className="chat-room-list-item" key={ uniqid() }>
                <div>
                    <div className="avatar pull-left"><img src={ room.avatar } alt="" /></div>
                    <div className="info pull-left">
                        <div className="title">{ room.title }</div>
                        <div className="excerpt"><span className={ classNames({ seen: room.seen }) }><DoneAllIcon style={{ fontSize: 20 }} /></span><span>{ room.excerpt }</span></div>                        
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div>
                    <div className="time">{ room.date }</div>
                    <div className="indicators">
                        { this._renderUnRead(room) }
                        <span className="arrow"><KeyboardArrowRight /></span>
                    </div>
                </div>                
            </div>
        )
    }

    _renderChatRooms() {
        if (_.isArray(safe(this.props, 'chatRooms.rooms'))) {
            return this.props.chatRooms.rooms.map(room => {
                return this._renderRoomItem(room);
            })
        }
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.messenger.title')} pageContentClasses="messenger-chat-rooms-content" pageNav={ this._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex' }}>
                            <SearchWidget className="search" searchAction={ this.props.chatSearch } placeholder="Search or start new chat" />
                        </div>
                    </Grid> 
                    <Grid item xs={12} sm={12} md={12}>
                        <CustomPaper title="Latest conversations" removepadding="true">
                            { this._renderChatRooms() }
                        </CustomPaper>
                    </Grid>
                </Grid> 
                { this._redirect() }
            </GenericPage>            
        )
    }
}

const mapStateToProps = ({ chatRooms }) => {
    return { chatRooms };
}

Messenger.defaultProps = {
    chatSearch: PropTypes.func,
    getChatRooms: PropTypes.func,
    chatRooms: PropTypes.object
}

export default connect(mapStateToProps, { chatSearch, getChatRooms })(Messenger);
