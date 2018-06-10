import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { appTransitions } from './transitions';
import ReactResizeDetector from 'react-resize-detector';
import _ from 'lodash';
import MainMenu from '../components/menus/main/MainMenu';
import AppBar from '../components/topbar/AppBar';
import { DEFAULT_LANG, SMALL_SCREEN_MAIN_SIZE } from '../config/constants';
import PrivateRoutes from '../routes/PrivateRoutes';
import PublicRoutes from '../routes/PublicRoutes';
import { isPublicRoute } from '../routes/Routes';
import SimpleNotification from '../components/common/misc/SimpleNotification';

const styles = appTransitions;

class Main extends Component {

    static defaultProps = {
		language: DEFAULT_LANG,
		access_token: null,
		requestCloseMenu: null
	}

	constructor(props) {
        super(props);
        this.state = { openedMenu: true, appWidth: 0, currentLang: DEFAULT_LANG };

        this._delayedResize = _.debounce((w, h) => {   
            this.setState({ openedMenu: _.isNumber(w) && w < SMALL_SCREEN_MAIN_SIZE ? false : true, appWidth: w });
        }, 100);		
	}

	static getDerivedStateFromProps(props, state) {
		if (props.requestCloseMenu !== state.requestCloseMenu) {
			return { requestCloseMenu: props.requestCloseMenu };
		}
		return null;
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		if (this.props.language !== this.state.currentLang) {
			this.setState({ currentLang: this.props.language });
		}

		// close menu when on mobile and menu item is clicked
		let isSmallScreen = false;
		if (_.isNumber(this.state.appWidth)) {
			isSmallScreen = this.state.appWidth < SMALL_SCREEN_MAIN_SIZE;
		}
		
		const isValidCloseMenuRequest = !_.isNil(this.state.requestCloseMenu) && this.state.requestCloseMenu !== prevState.requestCloseMenu;
		if (isValidCloseMenuRequest && isSmallScreen && this.state.openedMenu) {
			this.setState({ openedMenu: false });
		}
	}

    _toggleMenu() {
        this.setState(prevState => {
            return {
                openedMenu: !prevState.openedMenu
            }
        })
    }
    _closeMenuRequest() {
        this.setState(prevState => { return {openedMenu: false} })
    }
    
    _onResize(w, h) {
        this._delayedResize(w, h);
	}

	render() {
		const currentPathName = this.props.location.pathname;
		// public routes
		if (_.isNil(this.props.access_token) || isPublicRoute(currentPathName)) {
			return <PublicRoutes />;
		}
		
		// private routes
		const { classes } = this.props;
		const { openedMenu, appWidth } = this.state;
		return(
			<Fragment>

                <MainMenu openedMenu={ openedMenu } appWidth={ appWidth } closeMenuRequest={ this._closeMenuRequest.bind(this) } />
                <AppBar openedMenu={ openedMenu } toggleMenu={ this._toggleMenu.bind(this) } />
				
				<main className={ classNames('app-page', classes.content, classes['content-left'], {
						[classes.contentShift]: openedMenu,
						[classes[`contentShift-left`]]: openedMenu
					}) }>
					<PrivateRoutes />
				</main>

                <ReactResizeDetector handleWidth handleHeight onResize={this._onResize.bind(this)} />
				<SimpleNotification />
			</Fragment>
		)
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
	language: PropTypes.string,
	access_token: PropTypes.string
};

const mapStateToProps = ({ language, access_token, requestCloseMenu }) => {
    return {
        language, access_token, requestCloseMenu
    }
}

export default withRouter(connect(mapStateToProps)(withStyles(styles, { withTheme: true })(Main)));

