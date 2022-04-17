import React from "react";
import {StoreType} from "./Redux/store";
import {ReduxPropsType} from "./Redux/redux-store";

export const StoreContext = React.createContext({} as ReduxPropsType)

export type ProviderType = {
    store: ReduxPropsType
    children: React.ReactNode//может надо было any
    // children: any //может надо было any
}

export const Provider = (props:ProviderType) => {
    return <StoreContext.Provider value={props.store}>
        {props.children}
    </StoreContext.Provider>
}