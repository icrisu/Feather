import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import IconAdd from '@material-ui/icons/Add';
import IconRemove from '@material-ui/icons/Remove';
import IconButton from '@material-ui/core/IconButton';

class CartStepper extends PureComponent {

    static defaultProps = {
        count: 1, onCountChange: () => {}
    }

    _substract() {
        if (this.props.count > 1) {
            this.props.onCountChange(this.props.count - 1)
        }
    }

    _add() {
        this.props.onCountChange(this.props.count + 1)
    }

    _countChange(event) {
        console.log(event.currentTarget.value);
        this.props.onCountChange(event.currentTarget.value);
    }

    render() {
        return(
            <div className="cart-stepper">
                <IconButton onClick={ this._substract.bind(this) } disabled={ this.props.count === 1 } ><IconRemove /></IconButton>
                <input className="input-counter" onChange={ this._countChange.bind(this) } value={ this.props.count } min="0" max="1000" type="number" />
                <IconButton onClick={ this._add.bind(this) }><IconAdd /></IconButton>
            </div>
        )
    }
}

CartStepper.defaultProps = {
    count: PropTypes.number.isRequired,
    onCountChange: PropTypes.func
}

export default CartStepper;
