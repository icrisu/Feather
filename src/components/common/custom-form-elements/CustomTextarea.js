import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CustomTextarea extends PureComponent {

    state = { value: '' };

    componentDidMount() {
        this.setState({ value: this.props.value || '' });
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            value: nextProps.value || ''
        }
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
                <textarea onChange={ this._onChange.bind(this) } className="textarea-field" type={ this.props.type || 'text' } placeholder={ this.props.placeholder || '' } value={ this.state.value } ></textarea>
            </div>
        )
    }
}

CustomTextarea.propTypes = {
    onChange: PropTypes.func
}

export default CustomTextarea;
