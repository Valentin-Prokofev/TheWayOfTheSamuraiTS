import React from 'react';
import styles from "./Users.module.css";
import avatarLogo from "../../Image/avatarLogoDefault.png";
import {InitialStateType} from "../../Redux/users-reduser";
import {NavLink} from 'react-router-dom';

type UsersPropsTypePresent = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    usersPage: InitialStateType
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    followingInProgress: Array<number>
}

export const UsersPresent = (props: UsersPropsTypePresent) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map(p => {
                return <span
                    key={p}
                    className={props.currentPage === p ? styles.selected_page : ""}
                    onClick={() => {
                        props.onPageChanged(p)
                    }}
                >{p}</span>
            })}
            {
                props.usersPage.users.map((u) => (
                        <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to={"/profile/" + u.id}>
                                <img className={styles.user_photo}
                                     src={u.photos.small !== null ? u.photos.small : avatarLogo}
                                     alt="avatar"/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>}
                        </div>
                    </span>
                            <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                            <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                        </div>
                    )
                )
            }
        </div>
    );
};