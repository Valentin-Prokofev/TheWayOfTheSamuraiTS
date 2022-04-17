import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType, StoreType} from "../../Redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type ProfilePropsType = {
    // postsData:ProfilePageType
    // // addPostCallBack:()=>void
    // message:string
    // // changeNewText: (newText: string) => void
    // dispatch:(action:ActionsTypes)=>void
    store:StoreType
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <article className={style.content}>
                <img className={style.img_article}
                     src="https://ic.pics.livejournal.com/zdorovs/16627846/985307/985307_original.jpg" alt="view"/>
                <ProfileInfo name={"Valentin Prokofev"} age={"34"} city={"Moscow"}/>
                <MyPostsContainer
                    store={props.store}
                    // postsData={props.postsData}
                    // message={props.message}
                    // dispatch={props.dispatch}
                />
            </article>
        </>
    );
};
