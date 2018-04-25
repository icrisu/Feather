import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { submenuOpened } from '../../../actions/ui-interact';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
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

    _renderSubmenuItems() {
        return React.Children.map(this.props.children, Child => {
            return React.cloneElement(Child, { isSubmenu: true, submenuOpended: this.state.open })
        })
    }

    render() {
        const { classes, Icon, label } = this.props;
        return(
            <Fragment>
                <ListItem disableGutters className={ classNames(classes.root, { [classes.submenuBack]: this.state.open }) } button onClick={ this.handleClick.bind(this) }>
                    <div className={ classNames({ [classes.selectedIndicator]: this.state.open }) }></div>
                    { Icon ? <ListItemIcon><Icon style={{ marginRight: 0, color: MAIN_MENU_COLORS.itemColor }} /></ListItemIcon> : null }                            
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

export default connect(mapStateToProps, { mapStateToProps, submenuOpened })(withStyles(styles)(Submenu));
