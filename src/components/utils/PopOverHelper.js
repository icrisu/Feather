import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Popover from 'material-ui/Popover';
import _ from 'lodash';

class PopOverHelper extends Component {

    static defaultProps = {
        position: 'default',
        currentPath: null
    }

    state = {        
        open: false,
        anchorOriginVertical: 'top',
        anchorOriginHorizontal: 'left',
        transformOriginVertical: 'top',
        transformOriginHorizontal: 'left',
        positionTop: 200, // Just so the popover can be spotted more easily
        positionLeft: 400, // Same as above
        anchorReference: 'anchorEl',
      };

    anchorEl = null;

    static getDerivedStateFromProps(nextProps, prevState) {
        let layout = {};
        if (nextProps.position === 'bottom-right') {
            layout = {
                anchorOriginVertical: 'bottom',
                anchorOriginHorizontal: 'right',
                transformOriginHorizontal: 'right'
            }
        }
        if (nextProps.position === 'top-right') {
            layout = {
                anchorOriginVertical: 'top',
                anchorOriginHorizontal: 'right',
                transformOriginHorizontal: 'right'
            }
        }  
        console.log('AAAA', nextProps)
        return { ...layout, open: nextProps.open || false };
    }

    handleClickButton() {
        this.setState({
          open: true,
        });
    };
      
    handleClose() {
        this.setState({
            open: false,
        });
    };     
    
    render() {
        const {
            open,
            anchorOriginVertical,
            anchorOriginHorizontal,
            transformOriginVertical,
            transformOriginHorizontal,
            positionTop,
            positionLeft,
            anchorReference,
        } = this.state;

        return(
            <div style={{ display: 'inline-block' }}>
                { React.cloneElement(this.props.Button, {
                    buttonRef: node => { this.anchorEl = node },
                    onClick: e => { this.handleClickButton(e) }
                }) }
                <Popover
                    open={open}
                    anchorEl={this.anchorEl}
                    anchorReference={anchorReference}
                    anchorPosition={{ top: positionTop, left: positionLeft }}
                    onClose={this.handleClose.bind(this)}
                    anchorOrigin={{
                        vertical: anchorOriginVertical,
                        horizontal: anchorOriginHorizontal,
                    }}
                    transformOrigin={{
                        vertical: transformOriginVertical,
                        horizontal: transformOriginHorizontal,
                    }}
                    >
                    { this.props.children }
                </Popover>                               
            </div>           
        )        
    }
}

PopOverHelper.propTypes = {
    position: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    Button: PropTypes.element.isRequired,
    open: PropTypes.bool
}

export default PopOverHelper;
