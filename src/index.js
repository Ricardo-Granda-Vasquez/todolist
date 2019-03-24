import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './application/configureStore';
import "./application/css/App.scss"
import App from './domain/App';
import {Provider} from 'react-redux';

let store = configureStore();

ReactDOM.render(
            <Provider store={store}>
                 <App>
                 </App>
            </Provider>,
    document.getElementById('app')
);
