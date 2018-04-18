import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import MenuLink from './MenuLink';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    root: {
        color: '#dbc6fe'
    } 
});

class Submenu extends PureComponent {
    state = { open: false };

    static defaultProps = {
        Icon: null,
        label: ''
    }

    handleClick() {
        this.setState({ open: !this.state.open });
    };    

    _renderSubmenuItems() {
        return React.Children.map(this.props.children, Child => {
            return React.cloneElement(Child, { isSubmenu: true })
        })
    }

    render() {
        const { classes, Icon, label } = this.props;
        return(
            <Fragment>
                <ListItem button onClick={ this.handleClick.bind(this) }>
                    { Icon ? <ListItemIcon><Icon style={{ color: '#FFF' }} /></ListItemIcon> : null }                            
                    <ListItemText classes={{ primary: classes.root }} inset primary={label} />
                    {this.state.open ? <ExpandLess style={{ color: '#FFF' }} /> : <ExpandMore style={{ color: '#FFF' }} />}
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
};

export default withStyles(styles)(Submenu);
