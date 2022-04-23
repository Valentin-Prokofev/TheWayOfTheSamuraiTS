import React from 'react';
import {
    addMessageForDialogsMessageCreator, MessagesPageType,
    sendMessageForDialogsMessageCreator
} from "../../Redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

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
        messagesPage: state.messagesPage
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

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

