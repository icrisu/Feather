import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import { APP_BAR_COLORS } from '../../../theme/Customize';

class SearchWidget extends Component {
    render() {
        return(
            <div className="search-widget">
                <SearchIcon className="search-icon" style={{ color: APP_BAR_COLORS.navigationItems }}/>
                <input placeholder="Search something ..." className="search-input" type="text" />
            </div>
        )
    }
}

export default SearchWidget;
