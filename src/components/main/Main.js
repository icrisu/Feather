import React, { Component, Fragment } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { appTransitions } from './transitions';
import ReactResizeDetector from 'react-resize-detector';
import _ from 'lodash';
import MainMenu from '../menus/MainMenu';
import AppBar from '../topbar/AppBar';

const styles = appTransitions;

class Main extends Component {
    
	constructor(props) {
        super(props);
        this.state = { openedMenu: true, appWidth: 0 };

        this._delayedResize = _.debounce((w, h) => {   
            this.setState({ openedMenu: _.isNumber(w) && w < 750 ? false: true, appWidth: w });
        }, 400);		
    }

	_renderDummy() {
		let a = [];
		for (let index = 0; index < 200; index++) {
			a.push(<p key={index}>test { index }</p>);
		}
		return a;
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
		const { classes } = this.props;
		const { openedMenu, appWidth } = this.state;
		return(
			<Fragment>

                <MainMenu openedMenu={ openedMenu } appWidth={ appWidth } closeMenuRequest={ this._closeMenuRequest.bind(this) } />
                <AppBar openedMenu={ openedMenu } toggleMenu={ this._toggleMenu.bind(this) } />
				
				<main className={ classNames('page', classes.content, classes['content-left'], {
					[classes.contentShift]: openedMenu,
					[classes[`contentShift-left`]]: openedMenu
				}) }>
						<a onClick={ e => this._toggleMenu() }>Open</a>		
					{ this._renderDummy() }
				</main>
                <ReactResizeDetector handleWidth handleHeight onResize={this._onResize.bind(this)} />
			</Fragment>
		)
	}
}

Main.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Main);

