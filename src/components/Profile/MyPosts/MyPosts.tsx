import React from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {postsDataArray} from "../../../App";

type MyPostsPropsType = {
    postsData:Array<postsDataArray>
}

export const MyPosts = (props:MyPostsPropsType) => {

    // let postsData = [
    //     {id: 1, message: "Hello!", likesCount : 25},
    //     {id: 2, message: "How are you", likesCount : 30},
    //     {id: 3, message: "It's my first post", likesCount : 27},
    //     {id: 4, message: "Hello!", likesCount : 23}
    // ]

    let postsElements = props.postsData.map((post)=>
        <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <>
            <section className={style.my_posts}>
                {postsElements}
            </section>

        </>
    );
};
