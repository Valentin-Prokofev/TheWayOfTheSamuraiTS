import React from 'react';
import style from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import view from "../../Image/view.jpg"
import {ProfileType} from "../../Redux/profile-page-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
}



export const Profile = (props:ProfilePropsType) => {
    console.log(props.profile)
    return (
        <>
            <article className={style.content}>
                <img className={style.img_article}
                     src={view} alt="viewCity"/>
                <ProfileInfo name={"Valentin Prokofev"} age={"34"} city={"Moscow"} profile={props.profile}/>
                <MyPostsContainer/>
            </article>
        </>
    );
};
