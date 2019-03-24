import '@babel/polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router} from 'react-router-dom';
import {Provider} from 'react-redux';
import configureStore from './domain/configureStore';
import Layout from './domain/App';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
            <div>
                <Router history={history}>
                    <div>
                        <Layout>

                        </Layout>
                    </div>
                </Router>
            </div>
    </Provider>,
    document.getElementById('app')
);
