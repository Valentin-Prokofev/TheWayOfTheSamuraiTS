import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {PostPropsType} from "./Post/Post";


export const MyPosts = () => {
    return (
        <>
            <section className={style.my_posts}>
                <Post message={"Hello!"} likeCount = {25}/>
                <Post message={"How are you"} likeCount = {30}/>
                <Post message={"It's my first post"} likeCount = {2}/>
                <Post message={"Hello!"} likeCount = {36}/>
            </section>

        </>
    );
};
