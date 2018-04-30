import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import PropTypes from 'prop-types';
import { toggleMainSidebar } from '../../actions/ui-interact';
import { search } from '../../actions';
import { APP_BAR_COLORS } from '../../theme/Customize';
import { appTransitions } from '../main/transitions';
import classNames from 'classnames';
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import CustomBadge from '../widgets/CustomBadge';
import ListIcon from '@material-ui/icons/List';
import Notifications from './Notifications';
import CurrentUser from './CurrentUser';
import NotificationSidebar from '../menus/main-sidebar/NotificationSidebar';
import FlagLangSelect from '../widgets/FlagLangSelect';
import SearchWidget from '../widgets/search/SearchWidget';
import { I18n } from 'react-redux-i18n';

const styles = appTransitions;
const navItemsStyle = {
    fontSize: 16, color: APP_BAR_COLORS.navigationItems
}

class AppBar extends PureComponent {

    static defaultProps = { openedMenu: true, toggleMenu: () => {} };
    state = { openNotificationSidebar: false }

    _toggleMenu() {
        this.props.toggleMenu();
    }    

    _openNotificationSidebar() {
        this.props.toggleMainSidebar(true);
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
                    <IconButton onClick={ this._toggleMenu.bind(this) } style={{ marginLeft: 6 }}>
                        <MenuIcon style={{ color: APP_BAR_COLORS.navigationItems }} />
                    </IconButton>
                    <div className="topbar-search">
                        <SearchWidget searchAction={ this.props.search } placeholder={I18n.t('topbar.searchLabel')} />
                    </div>              
                </div>
                
                <div className="controlls-right">
                    <div className="control select-language-control">
                        <FlagLangSelect />
                    </div>                    
                    <div className="separator select-language-separator" style={{ backgroundColor: APP_BAR_COLORS.itemsSeparatorBackground }}></div>
                    <div className="control">
                        <IconButton component={ Link } to="/shopping/cart" style={navItemsStyle}>
                            <i className="fas fa-shopping-cart"></i>
                        </IconButton>
                    </div>
                    <div className="control">
                        <Notifications />
                    </div>
                    <div className="control">
                        <IconButton style={navItemsStyle} onClick={ this._openNotificationSidebar.bind(this) }>
                            <CustomBadge content="22" />
                            <ListIcon />
                        </IconButton>
                    </div>                                                            
                    <div className="separator" style={{ backgroundColor: APP_BAR_COLORS.itemsSeparatorBackground }}></div>
                    <div className="control control-large">
                        <CurrentUser />
                    </div>
                </div>
                <NotificationSidebar open={ this.state.openNotificationSidebar } />
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

export default connect(null, { toggleMainSidebar, search })(withStyles(styles, { withTheme: true })(AppBar));
