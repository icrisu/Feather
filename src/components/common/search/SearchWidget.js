import React, { Component } from 'react';
import { withRouter } from 'react-router';
import PropTypes from 'prop-types';
import enhanceWithClickOutside from 'react-click-outside';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import { APP_BAR_COLORS } from '../../../theme/Customize';
import _ from 'lodash';
import safe from 'undefsafe';
import uniqid from 'uniqid';

class SearchWidget extends Component {

    static defaultProps = {
        placeholder: ''
    }

    constructor(props) {
        super(props);
        this.state = { searchKey: '', children: null, resultsHTML: '' };
        this.resultsUI = React.createRef();
        this._delayedSearch = _.debounce(term => {
            this._handleSearch(term);
        }, 400);           
    }

    _handleSearch(term) {
        if (_.isNil(this.props.searchAction)) {
            return;
        }
        this.props.searchAction(term, result => {
            this.setState({resultsHTML: result}, () => {                
                if (!_.isNil(safe(this.resultsUI, 'current.childNodes'))) {
                    let children = [];  
                    const nodes = this.resultsUI.current.children;
                    for (let i = 0; i < nodes.length; i++) {
                        const linkTo = nodes[i].getAttribute('data-internal-link');
                        children.push(<div onClick={ e => this._elementClick(linkTo) } key={uniqid()} className="result" dangerouslySetInnerHTML={{ __html: nodes[i].innerHTML }}></div>)
                    }
                    this.setState({ children })
                }
            });
        })
    }

    _elementClick(linkTo) {
        this.setState({results: '', children: null, searchKey: ''});
        this.props.history.push(linkTo);
    }

    _onChange(e) {
        this.setState({searchKey: e.currentTarget.value}, () => {            
            if (this.state.searchKey === '') {
                this.setState({results: '', children: null});
            } else {
                this._delayedSearch(this.state.searchKey);
            }
        });
    } 

    handleClickOutside() {
        this.setState({results: '', children: null, searchKey: ''});
    }

    _renderResults() {
        if (_.isNil(this.state.children)) {
            return <noscript />;
        }
        return(
            <div className="search-results pretty-scroll">{ this.state.children }</div>           
        )
    }

    _clearResults() {
        this.setState({results: '', children: null, searchKey: ''});
    }

    _renderClear() {
        if (this.state.searchKey !== '') {
            return <IconButton onClick={this._clearResults.bind(this)} className="close-btn" size="small" style={{ color: APP_BAR_COLORS.navigationItems, width: 30, height: 30 }}><CloseIcon style={{ fontSize: 18 }} /></IconButton>
        }
    }

    render() {
        return(
            <div className="search-widget">
                <SearchIcon className="search-icon" style={{ color: APP_BAR_COLORS.navigationItems }}/>
                { this._renderClear() }
                <input placeholder={ this.props.placeholder } value={this.state.searchKey} onChange={ this._onChange.bind(this) } className="search-input" type="text" />
                <div className="search-results pretty-scroll"></div>
                { this._renderResults() }
                <div style={{ display: 'none' }} ref={ this.resultsUI } dangerouslySetInnerHTML={{ __html: this.state.resultsHTML }}></div>
            </div>
        )
    }
}

SearchWidget.propTypes = {
    placeholder: PropTypes.string,
    searchAction: PropTypes.func.isRequired
};

export default withRouter(enhanceWithClickOutside(SearchWidget));
