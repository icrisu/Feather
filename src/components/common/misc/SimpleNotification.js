import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Snackbar from 'material-ui/Snackbar';
import _ from 'lodash';
import PropTypes from 'prop-types';

class SimpleNotification extends PureComponent {

	constructor(props) {
		super(props);
		this.state = {
			message: '',
			open: false,
			autoHideDuration: 2000
		}
    }

    static getDerivedStateFromProps({ simpleNotification }, prevState) {
        return { ...prevState, ...simpleNotification };
    }

    _handleClose(event, reason) {
        if (reason === 'clickaway') {
            return;
        }
        this.setState({ open: false });
    };    

	render() {
		return(
			<Snackbar
	        	open={ this.state.open }
	        	message={ this.state.message }
                autoHideDuration={ 1800 }
                onClose={this._handleClose.bind(this)}
	        />			
		);
	}
}

SimpleNotification.propTypes = {
    simpleNotification: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.object
    ]),
}

const mapStateToProps = ({ simpleNotification }, ownProps) => {

    return {
        simpleNotification
    }
}

export default connect(mapStateToProps)(SimpleNotification);
