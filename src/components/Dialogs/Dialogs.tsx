import React, {ChangeEvent} from 'react';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {
    ActionsTypes, addMessageForDialogsMessageCreator,
    changeNewTextActionCreator,
    MessagesPageType,
    sendMessageForDialogsMessageCreator, StoreType
} from "../../Redux/state";

type DialogsPropsType = {
    store: StoreType
    messagePageType: MessagesPageType
    messageForDialogs: string
    dispatch: (action: ActionsTypes) => void
    // addMessage:()=>void                            HW
    // changeNewMessage:(newMessage:string)=>void     HW
}

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.store.getState().messagesPage
    let messageForDialogs = state.newMessageForDialogs

    let dialogsUsersElements = state.dialogsUsersData.map((user) =>
        <DialogsUsers key={user.id} name={user.name} id={user.id}/>)

    let dialogsMessagesElements = state.dialogsMessagesData.map((message) =>
        <DialogsMessages
            key={message.id}
            message={message.message}
            // messageForDialogs={props.messageForDialogs}
            // addMessageCallBack={props.addMessage}               HW
            // changeNewMessage={props.changeNewMessage}           HW
        />)

    const onSendMessageClick = () => {
        props.dispatch(sendMessageForDialogsMessageCreator())
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch(addMessageForDialogsMessageCreator(e.currentTarget.value))
    }

    return (
        <>
            <section className={style.section_dialogs}>
                <ul className={style.dialogs_users}>
                    {dialogsUsersElements}
                </ul>
                <ul className={style.dialogs_messages}>
                    <div>{dialogsMessagesElements}</div>
                    <div>
                        <div><textarea
                            value={messageForDialogs}
                            onChange={onNewMessageChange}
                            placeholder={"Enter your message"}>0</textarea></div>
                        <div>
                            <button onClick={onSendMessageClick}>send</button>
                        </div>
                    </div>
                </ul>
            </section>
        </>
    );
};

