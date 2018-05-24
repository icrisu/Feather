import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Message extends PureComponent {


    render() {
        const { message } = this.props;
        return(
            <div className={classNames('chat-message', { me: message.sender === 'me', other: message.sender !== 'me' })}>
                <div className="msg-body">{ message.body.text }</div>                
            </div>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message;
