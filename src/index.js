import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import axios from 'axios';
import reducer from './reducers';
import App from './components/App';

/* eslint-disable no-underscore-dangle */
const store = createStore(
    reducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
/* eslint-enable */

// axios({
//     method: 'get',
//     url: 'https://5ea5b3f02d86f00016b46164.mockapi.io/api/v1/users',
// })
//     .then((result) => { console.log(result.data); })
//     .catch((err) => { console.error(err); });

const instance = axios.create({
    url: '/users',
    baseURL: 'https://5ea5b3f02d86f00016b46164.mockapi.io/api/v1',
    responseType: 'json',
});

instance.get('/users')
    .then((response) => {
        // eslint-disable-next-line no-console
        console.log(response.data);
    });

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
