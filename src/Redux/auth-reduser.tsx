import {ActionsTypes} from "./redux-store";

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
    // isFetching: false,
}

export const authReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "SET-USER-DATA":
            return {...state, ...action.payload, isAuth: true}
        default:
            return state
    }
}

export const setAuthUserData = (userId: number, email: string, login: string, isAuth: boolean) => {
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
