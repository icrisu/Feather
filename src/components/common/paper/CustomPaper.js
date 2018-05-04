import React from 'react';
import Typography from 'material-ui/Typography';

export default props => {
    const { children } = props;

    const renderHeader = () => {
        const { title } = props;
        const { controls } = props;

        if (title || controls) {
            return (
                <div className="paper-header">
                    <div className="left-ctrls"><Typography className="title" variant="body2" gutterBottom>{ props.title || '' }</Typography></div>
                    <div className="right-ctrls">{ controls ? controls : <noscript /> }</div>
                </div>
            )
        }
    }
    const { maxheight } = props;
    const contentStyle = maxheight ? { maxHeight: maxheight } : {}; 
    const { noContentPadding } = props;
    if (noContentPadding) {
        contentStyle.padding = 0;
    }
    return(
        <div { ...props } className="custom-paper">
            { renderHeader() }
            <div className="paper-content pretty-scroll" style={contentStyle}>{ children }</div>
        </div>
    )
}