import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CustomInput extends PureComponent {

    state = { value: '' };

    componentDidMount() {
        this.setState({ value: this.props.value || '' });
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
    onChange: PropTypes.func
}

export default CustomInput;
