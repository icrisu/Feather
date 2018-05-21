import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import _ from 'lodash';

class GenericDialog extends PureComponent {

	static defaultProps = {
		open: false, hasClose: true, textContent: '', title: '', acceptIsDisabled: false
	}

	state = {
		open: false,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			open: nextProps.open, acceptIsDisabled: nextProps.acceptIsDisabled
		}
	}

	_handleClose = () => {
		if (_.isFunction(this.props.onReject)) {
			this.props.onReject(this.props.transportData);
		} 
	};

	_handleAccept() {
		if (_.isFunction(this.props.onAccept)) {
			this.props.onAccept(this.props.transportData);
		}
	};

	_renderSingleText() {
		if (this.props.textContent) {
			return <DialogContentText id="alert-dialog-description">{ this.props.textContent }</DialogContentText>;
		}
	}

	render() {
		return (
			<Dialog
				open={this.state.open}
				onClose={ this._handleClose }
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{ this.props.title }</DialogTitle>
				<DialogContent className="pretty-scroll dialog-content">
					{ this._renderSingleText() }
					{ this.props.children }
				</DialogContent>
				<DialogActions>
					<Button onClick={this._handleClose.bind(this)}>{ this.props.rejectText || 'Cancel' }</Button>
					<Button onClick={this._handleAccept.bind(this)} color="primary" autoFocus disabled={ this.state.acceptIsDisabled }>{ this.props.acceptText || 'Agree' }</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

GenericDialog.propTypes = {
	title: PropTypes.string,
	onAccept: PropTypes.func,
	onReject: PropTypes.func,
	hasClose: PropTypes.bool,
	open: PropTypes.bool.isRequired,
	textContent: PropTypes.string,
	acceptText: PropTypes.string,
	rejectText: PropTypes.string,
	transportData: PropTypes.any,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
	]),
	acceptIsDisabled: PropTypes.bool
}

export default GenericDialog;
