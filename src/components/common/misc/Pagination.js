import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import LeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import RightIcon from '@material-ui/icons/KeyboardArrowRight';
import _ from 'lodash';

class Pagination extends Component {

    static defaultProps = {
        currentPage: 1,
        totalPages: 1,
        disabled: false,
        onPageChange: () => {}
    }

    state = { currentPage: 1, totalPages: 1, leftDisabled: false, rightDisabled: false, disabled: false };

    static getDerivedStateFromProps(nextProps, prevState) {
        return {
            currentPage: nextProps.currentPage || 1,
            totalPages: nextProps.totalPages || 1,
            disabled: _.isNil(nextProps.disabled) ? false : nextProps.disabled,
            leftDisabled: nextProps.currentPage === 1 ? true: false,
            rightDisabled: nextProps.currentPage === nextProps.totalPages ? true: false
        }
    }

    componentDidMount() {
        this._checkAvailability();
    }
    
    _checkAvailability() {
        if (this.state.currentPage === 1) {
            this.setState({ leftDisabled: true })
        } else {
            this.setState({ leftDisabled: false })
        }
        if (this.state.currentPage === this.state.totalPages) {
            this.setState({ rightDisabled: true })
        } else {
            this.setState({ rightDisabled: false })
        }       
    }

    _leftClick() {
        if (this.state.currentPage > 1) {
            this.setState({ currentPage: this.state.currentPage - 1 }, () => {
                this._checkAvailability();
                this.props.onPageChange(this.state.currentPage);
            })
        } 
    }

    _rightClick() {
        if (this.state.currentPage < this.state.totalPages) {
            this.setState({ currentPage: this.state.currentPage + 1 }, () => {
                this._checkAvailability();
                this.props.onPageChange(this.state.currentPage);
            })
        } 
    }

    _isDisabled(side) {
        if (this.state.disabled === true) {
            return true;
        }
        if (side === 'left') {
            return this.state.leftDisabled;
        }
        if (side === 'right') {
            return this.state.rightDisabled;
        }        
    }

    render() {
        return(
            <div className="custom-pagination">
                <IconButton disabled={ this._isDisabled('left') } onClick={ this._leftClick.bind(this) } size="small">
                    <LeftIcon />
                </IconButton>
                <span style={{ margin: '0px 5px' }}>Page { this.state.currentPage } of { this.state.totalPages }</span>
                <IconButton disabled={ this._isDisabled('right') } onClick={ this._rightClick.bind(this) } size="small">
                    <RightIcon />
                </IconButton>
            </div>
        )
    }
}

Pagination.porpTypes = {
    currentPage: PropTypes.number,
    totalPages: PropTypes.number,
    onPageChange: PropTypes.func,
    disabled: PropTypes.bool
}

export default Pagination;
