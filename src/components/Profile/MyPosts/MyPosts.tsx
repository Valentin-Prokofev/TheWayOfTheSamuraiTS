import React, {ChangeEvent} from 'react';
import style from "./MyPosts.module.css";
import {Post} from "./Post/Post";
import {ProfilePageType} from "../../../Redux/state";

type MyPostsPropsType = {
    postsData: ProfilePageType
    addPostCallBack: () => void
    message: string
    changeNewText: (newText: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.postsData.postsData.map((post) =>
        <Post key={post.id} message={post.message} likesCount={post.likesCount}/>)

    let addPost = () => {
        props.addPostCallBack()
    }

    let callBackHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeNewText(e.currentTarget.value)
    }


    return (
        <>
            <section className={style.my_posts}>
                <h3>My posts</h3>
                <div>
                    <div>
                        <textarea value={props.message} onChange={callBackHandler}/>
                    </div>
                    <div>
                        <button onClick={addPost}>add post</button>
                    </div>
                </div>
                <div>
                    {postsElements}
                </div>
            </section>
        </>
    );
};
