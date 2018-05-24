import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

class CustomPaper extends PureComponent {

    _renderHeader() {
        const { title } = this.props;
        const { controls } = this.props;

        if (title || controls) {
            return (
                <div className="paper-header">
                    <div className="left-ctrls"><Typography className="title" variant="body2" gutterBottom>{ title || '' }</Typography></div>
                    <div className="right-ctrls">{ controls ? controls : <noscript /> }</div>
                </div>
            )
        }        
    }

    render() {
        const { children } = this.props;
        
        const { maxheight, removepadding, hasMarginBottom } = this.props;
        const contentStyle = maxheight ? { maxHeight: maxheight } : {}; 
        if (removepadding === 'true') {
            contentStyle.padding = 0;
        }

        let propsClone = { ...this.props };
        if (hasMarginBottom) {
            propsClone = Object.assign({ style: { marginBottom: 24 } }, ...this.props);
        }

        return(
            <div { ...propsClone } className="custom-paper">
                { this._renderHeader() }
                <div className="paper-content pretty-scroll" style={contentStyle}>{ children }</div>
            </div>            
        )
    }
}

CustomPaper.porpTypes = {
    hasMarginBottom: PropTypes.bool
}

export default CustomPaper;
