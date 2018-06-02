import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import ReactStars from 'react-stars';

class EmailListItem extends PureComponent {

    static defaultProps = {
        onSelectChange: () => {},
        onStarredChanged: () => {},
        message: {}
    }

    constructor(props) {
        super(props);
        this.state = { 
            selected: false,
            message: {}
        };
    }

    _handleChange(event) {
        this.props.onSelectChange(event.target.checked, this.props.message._id);
    }

    _starredChanged(newRating) {
        const rating = this.props.message.isStarred === 1 ? 0: 1;
        this.props.onStarredChanged(rating, this.props.message._id);
    }

    _renderReadStyle(message) {
        let style = { textDecoration: 'none' };
        if (!message.isRead) {
            style = { fontWeight: 500, textDecoration: 'none' };
        }
        return style;
    }

    render() {
        const { message } = this.props;
        let selected = message.selected || false;
        return(
            <TableRow>
                <TableCell>
                    <div className="from">
                        <Checkbox color="primary" checked={ selected } onChange={ this._handleChange.bind(this) } />     
                        <ReactStars className="star" onChange={ this._starredChanged.bind(this) } count={ 1 } size={ 26 } value={ message.isStarred } color1="#cfd8dc" edit={ true } half={ false } />
                        <Link to="/email/view/some_id" className="table-link-bold" style={ this._renderReadStyle(message) }>{ message.from }</Link>                    
                    </div>
                </TableCell>
                <TableCell className="subject" style={ this._renderReadStyle(message) }>{ message.subject }</TableCell>
                <TableCell className="excerpt">{ message.excerpt }</TableCell>
                <TableCell className="time">{ message.time }</TableCell>
            </TableRow>             
        )
    }
}

EmailListItem.propTypes = {
    onSelectChange: PropTypes.func,
    onStarredChanged: PropTypes.func,
    message: PropTypes.object
}

export default EmailListItem;
