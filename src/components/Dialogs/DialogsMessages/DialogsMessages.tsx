import React, {ChangeEvent} from 'react';
import style from "./DialogsMessages.module.css";
import {message} from "antd";

type DialogsMessagesPropsType = {
    message: string
    // messageForDialogs:string
    // addMessageCallBack: () => void                         HW
    // changeNewMessage: (newMessage: string) => void          HW
}

export const DialogsMessages = (props: DialogsMessagesPropsType) => {

    // let addMessage = () => {                                          HW
    //     props.addMessageCallBack()
    // }

    // let changeNewMessageCallBack = (e: ChangeEvent<HTMLTextAreaElement>) => {            HW
    //     props.changeNewMessage(e.currentTarget.value)
    // }

    return (
        <>
            <li className={style.dialogs_message}>{props.message}</li>
            {/*<textarea value={props.messageForDialogs} onChange={changeNewMessageCallBack}></textarea>*/}
            {/*<button onClick={addMessage}>add</button>*/}
        </>
    );
};

