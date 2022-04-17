import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-page-reducer";
import {messagesPageReducer} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reducer";
import {StoreType} from "./store";




export let reducers = combineReducers({
    profilePage: profilePageReducer,             // перечисляем за какие страницы какой редюсер отвечает
    messagesPage: messagesPageReducer,           // перечисляем за какие страницы какой редюсер отвечает
    sideBar: sideBarReducer                      // перечисляем за какие страницы какой редюсер отвечает
})

export let store:StoreType = createStore(reducers)