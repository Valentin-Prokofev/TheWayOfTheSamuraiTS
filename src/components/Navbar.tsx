import React from 'react';
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li className={style.nav_link}><a href={"#"}>Profile</a></li>
                    <li className={style.nav_link}><a href={"#"}>Messages</a></li>
                    <li className={style.nav_link}><a href={"#"}>News</a></li>
                    <li className={style.nav_link}><a href={"#"}>Music</a></li>
                    <li className={style.nav_link}><a href={"#"}>Settings</a></li>
                </ul>
            </nav>
        </>
    );
};
