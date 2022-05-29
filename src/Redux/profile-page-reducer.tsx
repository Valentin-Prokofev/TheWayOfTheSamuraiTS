import {ActionsTypes} from "./redux-store";
import {PhotosType} from "./users-reduser";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostsDataType = {
    id: number
    message: string
    likesCount: number
}
export type ProfileContactsType = {
    facebook: string | null
    website: string | null
    vk: string | null
    twitter: string | null
    instagram: string | null
    youtube: string | null
    github: string | null
    mainLink: string | null
}
export type ProfileType = {
    aboutMe: string
    contacts: ProfileContactsType
    lookingForAJob: boolean
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: PhotosType
}
export type ProfilePageType = {
    status: string
    postsData: Array<PostsDataType>
    messageForNewPost: string
    profile: ProfileType | null
}

export let initialState: ProfilePageType = {
    status: "",
    messageForNewPost: "",
    profile: null as ProfileType | null,
    postsData: [
        {id: 1, message: "Hello!", likesCount: 25},
        {id: 2, message: "How are you", likesCount: 30},
        {id: 3, message: "It's my first post", likesCount: 27},
        {id: 4, message: "Hello!", likesCount: 23}
    ] as Array<PostsDataType>,
}

export type initialStateType = typeof initialState

export const profilePageReducer = (state: initialStateType = initialState, action: ActionsTypes): initialStateType => {
    switch (action.type) {
        case "ADD-POST": {
            let newPost: PostsDataType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 42
            }
            return {
                ...state,
                postsData: [...state.postsData, newPost], //запихиваем новый пост в стейт
                messageForNewPost: ""
            }
        }
        case "CHANGE-NEW-TEXT": {
            return {...state, messageForNewPost: action.newText}
        }
        case "SET-USER-PROFILE": {
            return {...state, profile: action.payload.userProfile}
        }
        case "SET-STATUS-PROFILE": {
            return {...state, status: action.payload.status}
        }
        default:
            return state
    }
}


//Actions Creators
export const addPostActionCreator = () => {   //вспомогательная функция для отправки нового поста
    return {
        type: "ADD-POST"
    } as const    //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

export const changeNewTextActionCreator = (newText: string) => {  //вспомогательная функция для изминения текста в новом посте
    return {
        type: "CHANGE-NEW-TEXT",
        newText: newText
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

export const setUserProfile = (userProfile: ProfileType) => {  //получаем страницу пользователя
    return {
        type: "SET-USER-PROFILE",
        payload: {
            userProfile
        }
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

export const setStatusProfile = (status: string) => {  //получаем статус пользователя
    return {
        type: "SET-STATUS-PROFILE",
        payload: {
            status
        }
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

//Thunks Creators

export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    usersAPI.getProfile(userId)
        .then(response => {
            dispatch(setUserProfile(response.data))
        })
}

export const getStatusProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId)
        .then(response => {
            dispatch(setStatusProfile(response.data))
        })
}

export const updateStatusProfile = (status: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if(response.data.resultCode === 0) {
                dispatch(setStatusProfile(status))
            }
        })
}