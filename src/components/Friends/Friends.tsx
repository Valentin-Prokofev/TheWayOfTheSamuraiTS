import React from 'react';
import style from "./Friends.module.css"

export type friendsDataPropsType = {
    friend: string
}

// type FriendsPropsType = {
//     friendsData:Array<friendsDataPropsType>
// }

const Friends = (props:friendsDataPropsType) => {

    // let friends = props.friendsData.map((friends)=> friends.friend)
    // console.log(friends)
    return (
        <>
              <li className={style.name_friends}>{props.friend}</li>
        </>
    );
};

export default Friends;