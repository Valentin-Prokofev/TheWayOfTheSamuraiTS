import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";


export const MyPosts = () => {
    return (
        <>
            <section className={style.my_posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </section>

        </>
    );
};
