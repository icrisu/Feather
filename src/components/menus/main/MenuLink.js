import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submenuOpened } from '../../../actions/ui-interact';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { MAIN_MENU_COLORS } from '../../../config/colors';
import safe from 'undefsafe';
import _ from 'lodash';

const styles = theme => ({
    root: {
        paddingLeft: 18, paddingRight: 18
    },
    itemText: {
        color: MAIN_MENU_COLORS.itemColor,
    },
    selectedMenuItem: {
        color: MAIN_MENU_COLORS.itemSelectedColor
    },  
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },    
    submenuBack: {
        backgroundColor: MAIN_MENU_COLORS.submenuBackground,
        '&:hover': {
            backgroundColor: MAIN_MENU_COLORS.submenuBackground,
        }          
    },
    selectedIndicator: {
        position: 'absolute', left: 0, top: 0, width: 2, backgroundColor: MAIN_MENU_COLORS.itemSelectedColor, height: '100%'
    }      
});

class MenuLink extends Component {
    
    state = { selectedItem: false };
    
    static defaultProps = {
        to: '',
        href: '',
        target: '_blank',
        Icon: null,
        label: '',
        isSubmenu: false,
        submenuOpended: false
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!_.isNil(safe(nextProps, 'location.pathname')) && nextProps.to !== '' && nextProps.to === nextProps.location.pathname) {
            return { selectedItem: true };
        }  else {
            return { selectedItem: false };
        }
    }   
    
    _listItemClick(event) {
        if (this.props.isSubmenu === false) {
            this.props.submenuOpened('_')
        }
    }

    _renderIconSpace() {
        const { Icon } = this.props;
        return(
            <Fragment>
                { Icon ? null : <div style={{ width: 24, marginRight: 0 }}></div> }
            </Fragment>
        )        
    }

    _renderSelector() {
        const { classes, Icon } = this.props;
        if (this.props.isSubmenu === false && this.state.selectedItem === true) {
            return(
                <Fragment>
                    <span className={ classes.selectedIndicator }></span>
                    { Icon ? null : <div style={{ width: 24, marginRight: 0 }}></div> }
                </Fragment>
            )
        } else {
            return this._renderIconSpace();
        }
    }    

    _renderWithLink() {
        const { classes, Icon, to, label, isSubmenu, submenuOpended } = this.props;
        return(
            <ListItem disableGutters onClick={this._listItemClick.bind(this)} className={ classNames(classes.root, { [classes.nested]: isSubmenu, [classes.submenuBack]: (isSubmenu && submenuOpended) || this.state.selectedItem === true }) } button component={Link} to={to}>
                { this._renderSelector() }
                { Icon ? <ListItemIcon><Icon style={{ marginRight: 0, color: this.state.selectedItem ? MAIN_MENU_COLORS.itemSelectedColor : MAIN_MENU_COLORS.itemColor }} /></ListItemIcon> : null }                            
                <ListItemText classes={{ primary: this.state.selectedItem ? classes.selectedMenuItem : classes.itemText }} inset primary={label} />
            </ListItem>            
        )
    }

    _onClick(href, target) {
        window.open(href, target);
    }

    _renderWithHref() {
        const { classes, Icon, href, target, label, isSubmenu, submenuOpended } = this.props;
        return(
            <ListItem className={ classNames(classes.root, { [classes.nested]: isSubmenu, [classes.submenuBack]: isSubmenu && submenuOpended }) } button onClick={ e => this._onClick(href, target) }>
                { Icon ? <ListItemIcon><Icon style={{ color: MAIN_MENU_COLORS.itemColor }} /></ListItemIcon> : this._renderIconSpace() }                            
                <ListItemText classes={{ primary: this.state.selectedItem ? classes.selectedMenuItem : classes.itemText }} inset primary={label} />
            </ListItem>            
        )
    }    


    render() {
        const { to } = this.props;
        if (to !== '') {
            return this._renderWithLink();
        } else {
            return this._renderWithHref();
        }
    }
}

MenuLink.propTypes = {
    classes: PropTypes.object.isRequired,
    Icon: PropTypes.any,
    to: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    label: PropTypes.string,
    isSubmenu: PropTypes.bool,
    submenuOpended: PropTypes.bool
};

export default withRouter(connect(null, { submenuOpened })(withStyles(styles)(MenuLink)));
