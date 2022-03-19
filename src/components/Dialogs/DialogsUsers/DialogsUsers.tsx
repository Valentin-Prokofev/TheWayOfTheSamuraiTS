import React from 'react';
import style from "./DialogsUsers.module.css";
import {NavLink} from "react-router-dom";




export type DialogsUsersPropsType = {
    name: string
    id: number
}

export const DialogsUsers = (props:DialogsUsersPropsType) => {
    return (
        <li className={`${style.dialogs_user_name} ${style.active}`}>
            <NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
        </li>
    )
}

