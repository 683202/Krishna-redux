
import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Provider } from 'react-redux';

import counterStore from './Store';
import CounterContainer from './Containers/CounterContainer';

ReactDOM.hydrate(
    <Provider store={counterStore}>
        <BrowserRouter>
            <React.Fragment>
                <Route path="/" exact component={CounterContainer} />
            </React.Fragment>
        </BrowserRouter>
    </Provider>,
    document.getElementById('app')
);