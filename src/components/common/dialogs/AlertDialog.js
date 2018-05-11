import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Dialog, {
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from 'material-ui/Dialog';
import _ from 'lodash';

class AlertDialog extends PureComponent {

	static defaultProps = {
		open: false, hasClose: true, textContent: '', title: ''
	}

	state = {
		open: false,
	};

	static getDerivedStateFromProps(nextProps, prevState) {
		return {
			open: nextProps.open
		}
	}

	handleClickOpen() {
		this.setState({ open: true });
	};

	_handleClose() {
		if (_.isFunction(this.props.onReject)) {
			this.props.onReject(this.props.transportData);
		} 
	};

	_handleAccept() {
		if (_.isFunction(this.props.onAccept)) {
			this.props.onAccept(this.props.transportData);
		}
	};

	render() {
		return (
			<Dialog
				open={this.state.open}
				onClose={this._handleClose.bind(this)}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">{ this.props.title }</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">{ this.props.textContent }</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this._handleClose.bind(this)}>{ this.props.rejectText || 'Cancel' }</Button>
					<Button onClick={this._handleAccept.bind(this)} color="primary" autoFocus>{ this.props.acceptText || 'Agree' }</Button>
				</DialogActions>
			</Dialog>
		);
	}
}

AlertDialog.propTypes = {
	title: PropTypes.string,
	onAccept: PropTypes.func,
	onReject: PropTypes.func,
	hasClose: PropTypes.bool,
	open: PropTypes.bool.isRequired,
	textContent: PropTypes.string,
	acceptText: PropTypes.string,
	rejectText: PropTypes.string,
	transportData: PropTypes.any
}

export default AlertDialog;
