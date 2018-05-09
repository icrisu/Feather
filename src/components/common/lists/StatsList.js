import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import LinearInfoProgress from '../info/LinearInfoProgress';
import _ from 'lodash';
import uniqid from 'uniqid';

class StatsList extends PureComponent {

    state = { list: [] }
    componentDidMount() {
        this.props.retriveAction(result => {
            if (_.isArray(result.expenses)) {
                this.setState({ list: result.expenses })
            }
        })
    }

    _renderList() {
        return this.state.list.map(obj => {
            return <LinearInfoProgress key={ uniqid() } label={ obj.label } percent={ obj.percent } primaryColor={ obj.primaryColor } />
        });
    }

    render() {
        return(
            <div>
                { this._renderList() }
            </div>
        )
    }
}

StatsList.propTypes = {
    retriveAction: PropTypes.func.isRequired
};

export default StatsList;
