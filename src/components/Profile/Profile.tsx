import React from 'react';
import style from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <article className={style.content}>
                <img className={style.img_article}
                     src="/assets/img/view.jpg" alt="viewCity"/>
                <ProfileInfo name={"Valentin Prokofev"} age={"34"} city={"Moscow"}/>
                <MyPostsContainer/>
            </article>
        </>
    );
};
