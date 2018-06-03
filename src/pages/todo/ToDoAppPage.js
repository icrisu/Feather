import React, { Component } from 'react';
import { connect } from 'react-redux';
import GenericPage from '../base/GenericPage';
import { I18n } from 'react-redux-i18n';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import NewToDoModal from './NewToDoModal';
import ToDoItem from './ToDoItem';
import { appNotify } from '../../actions/ui-interact';
import _ from 'lodash';

class ToDoAppPage extends Component {

    // get real tasks from the server side
    _dummytasks = [
        {_id: "jhylk28s", text: "To update my account settings", category: "work", completed: false},
        {_id: "jhylk2sf", text: "Do not forget about 2pm call", category: "work", completed: false},
        {_id: "jsslk2sf", text: "Meeting with Peter today", category: "meet", completed: false},
        {_id: "jhdfjkv7", text: "How to repair a garage door", category: "home", completed: true},
        {_id: "jhylk28i", text: "Go for a cup of coffee", category: "personal", completed: true}
    ];

    state = {
        _pageNavigation: [{ label: 'Dashboard', to: '/' }, { label: 'Todo' }],
        openNewToDoModal: false,
        todos: _.orderBy(this._dummytasks, ['completed'], ['asc'])
    }

    _createNewTask() {
        this.setState({ openNewToDoModal: true })
    }

    _addTodo(todoObj) {
        this.setState({ todos: [ todoObj, ...this.state.todos ] });
    }

    _ontaskChange(todoObj, checked) {
        let todos = [ ...this.state.todos ];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i]._id === todoObj._id) {
                todos[i].completed = checked;
                break;
            }
        }
        this.props.appNotify({
            message:  `Task has been changed!`, 
            open: true
        });
        this.setState({ todos: _.orderBy(todos, ['completed'], ['asc']) });
    }

    _onDelete(todoObj) {
        let todos = [ ...this.state.todos ];
        for (let i = 0; i < todos.length; i++) {
            if (todos[i]._id === todoObj._id) {
                todos.splice(i, 1);
                break;
            }
        }
        this.props.appNotify({
            message:  `Task has been deleted!`, 
            open: true
        });        
        this.setState({ todos })        
    }

    _renderTodos() {
        if (this.state.todos.length === 0) {
            return <p style={{ textAlign: 'center' }}>Currently there are no pending tasks</p>
        }
        return this.state.todos.map(todoObj => {
            return <ToDoItem onDelete={ this._onDelete.bind(this) } onCompletedChange={ this._ontaskChange.bind(this) } todoObj={ todoObj } key={ todoObj._id } />
        })
    }

    _renderModal() {
        if (this.state.openNewToDoModal) {
            return <NewToDoModal addTodo={ this._addTodo.bind(this) } open={ this.state.openNewToDoModal } onReject={ e => this.setState({ openNewToDoModal: false }) } />
        }
    }

    render() {
        return(
            <GenericPage title={I18n.t('pages.todopage.title')} pageContentClasses="todo-page-content" pageNav={ this.state._pageNavigation }>
                <Grid container spacing={24}>
                    <Grid className="page-actions" item xs={12} sm={12} md={12}>
                        <div style={{ display: 'flex' }}>
                            <Button onClick={ this._createNewTask.bind(this) } variant="raised" color="secondary" style={{ textTransform: 'initial', marginRight: 25 }}>New task</Button>
                        </div>
                    </Grid>                
                    <Grid item xs={12} sm={12} md={12}> 
                        { this._renderTodos() }
                    </Grid>                    
                </Grid>
                { this._renderModal() }
            </GenericPage>
        )
    }
}

export default connect(null, { appNotify })(ToDoAppPage);
