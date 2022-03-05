import React from 'react';
import style from "./Header.module.css";

export const Header = () => {
    return (
        <>
            <header className={style.header}>
                <img className={style.img_logo} src="http://www.heraldicum.ru/russia/subjects/towns/images/dimitro1.gif"
                     alt="logo"/>
            </header>
        </>
    );
};

