import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GenericDialog from '../../components/common/dialogs/GenericDialog';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import { appNotify } from '../../actions/ui-interact';
import { I18n } from 'react-redux-i18n';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import uniqid from 'uniqid';

class NewToDoModal extends PureComponent {

    constructor(props) {
        super(props);
        this.dialog = React.createRef();   
        this.state = {
            todo: {
                _id: uniqid(),
                text: '', 
                category: 'personal',
                completed: false        
            },
            todo_text_Error: false
        }
    }

    componentDidMount() {
        this.setState({
            todo: {
                _id: uniqid(),
                text: '',    
                category: 'personal',
                completed: false       
            }            
        })
    }

    _confirmAdd() {
        if (!this.dialog) {
            return;
        }
        this.props.addTodo(this.state.todo);
        this.props.appNotify({
            message:  `New todo has been added!`, 
            open: true
        });        
        this.dialog.current._handleClose();
    }

    _handleChange(event, field) {
        const value = event.target.value;
        this.setState({ todo: { ...this.state.todo, [field]: value } })
    }

    _handleChangeCategory = event => {
        this.setState({ todo: { ...this.state.todo, category: event.target.value }})
    };    

    _renderForm() {
        return(
            <Grid container spacing={24}>
                <Grid item xs={12} sm={12} md={12}>
                    <TextField
                        style={{ minWidth: 250 }}
                        fullWidth
                        error={ this.state.todo_text_Error }
                        label='Todo text'
                        onChange={ event => this._handleChange(event, 'text') }
                        value={this.state.todo.text}
                        required
                    />
                </Grid>
                <Grid item xs={12} sm={12} md={12}>
                <FormControl>
                    <InputLabel htmlFor="category-simple">Category</InputLabel>
                    <Select
                        value={this.state.todo.category}
                        onChange={this._handleChangeCategory}
                        inputProps={{
                        name: 'category',
                        id: 'category-simple',
                        }}
                    >
                        <MenuItem value="personal">Personal</MenuItem>
                        <MenuItem value="work">Work</MenuItem>
                        <MenuItem value="meet">Meet</MenuItem>
                        <MenuItem value="home">Home</MenuItem>
                    </Select>
                </FormControl>
                </Grid>                                             
            </Grid>
        )
    }

    render() {
        const acceptIsDisabled = this.state.todo.text === '';
        const newProps = { 
            ...this.props, title: 'New todo',
            onAccept: this._confirmAdd.bind(this),
            acceptIsDisabled,
            acceptText: 'Add todo',
            rejectText: I18n.t('dialogs.cancel')
        }
        return(
            <GenericDialog { ...newProps } ref={this.dialog}>
                { this._renderForm() }
            </GenericDialog>
        )
    }
}

NewToDoModal.defaultProps = {
    open: PropTypes.bool,
    addTodo: PropTypes.func.isRequired
}

export default connect(null, { appNotify })(NewToDoModal);
