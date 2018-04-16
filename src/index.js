import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import CssBaseline from 'material-ui/CssBaseline';
import { Fragment } from 'react';
import { HashRouter as Router } from 'react-router-dom';

import reducers from './reducers';

import './styles/css/index.css';
import RequireAuth from './components/auth/RequireAuth';
import App from './App';
const Authenticated = RequireAuth(App);

export const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));

ReactDOM.render(
<Provider store={ store }>
    <Fragment>
        <CssBaseline />
        <Router basename={`/`}>
            <App />
        </Router>
    </Fragment>
</Provider>, document.getElementById('root'));
