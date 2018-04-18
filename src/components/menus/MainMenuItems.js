import React, { PureComponent } from 'react';
// import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import PropTypes from 'prop-types';
import Collapse from 'material-ui/transitions/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { withStyles } from 'material-ui/styles';
import classNames from 'classnames';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';

import { Link } from 'react-router-dom';

import MenuLink from './MenuLink';


const styles = theme => ({
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
    cssRoot: {
        color: '#FFFFFF',
        backgroundColor: '#FFF',
        '&:hover': {
            backgroundColor: '#FFF',
        },
    },
    button: {
        color: '#FFFFFF',
    },
    root: {
        color: '#FFFFFF',
    },
    container: {
        color: '#FFFFFF',
    }
  });

class MainMenuItems extends PureComponent {
    state = { open: false }

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return(
            <nav className="main-navigation-ui">
                <List component="nav">
                    <MenuLink Icon={ InboxIcon } to="/main" label="Hello menu" />
                    <MenuLink href="http://google.com" target="_self" label="Second menu" />

                     <ListItem button>
                         <ListItemText inset primary="Sent mail" />
                     </ListItem>                      
                </List>
            </nav>
        )
    }

    // render() {
    //     const { classes } = this.props;

    //     return(
    //         <nav id="menu-items" className="main-navigation-ui">
    //             <List
    //             component="nav"
    //             >
    //                 <ListItem button className={classNames(classes.button, classes.root, classes.container)} component={Link} to="/open-collective">
    //                     <ListItemIcon>
    //                         <InboxIcon />
    //                     </ListItemIcon>
    //                     <ListItemText inset primary="Sent mail" />
    //                 </ListItem>
    //                 <ListItem button onClick={this.handleClick.bind(this)}>
    //                     <ListItemIcon>
    //                         <InboxIcon />
    //                     </ListItemIcon>
    //                     <ListItemText inset primary="Sent mail" />
    //                     {this.state.open ? <ExpandLess /> : <ExpandMore />}
    //                 </ListItem>                  
                    
    //                 <Collapse in={this.state.open} timeout="auto" unmountOnExit>
    //                     <List component="div" disablePadding>
    //                         <ListItem button className={classNames(classes.nested, classes.cssRoot)}>
    //                             <ListItemIcon>
    //                                 <InboxIcon />
    //                             </ListItemIcon>
    //                             <ListItemText inset primary="Starred" />
    //                         </ListItem>
    //                         <ListItem button className={classNames(classes.nested, classes.cssRoot)}>
    //                             <ListItemIcon>
    //                                 <InboxIcon />
    //                             </ListItemIcon>
    //                             <ListItemText inset primary="Starred 2" />
    //                         </ListItem>                            
    //                     </List>
    //                 </Collapse>

    //                 <ListItem button>
    //                     <ListItemIcon>
    //                         <InboxIcon />
    //                     </ListItemIcon>
    //                     <ListItemText inset primary="Sent mail" />
    //                 </ListItem>                      

    //             </List>
    //         </nav>            
    //     )
    // }
}

MainMenuItems.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MainMenuItems);
