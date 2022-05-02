import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css"
import axios from "axios";

export const Users = (props: UsersPropsType) => {
    const getUsers = () => {
        if (props.usersPage.users.length === 0) {
            axios
                .get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data["items"])
                })
            // props.setUsers([
            //     {
            //         id: 1,
            //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
            //         followed: false,
            //         fullName: "Dmitry",
            //         status: "i am a boss",
            //         location: {city: "Minsk", country: "Belarus"}
            //     },
            //     {
            //         id: 2,
            //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
            //         followed: true,
            //         fullName: "Sasha",
            //         status: "i am a boss too",
            //         location: {city: "Moscow", country: "Russia"}
            //     },
            //     {
            //         id: 3,
            //         photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
            //         followed: false,
            //         fullName: "Anton",
            //         status: "i am a boss too",
            //         location: {city: "Kiev", country: "Ukraine"}
            //     }
            // ])
        }
    }

    console.log(props.usersPage.users)
    return(
        <div>
            <button onClick={getUsers}>get users</button>
            {
                props.usersPage.users.map((u) => (
                        <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.user_photo}
                                 src={u.photos.small !== null ? u.photos.small : '/assets/img/avatarLogoDefault.png'}                                 alt="avatar"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => props.follow(u.id)}>Follow</button>}
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

