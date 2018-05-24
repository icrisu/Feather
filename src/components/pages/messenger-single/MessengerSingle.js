import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../../actions';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import ChatMessages from './ChatMessages';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

class MessengerSingle extends Component {

    state = { message: '' }

    componentDidMount() {
        console.log(this.props.match.params._id);
    }

    _onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    _sendMessage() {
        console.log('send message');
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.messengerSingle.title')} pageContentClasses="messenger-chat-room">
                <ChatMessages roomId={ this.props.match.params._id } />
                <div className="chat-controls">
                    <div className="controlls">
                        <input onChange={ this._onMessageChange.bind(this) } value={ this.state.message } placeholder="Type a message" className="chat-input" type="text" />
                        <div className="send">
                            <IconButton onClick={ this._sendMessage.bind(this) } disabled={ this.state.message === '' } >
                                <SendIcon />
                            </IconButton>                        
                        </div>
                    </div>
                </div>
            </GenericPage>
        )
    }
}

export default connect(null, { sendMessage })(MessengerSingle);
