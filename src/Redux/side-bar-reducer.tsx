import {SideBarType} from "./store";
import {ActionsTypes} from "./redux-store";

export let initialState: SideBarType = {}

export const sideBarReducer = (state = initialState, action: ActionsTypes) => {

    return state
}