import React from 'react';
import style from "./Profile.module.css";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import view from "../../Image/view.jpg"
import {ProfileType} from "../../Redux/profile-page-reducer";

type ProfilePropsType = {
    profile: ProfileType | null
    status: string
    updateStatusProfile: () => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <>
            <article className={style.content}>
                <img className={style.img_article}
                     src={view} alt="viewCity"/>
                <ProfileInfo
                    name={"Valentin Prokofev"}
                    age={"34"} city={"Moscow"}
                    profile={props.profile}
                    status={props.status}
                    updateStatusProfile={props.updateStatusProfile}
                />
                <MyPostsContainer/>
            </article>
        </>
    );
};
