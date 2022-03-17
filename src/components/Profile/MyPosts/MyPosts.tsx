import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostPropsType} from "./Post/Post";


export const MyPosts = () => {

    let postsData = [
        {id: 1, message: "Hello!", likesCount : 25},
        {id: 2, message: "How are you", likesCount : 30},
        {id: 3, message: "It's my first post", likesCount : 27},
        {id: 4, message: "Hello!", likesCount : 23}
    ]

    return (
        <>
            <section className={style.my_posts}>
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
            </section>

        </>
    );
};
