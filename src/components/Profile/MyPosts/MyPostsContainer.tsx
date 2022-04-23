import React from 'react';
import {ProfilePageType} from "../../../Redux/profile-page-reducer";
import {addPostActionCreator, changeNewTextActionCreator} from "../../../Redux/profile-page-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    postsData:ProfilePageType
    message: string
}

type MapDispatchPropsType = {
    updateNewPostText:(text: string)=>void
    addPost:()=>void
}

export type MyPostsPropsType = MapDispatchPropsType & MapStatePropsType

const mapStateToProps = (state: AppStateType):MapStatePropsType => {
    return {
        postsData: state.profilePage,
        message: state.profilePage.messageForNewPost
    }
}

const mapDispatchToProps = (dispatch: Dispatch):MapDispatchPropsType => {
    return {
        updateNewPostText: (text: string) => {
            dispatch(changeNewTextActionCreator(text))
        },
        addPost: () => {
            dispatch(addPostActionCreator())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

