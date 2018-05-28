import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submenuOpened } from '../../../actions/ui-interact';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import classNames from 'classnames';
import { MAIN_MENU_COLORS } from '../../../theme/Customize';
import uniqid from 'uniqid';
import _ from 'lodash';

const styles = theme => ({
    root: {
        paddingLeft: 18, paddingRight: 18
    },
    itemText: {
        color: MAIN_MENU_COLORS.itemColor,
    },    
    submenuBack: {
        backgroundColor: MAIN_MENU_COLORS.submenuBackground,
        '&:hover': {
            backgroundColor: MAIN_MENU_COLORS.submenuBackground,
        }        
    },
    selectedIndicator: {
        position: 'absolute', left: 0, top: 0, width: 2, backgroundColor: MAIN_MENU_COLORS.itemColor, height: '100%'
    }  
});

class Submenu extends Component {
    state = { open: false, id: uniqid()};

    static defaultProps = {
        Icon: null,
        label: '',
        submenu: null
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (!_.isNil(nextProps.submenu) && nextProps.submenu !== prevState.id && prevState.open === true) {
            return { open: false };
        }
        return null;
    }

    handleClick() {
        this.setState({ open: !this.state.open });
        this.props.submenuOpened(this.state.id);
    }; 

    componentDidUpdate(prevProps, prevState) {
        const isSamePath = this.props.location.pathname === prevProps.location.pathname;
        // open submenu
        if (!this.state.open && !isSamePath && this._hasChildWithPath()) {
            this.setState({ open: true });
            this.props.submenuOpened(this.state.id);
        }
    } 

    _hasChildWithPath() {
        let has = false;
        if (_.isArray(this.props.children)) {
            for (let i = 0; i < this.props.children.length; i++) {
                if (this.props.children[i].props.to === this.props.location.pathname) {
                    has = true;
                }
                break;
            }
        }
        return has;
    }
    
    _openSubmenu() {
        if (this.state.open === false) {
            this.setState({ open: true });
            this.props.submenuOpened(this.state.id);
        }
    }

    _renderSubmenuItems() {
        return React.Children.map(this.props.children, Child => {
            return React.cloneElement(Child, { isSubmenu: true, submenuOpended: this.state.open })
        })
    }

    _renderIcon(Icon) {
        return React.cloneElement(Icon, {
            style: { marginRight: 0, color: MAIN_MENU_COLORS.itemColor }
        })
    }    

    render() {
        const { classes, Icon, label } = this.props;
        return(
            <Fragment>
                <ListItem disableGutters className={ classNames(classes.root, { [classes.submenuBack]: this.state.open }) } button onClick={ this.handleClick.bind(this) }>
                    <div className={ classNames({ [classes.selectedIndicator]: this.state.open }) }></div>
                    { Icon ? <ListItemIcon>{ this._renderIcon(Icon) }</ListItemIcon> : null }                            
                    <ListItemText classes={{ primary: classes.itemText }} inset primary={label} />
                    {this.state.open ? <ExpandLess style={{ color: MAIN_MENU_COLORS.itemColor }} /> : <ExpandMore style={{ color: MAIN_MENU_COLORS.itemColor }} />}
                </ListItem>
                <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        { this._renderSubmenuItems() }
                    </List>
                </Collapse>                
            </Fragment>
        )
 
    }
}

Submenu.propTypes = {
    classes: PropTypes.object.isRequired,
    Icon: PropTypes.any,
    label: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    submenu: PropTypes.any
};

const mapStateToProps = ({submenu}) => {
    return { submenu }
}

export default withRouter(connect(mapStateToProps, { mapStateToProps, submenuOpened })(withStyles(styles)(Submenu)));
