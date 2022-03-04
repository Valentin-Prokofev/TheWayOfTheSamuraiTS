import React from 'react';

export const Navbar = () => {
    return (
        <nav className={"nav"}>
            <ul>
                <li className={"nav-link"}><a href={"#"}>Profile</a></li>
                <li className={"nav-link"}><a href={"#"}>Messages</a></li>
                <li className={"nav-link"}><a href={"#"}>News</a></li>
                <li className={"nav-link"}><a href={"#"}>Music</a></li>
                <li className={"nav-link"}><a href={"#"}>Settings</a></li>
            </ul>
        </nav>
    );
};
