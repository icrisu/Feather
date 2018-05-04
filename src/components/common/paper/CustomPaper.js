import React from 'react';

export default props => {
    const { children } = props;

    const renderHeader = () => {
        const { title } = props;
        const { controls } = props;
        if (title || controls) {
            return (
                <div className="header">
                    sss
                </div>
            )
        }
    }
    return(
        <div { ...props } className="custom-paper">
            { renderHeader() }
            <div className="paper-content pretty-scroll">{ children }</div>
        </div>
    )
}