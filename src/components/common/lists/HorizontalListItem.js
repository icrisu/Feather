import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import classNames from 'classnames';

class HorizontalListItem extends Component {

    static defaultProps = {
        title: '', info: '', value: '', hasBorderBottom: true
    }

    _renderAvatar() {
        if (this.props.avatar) {
            return this.props.avatar;
        }
    }

    _onClick(event) {
        if (this.props.onClickCallback) {
            this.props.onClickCallback(event);
            return;
        }
        if (this.props._target) {
            window.open(this.props.link, this.props._target);
        } else if (this.props.link) {
            this.props.history.push(this.props.link);
        }
    }

    render() {
        return(
            <div onClick={ this._onClick.bind(this) } className={ classNames('horizontal-list-item', { 
                    'border-bottom': this.props.hasBorderBottom, 
                    'has-url': this.props.link
                }) }>
                <div className="pull-left">{ this._renderAvatar() }</div>
                <div className="title-ui pull-left">
                    <div className="title">{ this.props.title }</div>
                    <div className="info">{ this.props.info }</div>
                </div>
                <div className="value pull-right">{ this.props.value }</div>
                <div className="clearfix"></div>
            </div>            
        )
    }
}

HorizontalListItem.propTypes = {
    avatar: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    title: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    info: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
        PropTypes.string
    ]),
    hasBorderBottom: PropTypes.bool,
    link: PropTypes.string,
    _target: PropTypes.string,
    onClickCallback: PropTypes.func
};

export default withRouter(HorizontalListItem);
