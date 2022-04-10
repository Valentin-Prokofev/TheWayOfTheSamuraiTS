import React from 'react';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {MessagesPageType} from "../../Redux/state";

type DialogsPropsType = {
    messagePageType:MessagesPageType
    messageForDialogs:string
    // addMessage:()=>void                            HW
    // changeNewMessage:(newMessage:string)=>void     HW
}

export const Dialogs = (props: DialogsPropsType) => {

    let dialogsUsersElements = props.messagePageType.dialogsUsersData.map((user) =>
        <DialogsUsers key={user.id} name={user.name} id={user.id} />)

    let dialogsMessagesElements = props.messagePageType.dialogsMessagesData.map((message) =>
        <DialogsMessages
            key = {message.id}
            message={message.message}
            messageForDialogs={props.messageForDialogs}
            // addMessageCallBack={props.addMessage}               HW
            // changeNewMessage={props.changeNewMessage}           HW
        />)

    return (
        <>
            <section className={style.section_dialogs}>
                <ul className={style.dialogs_users}>
                    {dialogsUsersElements}
                </ul>
                <ul className={style.dialogs_messages}>
                    {dialogsMessagesElements}
                </ul>
            </section>
        </>
    );
};

