import React from 'react';
import style from "./Post.module.css";

export type PostPropsType = {
    message: string
    likesCount: number
}


export const Post:React.FC<PostPropsType> = (props) => {
    return (
        <>
            <div className={style.post}>{props.message}</div>
            <span className={style.like}>like {props.likesCount}</span>
        </>
    );
};
