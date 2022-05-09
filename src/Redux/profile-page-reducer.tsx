import {ActionsTypes} from "./redux-store";
import {PhotosType} from "./users-reduser";

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
    postsData: Array<PostsDataType>
    messageForNewPost: string
    profile: ProfileType | null
}

export let initialState: ProfilePageType = {
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
        default:                           // если экшн неп подошел возвращаем стейт без изминений
            return state
    }
}

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

export const setUserProfile = (userProfile: ProfileType) => {  //вспомогательная функция для изминения текста в новом посте
    return {
        type: "SET-USER-PROFILE",
        payload: {
            userProfile
        }
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}