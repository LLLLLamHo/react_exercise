import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Counter } from './reducers/reducer.js';
import App from './containers/App.js';

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)