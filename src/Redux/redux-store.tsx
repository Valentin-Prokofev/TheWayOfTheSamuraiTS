import {combineReducers, createStore} from "redux";
import {addPostActionCreator, changeNewTextActionCreator, profilePageReducer} from "./profile-page-reducer";
import {
    addMessageForDialogsMessageCreator,
    messagesPageReducer,
    sendMessageForDialogsMessageCreator
} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reducer";
import {followAC, setUsersAC, unFollowAC, usersReducer} from "./users-reduser";


export let rootReducer = combineReducers({
    profilePage: profilePageReducer,             // перечисляем за какие страницы какой редюсер отвечает
    messagesPage: messagesPageReducer,
    sideBar: sideBarReducer,
    users:usersReducer
})

//типизация редакса вместе с редюсерами
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
//типизация стора созданного редаксом
// export type ReduxPropsType = typeof store
//типизация редакса вместе с редюсерами

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof changeNewTextActionCreator>
    | ReturnType<typeof addMessageForDialogsMessageCreator>
    | ReturnType<typeof sendMessageForDialogsMessageCreator>
    | ReturnType<typeof followAC>
    | ReturnType<typeof unFollowAC>
    | ReturnType<typeof setUsersAC>