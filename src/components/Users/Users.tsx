import React from 'react';
import {UsersPropsType} from "./UsersContainer";
import styles from "./Users.module.css"

export const Users = (props: UsersPropsType) => {
    if(props.usersPage.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
                followed: false,
                fullName: "Dmitry",
                status: "i am a boss",
                location: {city: "Minsk", country: "Belarus"}
            },
            {
                id: 2,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
                followed: true,
                fullName: "Sasha",
                status: "i am a boss too",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: 3,
                photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
                followed: false,
                fullName: "Anton",
                status: "i am a boss too",
                location: {city: "Kiev", country: "Ukraine"}
            }])
    }
    return (
        <div>
            {
                props.usersPage.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={styles.user_photo} src={u.photoUrl} alt="avatar"/>
                        </div>
                        <div>
                            {u.followed
                                ?<button onClick={()=> {props.unFollow(u.id)}}>Unfollow</button>
                                :<button onClick={()=>props.follow(u.id)}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </div>)
            }
        </div>
    );
};

