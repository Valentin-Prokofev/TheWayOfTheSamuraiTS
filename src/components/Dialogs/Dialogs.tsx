import React, {ChangeEvent} from 'react';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {DialogsPropsType} from "./DialogsContainer";

export const Dialogs = (props: DialogsPropsType) => {

    let state = props.messagesPage
    let messageForDialogs = state.newMessageForDialogs

    let dialogsUsersElements = state.dialogsUsersData.map((user) =>
        <DialogsUsers key={user.id} name={user.name} id={user.id}/>)

    let dialogsMessagesElements = state.dialogsMessagesData.map((message) =>
        <DialogsMessages
            key={message.id}
            message={message.message}
        />)

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageBody(e.currentTarget.value)
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

