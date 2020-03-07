import React from 'react';
import ReactDOM from 'react-dom';
import {Provider}  from 'react-redux';
import {createStore, applyMiddleware}  from 'redux';
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension';

import './index.css';
import moovieApp from "./reducers";
import MoovieApp from './components/MoovieApp';
import rootSaga from './sagas'
import * as serviceWorker from './serviceWorker';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    moovieApp,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <MoovieApp />
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
