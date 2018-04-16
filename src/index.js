import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';

import reducers from './reducers';

import './styles/css/index.css';
import App from './App';

export const store = createStore(reducers, {}, compose(applyMiddleware(ReduxThunk)));

ReactDOM.render(
<Provider store={ store }>
    <App />
</Provider>, document.getElementById('root'));
