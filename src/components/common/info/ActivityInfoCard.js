import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';

class ActivityInfoCard extends PureComponent {
    
    static defaultProps = {
        color: '#e16e9f', about: '', value: ''
    }

    _onClick(event) {
        if (this.props.onClickCallback) {
            this.props.onClickCallback(event);
            return;
        }
        if (this.props.link) {
            this.props.history.push(this.props.link);
        }
    }

    render() {
        const { color, about, value } = this.props;
        return(
            <div onClick={ this._onClick.bind(this) } className="activity-info-card">
                { this.props.icon  }
                <p className="info">{about}</p>
                <div style={{ color: color }} className="value-info">{ value }</div>
            </div>
        )
    }
}

ActivityInfoCard.propTypes = {
    about: PropTypes.string,
    color: PropTypes.string,
    icon: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    value: PropTypes.string,
    link: PropTypes.string,
    onClickCallback: PropTypes.func
}

export default withRouter(ActivityInfoCard);
