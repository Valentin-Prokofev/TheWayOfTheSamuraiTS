import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers";
import {DialogsMessages} from "./DialogsMessages";


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



    return (
        <>
            <section className={style.section_dialogs}>
                <ul className={style.dialogs_users}>
                    <DialogsUsers name={dialogsUsersData[0].name} id={dialogsUsersData[0].id}/>
                    <DialogsUsers name={dialogsUsersData[1].name} id={dialogsUsersData[1].id}/>
                </ul>
                <ul className={style.dialogs_messages}>
                    <DialogsMessages message={dialogsMessagesData[0].message}/>
                    <DialogsMessages message={dialogsMessagesData[1].message}/>
                </ul>
            </section>
        </>
    );
};

