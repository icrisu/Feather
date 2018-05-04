import React, { Component } from 'react';
import { CircularProgress } from 'material-ui/Progress';
import { WIDGET_LOADER_COLOR } from '../../theme/Customize';
import Typography from 'material-ui/Typography';
import HorizontalListItem from './lists/HorizontalListItem';

import Avatar from 'material-ui/Avatar';

const avatarStyle = {
    bigAvatar: {
        width: 60,
        height: 60
    }
}

class BestSalingWidget extends Component {
    state = {
        isLoading: false
    }
    _renderPreloader() {
        if (this.state.isLoading) {
            return(
                <div style={{ width: 40,  margin: 'auto', marginTop: 30 }}>
                    <CircularProgress style={{ color: WIDGET_LOADER_COLOR }} />
                </div>                
            )            
        }
    }

    render() {
        return(
            <div>
                { this._renderPreloader() }
                
                <HorizontalListItem 
                    title="Crere watch" value="May 15 2018" info="$1.525,00" 
                    avatar={ <Avatar className="avatar" src="/assets/dummy_data/imgs/products/1_small.jpg" /> } 
                    link="/"
                />
                <HorizontalListItem 
                    title="Crere watch" value="May 15 2018" info="$1.525,00" 
                    avatar={ <Avatar className="avatar" src="/assets/dummy_data/imgs/products/1_small.jpg" /> } 
                    link="http://google.com" _target="_self"
                /> 
                <HorizontalListItem 
                    title="Crere watch" value="May 15 2018" info="$1.525,00" 
                    avatar={ <Avatar className="avatar" src="/assets/dummy_data/imgs/products/1_small.jpg" /> } 
                    link="http://google.com" _target="_self"
                    hasBorderBottom={ false }
                />                                
            </div>
        )
    }
}

export default BestSalingWidget;
