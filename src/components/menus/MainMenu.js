import React, { PureComponent } from 'react';
import Drawer from 'material-ui/Drawer';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { MENU_WIDTH } from '../../config/constants';
import _ from 'lodash';

const styles = theme => ({
    drawerPaper: {
        position: 'fixed',
        width: MENU_WIDTH,
        border: 'none'
    },    
})

class MainMenu extends PureComponent {

    state = {
        drawerType: 'persistent'
    }

    static defaultProps = {
        openedMenu: true, appWidth: 0, closeMenuRequest: () => {}
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(nextProps.appWidth)
        return { drawerType: nextProps.appWidth < 750 && nextProps.appWidth !==0 ? 'temporary' : 'persistent' };
    }

    // on menu close request (handle on mobile)
    _onCloseRequest() {
        this.props.closeMenuRequest();
    }

    render() {
        const { classes } = this.props;

        return(
            <Drawer variant={ this.state.drawerType } anchor="left" onClose={ this._onCloseRequest.bind(this) }
                open={ this.props.openedMenu }
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className="main-menu-container">
                    <div className="main-logo-ui"><img src={process.env.PUBLIC_URL + '/assets/img/main-logo.png'} alt="" /></div>
                </div>
            </Drawer>
        )
    }
}

MainMenu.propTypes = {
	classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
    openedMenu: PropTypes.bool,
    appWidth: PropTypes.number,
    closeMenuRequest: PropTypes.func.isRequired
};

export default withStyles(styles, { withTheme: true })(MainMenu);