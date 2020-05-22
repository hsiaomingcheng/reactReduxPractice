// Needed for redux-saga es6 generator ie11 support
import 'core-js/stable';
import 'regenerator/runtime';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import mySaga from './sagas';
import App from './components/App';

// 建立 saga middleware
const sagaMiddleware = createSagaMiddleware();

// 將 saga middleware mount 在 Store 上
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
    applyMiddleware(sagaMiddleware),
));

// 然後執行 saga
sagaMiddleware.run(mySaga);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
