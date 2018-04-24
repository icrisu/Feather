import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import CssBaseline from 'material-ui/CssBaseline';
import { Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { loadTranslations, syncTranslationWithStore } from 'react-redux-i18n';
import { TRANSLATION_DATA } from './config/translation';
import { changeLang } from './actions/ui-interact';

import reducers from './reducers';

import './styles/css/index.css';
// import RequireAuth from './components/auth/RequireAuth';
import Main from './components/main/Main';
// const Authenticated = RequireAuth(App);


export const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));
syncTranslationWithStore(store);
store.dispatch(loadTranslations(TRANSLATION_DATA));
const { language } = store.getState();
changeLang(language);
// store.dispatch(setLocale(language));
// setTimeout(() => {
//     store.dispatch(setLocale(language));
// }, 2000)

ReactDOM.render(
<Provider store={ store }>
    <Fragment>
        <CssBaseline />
        <Router basename={`/`}>
            <Main />
        </Router>
    </Fragment>
</Provider>, document.getElementById('root'));
