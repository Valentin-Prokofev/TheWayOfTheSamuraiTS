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
                     src="https://ic.pics.livejournal.com/zdorovs/16627846/985307/985307_original.jpg" alt="view"/>
                <ProfileInfo name={"Valentin Prokofev"} age={"34"} city={"Moscow"}/>
                <MyPostsContainer/>
            </article>
        </>
    );
};
