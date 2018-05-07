import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CircularProgress } from 'material-ui/Progress';
import { WIDGET_LOADER_COLOR } from '../../theme/Customize';
import Typography from 'material-ui/Typography';
import HorizontalListItem from './lists/HorizontalListItem';
import { getBestSelling } from '../../actions';
import _ from 'lodash';
import uniqid from 'uniqid';

import Avatar from 'material-ui/Avatar';

const avatarStyle = {
    bigAvatar: {
        width: 60,
        height: 60
    }
}

class BestSellingWidget extends Component {
    state = {
        isLoading: false,
        items: []
    }

    componentDidMount() {
        this.props.getBestSelling(result => {
            if (_.isArray(result.items)) {
                this.setState({ items: result.items })
            }
        })
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

    _renderItems() {
        return this.state.items.map(obj => {
            return(
                <HorizontalListItem onClick={ e => this._listItemClick({ link: obj.link, target: obj.target }) } key={ uniqid() } 
                    title={ obj.title } value={obj.value} info={ obj.info } 
                    avatar={ <Avatar className="avatar" src={ obj.thumb } /> } 
                    link={ obj.link } _target={ obj._target }
                />                 
            )
        })

    }

    render() {       
        return(
            <div>
                { this._renderPreloader() }
                { this._renderItems() }                   
            </div>
        )
    }
}

export default connect(null, { getBestSelling })(BestSellingWidget);
