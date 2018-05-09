import React from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { WIDGET_LOADER_COLOR, PAGE_LOADER_COLOR } from '../../../theme/Customize';

export default props => {
    const loaderColor = props.pageloader ? PAGE_LOADER_COLOR : WIDGET_LOADER_COLOR;
    if (props.showloader) {
        return(
            <div style={{ width: 40,  margin: 'auto', marginTop: 30 }}>
                <CircularProgress style={{ color: loaderColor }} />
            </div>
        )        
    } else {
        return <noscript />
    }
}