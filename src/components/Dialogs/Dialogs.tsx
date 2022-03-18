import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers/DialogsUsers";
import {DialogsMessages} from "./DialogsMessages/DialogsMessages";


export const Dialogs = () => {

    let dialogsUsersData = [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ]

    let dialogsMessagesData = [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "This is to really hard!!!"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ]

    let dialogsUsersElements = dialogsUsersData.map((user)=>
        <DialogsUsers name={user.name} id={user.id}/>)

    let dialogsMessagesElements = dialogsMessagesData.map((message) =>
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

