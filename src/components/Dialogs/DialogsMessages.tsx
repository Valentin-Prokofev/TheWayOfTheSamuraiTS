import React from 'react';
import style from "./DialogsMessages.module.css";

type DialogsMessagesPropsType = {
    title: string
}

export const DialogsMessages = (props:DialogsMessagesPropsType) => {
    return (
        <>
                <li className={ style.dialogs_message}>{props.title}</li>
        </>
    );
};

