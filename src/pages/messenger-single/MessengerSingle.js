import React, { Component } from 'react';
import { connect } from 'react-redux';
import { sendMessage } from '../../actions';
import GenericPage from '../base/GenericPage';
import ChatMessages from './ChatMessages';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';

const styles = {
    img: {
        marginRight: 10, width: 40, height: 40, borderRadius: 20
    },
    title: {
        display: 'flex', alignItems: 'center'
    }
}

class MessengerSingle extends Component {

    state = { message: '' }

    constructor(props) {
        super(props);
        this.inputUI = React.createRef();
        this.state = { _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Messenger', to: '/messenger' }, { label: 'Chat room' }] }
    }    

    componentDidMount() {
        this.inputUI.current.focus();
    }

    _onMessageChange(event) {
        this.setState({ message: event.target.value })
    }

    _sendMessage() {
        this.props.sendMessage(this.state.message);
        this.setState({ message: '' })
    }

    _onKeyUp({ keyCode }) {
        if (keyCode === 13) {
            this._sendMessage();
        }
    }

    render() {
        return(
            <GenericPage
            overridePageTitle={
                <h1 className="page-title" style={ styles.title }>
                    <img style={styles.img} src="assets/dummy_data/imgs/user_2.jpg" alt="" />
                    <span>Anna Hamilton</span>
                </h1>
            }
            pageNav={ this.state._pageNavigation }
            pageContentClasses="messenger-chat-room">
                <ChatMessages roomId={ this.props.match.params._id } />
                <div className="chat-controls">
                    <div className="controlls">
                        <input onChange={ this._onMessageChange.bind(this) } value={ this.state.message } onKeyUp={ this._onKeyUp.bind(this) } ref={ this.inputUI } placeholder="Type a message" className="chat-input" type="text" />
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
