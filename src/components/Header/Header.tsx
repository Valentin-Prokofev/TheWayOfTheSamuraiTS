import React from 'react';
import style from "./Header.module.css";

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img className={style.img_logo} src='/assets/img/logo.jpg'
                     alt="logo"/>
            </header>
        </>
    );
};

