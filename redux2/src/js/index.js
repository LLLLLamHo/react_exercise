import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import toApp from './reducers/reducer.js';
import App from './containers/App.js';

const store = createStore(toApp);
console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
)
