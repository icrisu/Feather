import React, { Component } from 'react';
import Drawer from 'material-ui/Drawer';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Typography from 'material-ui/Typography';

const drawerWidth = 240;

const styles = theme => ({
	root: {
		flexGrow: 1,
	},	
	appFrame: {
		height: 'auto',
		zIndex: 1,
		overflow: 'hidden',
		position: 'relative',
		display: 'flex',
		width: '100%',	
	},
	drawerPaper: {
		position: 'relative',
		width: drawerWidth,
	},
	content: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.default,
		padding: theme.spacing.unit * 3,
		transition: theme.transitions.create('margin', {
		  easing: theme.transitions.easing.sharp,
		  duration: theme.transitions.duration.leavingScreen,
		}),
	},
	'content-left': {
		marginLeft: -drawerWidth,
	},
	contentShift: {
		transition: theme.transitions.create('margin', {
		  easing: theme.transitions.easing.easeOut,
		  duration: theme.transitions.duration.enteringScreen,
		}),
	},
	'contentShift-left': {
		marginLeft: 0,
	},		
});

class App extends Component {
	state = { open: true };

	_renderDummy() {
		let a = [];
		for (let index = 0; index < 200; index++) {
			a.push(<p key={index}>test</p>);
		}
		return a;
	}

	handleDrawerOpen = () => {
		this.setState({ open: true });
	};

	handleDrawerClose = () => {
		this.setState({ open: false });
	};	

	render() {
		const { classes, theme } = this.props;
		const { open } = this.state;
		return(
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<Drawer variant="persistent" anchor="left"
						open={ open }
						classes={{
							paper: classes.drawerPaper,
						}}
					>
						Hello
					</Drawer>
					<main
						className={classNames(classes.content, classes[`content-left`], {
						[classes.contentShift]: open,
						[classes[`contentShift-left`]]: open,
						})}
					>
						<a onClick={ e => this.handleDrawerOpen() }>Open</a>
						<a onClick={ e => this.handleDrawerClose() }>Close</a>
						<Typography>{'You think water moves fast? You should see ice.'}</Typography>
						{ this._renderDummy() }
					</main>									
				</div>
			</div>
		)
	}
}

App.propTypes = {
	classes: PropTypes.object.isRequired,
	theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(App);

