import React from 'react';
import ReactDOM from "react-dom";
import {createStore} from 'redux';
import allReducers from "./reducers";
import {Provider} from 'react-redux';
import Page from './components/Page';
import DataList from './components/DataList';

const store = createStore(allReducers);

ReactDOM.render(
    <Provider store = {store}>
        <Page/>
    </Provider>,
    document.getElementById('fieldToShow')
);
ReactDOM.render(
    <Provider store = {store}>
        <DataList/>
    </Provider>,
    document.getElementById('data')
);


