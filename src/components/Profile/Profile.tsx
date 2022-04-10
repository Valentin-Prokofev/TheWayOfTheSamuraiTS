import React from 'react';
import style from "./Profile.module.css";
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionsTypes, ProfilePageType} from "../../Redux/state";

type ProfilePropsType = {
    postsData:ProfilePageType
    // addPostCallBack:()=>void
    message:string
    // changeNewText: (newText: string) => void
    dispatch:(action:ActionsTypes)=>void
}


export const Profile = (props: ProfilePropsType) => {

    return (
        <>
            <article className={style.content}>
                <img className={style.img_article}
                     src="https://ic.pics.livejournal.com/zdorovs/16627846/985307/985307_original.jpg" alt="view"/>
                <ProfileInfo name={"Valentin Prokofev"} age={"34"} city={"Moscow"}/>
                <MyPosts
                    postsData={props.postsData}
                    // addPostCallBack={props.addPostCallBack}
                    message={props.message}
                    // changeNewText={props.changeNewText}
                    dispatch={props.dispatch}
                />
            </article>
        </>
    );
};
