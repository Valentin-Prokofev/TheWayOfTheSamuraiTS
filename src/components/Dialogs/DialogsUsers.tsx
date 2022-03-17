import React from 'react';
import style from "./DialogsUsers.module.css";
import {NavLink} from "react-router-dom";




type DialogsUsers = {
    name: string
    id: number
}

export const DialogsUsers = (props:DialogsUsers) => {
    return (
        <li className={`${style.dialogs_user_name} ${style.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

