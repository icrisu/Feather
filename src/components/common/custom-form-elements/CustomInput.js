import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

class CustomInput extends Component {

    state = { value: '' };

    componentDidMount() {
        this.setState({ value: this.props.value || '' });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (_.isString(nextProps.value)) {
            return {
                value: nextProps.value || ''
            }
        }
        return null;
    }

    _onChange(e) {
        this.setState({ value: e.currentTarget.value }, () => {
            if (this.props.onChange) {
                this.props.onChange(this.state.value);
            }
        });
    }

    render() {
        return(
            <div { ...this.props } className="custom-input">
                <label>{ this.props.label || '' }</label>
                <input onChange={ this._onChange.bind(this) } className="input-field" type={ this.props.type || 'text' } placeholder={ this.props.placeholder || '' } value={ this.state.value } />
            </div>
        )
    }
}

CustomInput.propTypes = {
    onChange: PropTypes.func,
    value: PropTypes.oneOfType([
        PropTypes.string, PropTypes.object
    ])
}

export default CustomInput;
