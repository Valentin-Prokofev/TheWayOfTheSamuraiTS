import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {store} from "./Redux/redux-store";

 let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter><App
            store={store}
            dispatch={store.dispatch.bind(store)}
        /></BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree()
store.subscribe(renderEntireTree)
