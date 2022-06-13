import {ActionsTypes, AppThunk} from "./redux-store";
import {getAuthUserData} from "./auth-reduser";

export type InitialStateType = {
    initialized: boolean
}

export let initialState: InitialStateType = {
    initialized: false
}

export const appReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "INITIALIZED-SUCCESS":
            return {...state, initialized: true}
        default:
            return state
    }
}

export const initializedSuccess = () => ({type: "INITIALIZED-SUCCESS"} as const)

//Thunk
export const initializeApp = (): AppThunk =>
    (dispatch) => {
        let promise = dispatch(getAuthUserData())
        promise.then(() => {
            dispatch(initializedSuccess())
        })
    }
