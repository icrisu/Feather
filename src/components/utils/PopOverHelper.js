import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import Button from 'material-ui/Button';
import Popover from 'material-ui/Popover';

class PopOverHelper extends PureComponent {

    static defaultProps = {
        position: 'default'
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
        if (nextProps.position === 'bottom-right') {
            return {
                anchorOriginVertical: 'bottom',
                anchorOriginHorizontal: 'right',
                transformOriginHorizontal: 'right'
            }
        }
        if (nextProps.position === 'top-right') {
            return {
                anchorOriginVertical: 'top',
                anchorOriginHorizontal: 'right',
                transformOriginHorizontal: 'right'
            }
        }        
        return null;
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
    Button: PropTypes.element.isRequired
}

export default PopOverHelper;
