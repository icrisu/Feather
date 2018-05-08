import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import CloudDone from '@material-ui/icons/CloudDone';

class ActivityInfoCard extends PureComponent {
    
    static defaultProps = {
        color: '#e16e9f', about: '', value: ''
    }

    render() {
        const { color, about, value } = this.props;
        return(
            <div className="activity-info-card">
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
    value: PropTypes.string
}

export default ActivityInfoCard;
