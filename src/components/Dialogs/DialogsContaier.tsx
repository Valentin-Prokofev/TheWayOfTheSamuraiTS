import React, {ChangeEvent} from 'react';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {ActionsTypes, MessagesPageType, StoreType} from "../../Redux/store";
import {addMessageForDialogsMessageCreator, sendMessageForDialogsMessageCreator} from "../../Redux/messages-page-reducer";
import {Dialogs} from "./Dialogs";

type DialogsPropsType = {
    store: StoreType
    messagePageType: MessagesPageType
    messageForDialogs: string
    dispatch: (action: ActionsTypes) => void
    // addMessage:()=>void                            HW
    // changeNewMessage:(newMessage:string)=>void     HW
}

export const DialogsContainer = (props: DialogsPropsType) => {

    let state = props.store.getState().messagesPage
    let messageForDialogs = state.newMessageForDialogs

    let dialogsUsersElements = state.dialogsUsersData.map((user) =>
        <DialogsUsers key={user.id} name={user.name} id={user.id}/>)

    let dialogsMessagesElements = state.dialogsMessagesData.map((message) =>
        <DialogsMessages
            key={message.id}
            message={message.message}
        />)

    const onSendMessageClick = () => {
        props.dispatch(sendMessageForDialogsMessageCreator())
    }

    const onNewMessageChange = (text:string) => {
        props.dispatch(addMessageForDialogsMessageCreator(text))
    }

    return (
        <>
           <Dialogs
               // store={}
               // messagePageType={}
               // messageForDialogs={}
               // dispatch={}

               newMessageForDialogs={messageForDialogs}
               messagesPage={state}
               updateNewMessageBody={onNewMessageChange}
               sendMessage={onSendMessageClick}
           />
        </>
    );
};

