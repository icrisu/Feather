import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import DoneAllIcon from '@material-ui/icons/DoneAll';

class Message extends PureComponent {

    state = { isMe: false };

    componentDidMount() {
        this.setState({ isMe: this.props.message.sender.isMe === true});
    }

    _renderThumb(message) {
        if (!this.state.isMe) {
            return <div className="user-thumb left"><img src={ message.sender.thumb } alt="" /></div>
        } else {
            return <div className="user-thumb right"><img src={ message.sender.thumb } alt="" /></div>
        }
    }

    render() {
        const { message } = this.props;
        return(
            <Fragment>
                <div className={classNames('chat-message', { me: this.state.isMe, other: this.state.isMe === false })}>
                    { this._renderThumb(message) }
                    <div className="msg-body">{ message.body.text }</div> 
                    <div className="clearfix"></div>
                    <div className="time"><DoneAllIcon style={{ fontSize: 16, marginRight: 4 }} />{ message.time }</div>               
                </div>
                <div className="clearfix"></div>
            </Fragment>
        )
    }
}

Message.propTypes = {
    message: PropTypes.object.isRequired
}

export default Message;
