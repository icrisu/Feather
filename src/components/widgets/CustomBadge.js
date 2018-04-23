import React from 'react';

export default props => {
    return(
        <div className="custom-badge" { ...props }>
            <div className="badge-content">{ props.content || '' }</div>
        </div>
    )
}