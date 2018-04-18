import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
        color: '#dbc6fe'
    } 
});

class MenuLink extends PureComponent {
    
    static defaultProps = {
        to: '',
        href: '',
        target: '_blank',
        Icon: null,
        label: ''
    }

    _renderWithLink() {
        const { classes, Icon, to, label } = this.props;
        return(
            <ListItem button component={Link} to={to}>
                { Icon ? <ListItemIcon><Icon style={{ color: '#FFF' }} /></ListItemIcon> : null }                            
                <ListItemText classes={{ primary: classes.root }} inset primary={label} />
            </ListItem>            
        )
    }

    _onClick(href, target) {
        window.open(href, target);
    }

    _renderWithHref() {
        const { classes, Icon, href, target, label } = this.props;
        return(
            <ListItem button onClick={ e => this._onClick(href, target) }>
                { Icon ? <ListItemIcon><Icon style={{ color: '#FFF' }} /></ListItemIcon> : null }                            
                <ListItemText classes={{ primary: classes.root }} inset primary={label} />
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
    label: PropTypes.string
};

export default withStyles(styles)(MenuLink);
