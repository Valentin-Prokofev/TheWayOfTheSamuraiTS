import React from 'react';
import { MessagesPageType,
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
    sendMessage:(newMessageBody: string)=>void
}

export type DialogsPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        messagesPage: state.messagesPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        sendMessage: (newMessageBody) => {
            dispatch(sendMessageForDialogsMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRouter,
    WithAuthRedirect
)(Dialogs)

