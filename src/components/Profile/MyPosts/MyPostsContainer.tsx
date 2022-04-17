import React from 'react';
import {ActionsTypes, ProfilePageType, StoreType} from "../../../Redux/store";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../Redux/profile-page-reducer";
import {MyPosts} from "./MyPosts";

type MyPostsPropsType = {
    // postsData?: ProfilePageType
    // message?: string
    // dispatch?: (action: ActionsTypes) => void
    store:StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {
    let state = props.store.getState()

    let addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    let updateNewPostText = (text:string) => {
        props.store.dispatch(changeNewTextActionCreator(text))
    }

    return (
        <>
            <MyPosts
                // postsData={props.postsData}
                postsData={state.profilePage}
                message={state.profilePage.messageForNewPost}
                updateNewPostText={updateNewPostText}
                addPost={addPost}/>
        </>
    );
};
