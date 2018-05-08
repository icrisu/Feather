import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class LinearInfoProgress extends PureComponent {
    render() {
        const percent = this.props.percent || 0;
        const primaryColor = this.props.primaryColor || '#000000';
        const secondaryColor = this.props.secondaryColor || '#e7e7e9';
        const tickness = this.props.tickness || 4;
        const label = this.props.label || '';

        const progressUIStyle = {
            height: tickness,
            background: secondaryColor,
        }
        const porgressStyle = {
            width: `${percent}%`,
            background: primaryColor,
            height: tickness
        }
        return(
            <div className="linear-info-progress">
                <div className="labels">
                    <div className="label">{label}</div>
                    <div className="label">{percent}%</div>
                </div>
                <div style={progressUIStyle} className="bar-ui">
                    <div className="bar" style={porgressStyle}></div>
                </div>
            </div>            
        )
    }
}

  
export default LinearInfoProgress;
