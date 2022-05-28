import React from 'react';
import {
    addMessageForDialogsMessageCreator, MessagesPageType,
    sendMessageForDialogsMessageCreator
} from "../../Redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {withRouter} from "react-router-dom";

type MapStatePropsType = {
    messagesPage:MessagesPageType
}

type MapDispatchPropsType = {
    updateNewMessageBody:(text: string)=>void
    sendMessage:()=>void
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewMessageBody: (text: string) => {
            dispatch(addMessageForDialogsMessageCreator(text))
        },
        sendMessage: () => {
            dispatch(sendMessageForDialogsMessageCreator())
        }
    }
}

// let AuthRedirectComponent = WithAuthRedirect(Dialogs)


// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent)

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(Dialogs)

