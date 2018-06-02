import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRoomMessages } from '../../actions';
import Message from './Message';

const styles = {
    chatBody: { background: 'url("assets/img/seigaiha.png")' }
}

class ChatMessages extends Component {

    static defaultProps = {
        chatMessages: []
    }

    constructor(props) {
        super(props);
        this.chatBodyUI = React.createRef();
    }

    componentDidMount() {
        this.props.getRoomMessages(this.props.roomId);
    }

    componentDidUpdate() {
        this.chatBodyUI.current.scrollTo(0, this.chatBodyUI.current.scrollHeight)
    }

    _renderMessages() {
        return this.props.chatMessages.map(message => {
            return <Message message={message} key={ message._id } />
        })
    }

    render() {
        return(
            <div style={ styles.chatBody } ref={ this.chatBodyUI } className="chat-body clearfix">
                { this._renderMessages() }
            </div>
        )
    }
}

const mapStateToProps = ({ chatMessages }) => {
    return { chatMessages };
}

ChatMessages.defaultProps = {
    chatMessages: PropTypes.array,
    roomId: PropTypes.string.isRequired
}

export default connect(mapStateToProps, { getRoomMessages })(ChatMessages);
