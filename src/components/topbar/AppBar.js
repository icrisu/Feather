import React, { PureComponent } from 'react';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { appTransitions } from '../main/transitions';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { APP_BAR_COLORS } from '../../config/colors';
import CustomBadge from '../widgets/CustomBadge';
import ListIcon from '@material-ui/icons/List';
import SearchIcon from '@material-ui/icons/Search';

import CurrentUser from './CurrentUser';

const styles = appTransitions;
const navItemsStyle = {
    fontSize: 16, color: APP_BAR_COLORS.navigationItems
}

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
                <div className="controlls-left">
                    <IconButton onClick={ this._toggleMenu.bind(this) } color="inherit" style={{ marginLeft: 6 }}>
                        <MenuIcon style={{ color: APP_BAR_COLORS.navigationItems }} />
                    </IconButton>                
                </div>
                
                <div className="controlls-right">
                    <div className="control">
                        <IconButton style={navItemsStyle}>
                            <SearchIcon />
                        </IconButton>
                    </div>
                    <div className="separator" style={{ backgroundColor: APP_BAR_COLORS.itemsSeparatorBackground }}></div>
                    <div className="control">
                        <IconButton style={navItemsStyle}>
                            <i className="far fa-envelope"></i>
                        </IconButton>
                    </div>
                    <div className="control">
                        <IconButton style={navItemsStyle}>
                            <CustomBadge content="5" />
                            <i className="far fa-bell"></i>
                        </IconButton>
                    </div>
                    <div className="control">
                        <IconButton style={navItemsStyle}>
                            <CustomBadge content="22" />
                            <ListIcon />
                        </IconButton>
                    </div>                                                            
                    <div className="separator" style={{ backgroundColor: APP_BAR_COLORS.itemsSeparatorBackground }}></div>
                    <div className="control control-large">
                        <CurrentUser />
                    </div>                    
                </div>
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
