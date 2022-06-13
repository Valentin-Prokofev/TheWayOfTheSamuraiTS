import {applyMiddleware, combineReducers, createStore} from "redux";
import {
    addPostActionCreator,
    profilePageReducer, setStatusProfile,
    setUserProfile
} from "./profile-page-reducer";
import {
    messagesPageReducer,
    sendMessageForDialogsMessageCreator
} from "./messages-page-reducer";
import {sideBarReducer} from "./side-bar-reducer";
import {
    followSuccess,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleIsFetching, toggleIsFollowingProgress,
    unFollowSuccess,
    usersReducer
} from "./users-reduser";
import {authReducer, setAuthUserData} from "./auth-reduser";
import thunk, {ThunkAction} from "redux-thunk";
import {reducer as formReducer} from 'redux-form'
import {appReducer, initializedSuccess} from "./app-reduser";

export let rootReducer = combineReducers({
    profilePage: profilePageReducer,             // перечисляем за какие страницы какой редюсер отвечает
    messagesPage: messagesPageReducer,
    sideBar: sideBarReducer,
    users: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

//типизация редакса вместе с редюсерами
export type AppStateType = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer, applyMiddleware(thunk))
//типизация стора созданного редаксом
// export type ReduxPropsType = typeof store
//типизация редакса вместе с редюсерами

export type ActionsTypes =
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof sendMessageForDialogsMessageCreator>
    | ReturnType<typeof followSuccess>
    | ReturnType<typeof unFollowSuccess>
    | ReturnType<typeof setUsers>
    | ReturnType<typeof setCurrentPage>
    | ReturnType<typeof setTotalUsersCount>
    | ReturnType<typeof toggleIsFetching>
    | ReturnType<typeof setUserProfile>
    | ReturnType<typeof setAuthUserData>
    | ReturnType<typeof toggleIsFollowingProgress>
    | ReturnType<typeof setStatusProfile>
    | ReturnType<typeof initializedSuccess>


//типизация санок
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    AppStateType,
    unknown,
    ActionsTypes>

// @ts-ignore
window.store = store