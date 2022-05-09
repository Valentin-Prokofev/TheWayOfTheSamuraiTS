import React from 'react';
import style from "./Header.module.css";
import logo from "../../Image/logo.jpg"

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img className={style.img_logo} src={logo}
                     alt="logo"/>
            </header>
        </>
    );
};

