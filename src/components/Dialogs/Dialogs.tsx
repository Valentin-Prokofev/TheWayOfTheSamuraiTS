import React, {useState} from 'react';
import {NavLink} from 'react-router-dom';
import style from "./Dialogs.module.css";
import {DialogsUsers} from "./DialogsUsers";
import {DialogsMessages} from "./DialogsMessages";



export const Dialogs = () => {

    return (
        <>
            <section className={style.section_dialogs}>
                <ul className={style.dialogs_users}>
                    <DialogsUsers name={"Dimych"} id={"1"}/>
                    <DialogsUsers name={"Andrey"} id={"2"}/>
                    <DialogsUsers name={"Sveta"} id={"3"}/>
                    <DialogsUsers name={"Sasha"} id={"4"}/>
                    <DialogsUsers name={"Victor"} id={"5"}/>
                    <DialogsUsers name={"Valera"} id={"6"}/>
                </ul>
                <ul className={style.dialogs_messages}>
                    <DialogsMessages title = {"Hi!"}/>
                    <DialogsMessages title = {"How is your it-kamasutra?"}/>
                    <DialogsMessages title = {"This is to really hard!!!"}/>
                </ul>
            </section>
        </>
    );
};

