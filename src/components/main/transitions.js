import { MENU_WIDTH } from '../../config/constants';

// app main transitions
export const appTransitions = theme => {
	return {
		drawerPaper: {
			position: 'fixed',
            width: MENU_WIDTH,
            border: 'none'
		},
		content: {
			flexGrow: 1,
			backgroundColor: theme.palette.background.default,
			transition: theme.transitions.create('margin', {
			  easing: theme.transitions.easing.sharp,
			  duration: theme.transitions.duration.leavingScreen
			}),
		},
		'content-left': {
			marginLeft: 0,
		},
		contentShift: {
			transition: theme.transitions.create('margin', {
				  easing: theme.transitions.easing.easeOut,
				  duration: theme.transitions.duration.enteringScreen,
			}),
		},
		'contentShift-left': {
			marginLeft: MENU_WIDTH,
		},
		
		appBarContent: {
			flexGrow: 1,
			transition: `${theme.transitions.create('left', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			  })}, ${theme.transitions.create('width', {
				easing: theme.transitions.easing.sharp,
				duration: theme.transitions.duration.leavingScreen,
			  })}`
		},
		appBarLeft: {
			left: 0
		},
		appBarShift: {
			transition: `${theme.transitions.create('left', {
				easing: theme.transitions.easing.easeOut,
				duration: theme.transitions.duration.enteringScreen,
		  })}, ${theme.transitions.create('width', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen,
	  })}`
		},
		'app-bar-shift-left': {
			left: MENU_WIDTH
		}		
	}    
}