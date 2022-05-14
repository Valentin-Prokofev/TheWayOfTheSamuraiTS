import React from 'react';
import styles from "./Users.module.css";
import avatarLogo from "../../Image/avatarLogoDefault.png";
import {InitialStateType} from "../../Redux/users-reduser";
import {NavLink} from 'react-router-dom';
import axios from "axios";
import {usersAPI} from "../../api/api";

type UsersPropsTypePresent = {
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onPageChanged: (p: number) => void
    usersPage: InitialStateType
    unFollow: (userId: number) => void
    follow: (userId: number) => void
    toggleIsFollowingProgress: (isFetching: boolean, userId: number) => void
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
                                    debugger
                                    props.toggleIsFollowingProgress(true, u.id)
                                    // usersAPI.unFollow(u.id)
                                    axios
                                        .delete(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "85c919be-d7d6-40d9-b3b0-ec2e8d66a880"
                                                }
                                            }
                                        )
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.unFollow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })

                                }}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                                    props.toggleIsFollowingProgress(true, u.id)
                                    // usersAPI.unFollow(u.id)
                                    axios
                                        .post(
                                            `https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {},
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "85c919be-d7d6-40d9-b3b0-ec2e8d66a880"
                                                }
                                            }
                                        )
                                        .then(response => {
                                            if (response.data.resultCode === 0) {
                                                props.follow(u.id)
                                            }
                                            props.toggleIsFollowingProgress(false, u.id)
                                        })

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