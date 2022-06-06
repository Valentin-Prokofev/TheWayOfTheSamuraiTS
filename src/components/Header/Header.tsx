import React from 'react';
import style from "./Header.module.css";
import logo from "../../Image/logo.jpg"
import {NavLink} from 'react-router-dom';

type HeaderPropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean
    logout: () => void
}

export const Header = (props: HeaderPropsType) => {
    return (
        <>
            <header className={style.header}>
                <img className={style.img_logo} src={logo}
                     alt="logo"/>
                <div className={style.login_block}>
                    {props.isAuth 
                        ? <div>{props.login} - <button onClick={props.logout}>Log out</button></div>
                        : <NavLink to={"/login"}>Login</NavLink>
                    }
                </div>
            </header>
        </>
    );
};

