import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";
import {dialogsMessagesDataArray, dialogsUsersDataArray} from "../../App";

type DialogsPropsType = {
    dialogsUsersData:Array<dialogsUsersDataArray>
    dialogsMessagesData:Array<dialogsMessagesDataArray>
}

export const Dialogs = (props:DialogsPropsType) => {


    let dialogsUsersElements = props.dialogsUsersData.map((user)=>
        <DialogsUsers name={user.name} id={user.id}/>)

    let dialogsMessagesElements = props.dialogsMessagesData.map((message) =>
    <DialogsMessages message={message.message}/>)



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

