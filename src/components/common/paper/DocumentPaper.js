import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import InboxIcon from '@material-ui/icons/DateRange';

const MAX_CHARS = 100;


class DocumentPaper extends Component {

    _renderType() {
        const color = this.props.color || '#ea6278';
        if (this.props.doctype) {
            return <div style={{ background: color }} className="document-type">{ this.props.doctype }</div>;
        }
    }

    render() {
        const info = this.props.info.substr(0, MAX_CHARS) + '...' || '';
        const date = this.props.date || '';
        const color = this.props.color || '#ea6278';

        return(
            <div { ...this.props } className="document-paper">
                <Typography variant="body2" gutterBottom>{ this.props.title || '' }</Typography>
                <p className="info">{ info }</p>
                <div className="date info"><InboxIcon style={{ fontSize: 14, marginRight: 5 }} />{ date }</div>
                <div style={{ background: color }} className="bottom-bar"></div>
                { this._renderType() }
            </div>            
        )
    }
}

export default DocumentPaper;
