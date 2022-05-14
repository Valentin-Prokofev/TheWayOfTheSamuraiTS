import {combineReducers, createStore} from "redux";
import {
    addPostActionCreator,
    changeNewTextActionCreator,
    profilePageReducer,
    setUserProfile
} from "./profile-page-reducer";
import {
    addMessageForDialogsMessageCreator,
    messagesPageReducer,
    sendMessageForDialogsMessageCreator
} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reducer";
import {
    follow,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollow,
    usersReducer
} from "./users-reduser";
import {authReducer, setAuthUserData} from "./auth-reduser";


export let rootReducer = combineReducers({
    profilePage: profilePageReducer,             // перечисляем за какие страницы какой редюсер отвечает
    messagesPage: messagesPageReducer,
    sideBar: sideBarReducer,
    users:usersReducer,
    auth: authReducer,
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
    | ReturnType<typeof follow>
    | ReturnType<typeof unFollow>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFollowingProgress>


// @ts-ignore
window.store = store