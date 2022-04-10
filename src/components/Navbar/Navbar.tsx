import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li className={style.nav_link}><NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/news"} activeClassName={style.active}>News</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/music"} activeClassName={style.active}>Music</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/settings"} activeClassName={style.active}>Settings</NavLink></li>
                </ul>
            </nav>
        </>
    );
};
