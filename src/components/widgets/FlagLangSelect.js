import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLang } from '../../actions/ui-interact';
import ReactFlagsSelect from 'react-flags-select';
import 'react-flags-select/css/react-flags-select.css';
import { LANG_OPTIONS, DEFAULT_LANG } from '../../config/constants';
import _ from 'lodash';

class FlagLangSelect extends Component {
    
    state = {
        defaultLanguage: DEFAULT_LANG
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        return { defaultLanguage: nextProps.language || DEFAULT_LANG };
    }  

    _onFlagSelect(countryCode) {
        this.props.changeLang(countryCode);
    }

    _parseCoutryCodes() {
        if (!_.isArray(LANG_OPTIONS)) {
            return {
                country_codes: [],
                labels: []
            }
        }
        let countries = [];
        let customLabels = {};
        for (let i = 0; i < LANG_OPTIONS.length; i++) {
            countries.push(LANG_OPTIONS[i].country_code);
            customLabels[[LANG_OPTIONS[i].country_code]] = LANG_OPTIONS[i].label;
        }
        return { countries, customLabels };
    }

    render() {
        const { countries, customLabels } = this._parseCoutryCodes();
        return(
            <ReactFlagsSelect className="select-lang" 
                onSelect={this._onFlagSelect.bind(this)}
                defaultCountry={this.state.defaultLanguage}
                countries={ countries } 
                customLabels={ customLabels } 
            />            
        )
    }
}

const mapStateToProps = ({ language }) => {
    return {
        language
    }
}

export default connect(mapStateToProps, { changeLang })(FlagLangSelect);
