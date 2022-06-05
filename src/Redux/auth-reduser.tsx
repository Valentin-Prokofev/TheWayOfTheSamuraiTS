import {ActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";

export type InitialStateType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

export let initialState: InitialStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload, isAuth: true}
            default:
            return state
    }
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean) => {
    return {
        type: "SET-USER-DATA",
        payload: {
            userId,
            email,
            login,
            isAuth,
        }
    } as const
}

//Thunk
export const getAuthUserData = () => (dispatch: Dispatch) => {
    authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}

export const login = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then(response => {
            if (response.data.resultCode === 0) {
                // @ts-ignore
                dispatch(getAuthUserData())
            }
        })
}

export const logout = () => (dispatch: Dispatch) => {
    authAPI.logout()
        .then(response => {
            if (response.data.resultCode === 0) {
                // let {id, email, login} = response.data.data
                dispatch(setAuthUserData(null, null, null, false))
            }
        })
}
