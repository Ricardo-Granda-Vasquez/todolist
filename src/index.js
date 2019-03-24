import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import "./application/css/App.scss"
import App from './domain/App';

ReactDOM.render(
            <div>
                 <App>
                 </App>
            </div>,
    document.getElementById('app')
);
