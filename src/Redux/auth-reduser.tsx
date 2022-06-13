import {ActionsTypes, AppThunk} from "./redux-store";
import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";

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
            return {...state, ...action.payload}
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
    return authAPI.me()
        .then(response => {
            if (response.data.resultCode === 0) {
                let {id, email, login} = response.data.data
                dispatch(setAuthUserData(id, email, login, true))
            }
        })
}
//3 способа написания санки
export const login = (email: string, password: string, rememberMe: boolean): AppThunk => async (dispatch) => {
    // try {
    //     const res = await authAPI.login(email, password, rememberMe)
    //     if (res.data.resultCode === 0) {
    //         dispatch(getAuthUserData())
    //     }
    // } catch (e) {
    //     throw new Error
    // }

    const res = await authAPI.login(email, password, rememberMe)
    if (res.data.resultCode === 0) {
        dispatch(getAuthUserData())
    } else {
        let message = res.data.messages.length > 0 ? res.data.messages[0] : "Some error"
        //@ts-ignore
        dispatch(stopSubmit("login", {_error: message}))
    }
}
// export const login = (email: string, password: string, rememberMe: boolean): AppThunk => dispatch => {
//     authAPI.login(email, password, rememberMe)
//         .then((res) => {
//             if (res.data.resultCode === 0) {
//                 dispatch(getAuthUserData())
//             }
//         })
// }

export const logout = (): AppThunk =>
    (dispatch) => {
        authAPI.logout()
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setAuthUserData(null, null, null, false))
                }
            })
    }
