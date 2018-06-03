import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class ToDoItem extends PureComponent {

    _onChange(event) {
        this.props.onCompletedChange(this.props.todoObj, event.target.checked);
    }

    _textStyle() {
        let style = {};
        
        if (this.props.todoObj.completed === true) {
            style = { textDecoration: 'line-through' }
        }
        return style;
    }

    render() {
        const { todoObj } = this.props;
        return(
            <div className="todo-item">
                <div>
                    <span>
                        <Checkbox
                            color="primary"
                            checked={ todoObj.completed }
                            onChange={ this._onChange.bind(this) }
                        />
                    </span>
                    <span style={ this._textStyle() }>{ todoObj.text }</span>
                </div>
                <IconButton onClick={ e => this.props.onDelete(this.props.todoObj) }>
                    <DeleteIcon style={{ color: '#919bac' }} />
                </IconButton>
                <div className={ `indicator ${ todoObj.category }` }></div>
            </div>
        )
    }
}

ToDoItem.propTypes = {
    todoObj: PropTypes.object.isRequired,
    onCompletedChange: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
}

export default ToDoItem;
