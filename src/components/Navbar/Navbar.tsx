import React from 'react';
import { NavLink } from 'react-router-dom';
import style from "./Navbar.module.css";
import Friends, {friendsDataPropsType} from "../Friends/Friends";

type FriendsPropsType = {
    friendsData:Array<friendsDataPropsType>
}

export const Navbar = (props:FriendsPropsType) => {

    let friendsElement = props.friendsData.map((friends)=>
        <Friends friend={friends.friend} />)
    return (
        <>
            <nav className={style.nav}>
                <ul>
                    <li className={style.nav_link}><NavLink to={"/profile"} activeClassName={style.active}>Profile</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/dialogs"} activeClassName={style.active}>Messages</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/news"} activeClassName={style.active}>News</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/music"} activeClassName={style.active}>Music</NavLink></li>
                    <li className={style.nav_link}><NavLink to={"/settings"} activeClassName={style.active}>Settings</NavLink></li>
                    {/*<li className={style.nav_link}><NavLink to={"/friends"} activeClassName={style.active}>Friends</NavLink></li>*/}
                </ul>
                <span className={style.title_friends}>Friends</span>
                {friendsElement}
            </nav>
        </>
    );
};
