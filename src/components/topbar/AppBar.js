import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { appTransitions } from '../main/transitions';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const styles = appTransitions;

class AppBar extends PureComponent {

    static defaultProps = { openedMenu: true, toggleMenu: () => {} };

    _toggleMenu() {
        this.props.toggleMenu();
    }

    render() {
        const { classes } = this.props;

        return(
            <header className={ classNames('appbar', classes.appBarContent, classes.appBarLeft, {
                [classes.appBarShift]: this.props.openedMenu,
                [classes['app-bar-shift-left']]: this.props.openedMenu,
                appbarOpen: this.props.openedMenu
                }) }>
                <IconButton onClick={ this._toggleMenu.bind(this) } color="inherit" style={{ marginLeft: 6 }}>
                    <MenuIcon />
                </IconButton>
            </header>            
        );
    }
}

AppBar.propTypes = {
	classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    openedMenu: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(AppBar);
