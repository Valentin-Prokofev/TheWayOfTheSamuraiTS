import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/state";

 let renderEntireTree = () => {
    ReactDOM.render(
        <BrowserRouter><App
            store={store}
            state={store._state}
            dispatch={store.dispatch.bind(store)}
            // changeNewText={store.changeNewText.bind(store)}
            // addMessage={store.addMessage}                   ФУНКЦИЯ ИЗ ДЗ
            // changeNewMessage={changeNewMessage}                  ФУНКЦИЯ ИЗ ДЗ
        /></BrowserRouter>, document.getElementById('root')
    );
}

renderEntireTree()
store.subscribe(renderEntireTree)
