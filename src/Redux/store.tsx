import React from 'react';
import {ProfilePageType} from "./profile-page-reducer";
import {MessagesPageType} from "./messages-page-reducer";
import {ActionsTypes} from "./redux-store";


// let store: StoreType = {               //  делаем ооп хранилище для инкапсуляции
//     _state: {
//         messagesPage: {
//             dialogsUsersData: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrey"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Victor"},
//                 {id: 6, name: "Valera"}
//             ],
//             newMessageForDialogs: "",
//             dialogsMessagesData: [
//                 {id: 1, message: "Hi!"},
//                 {id: 2, message: "How is your it-kamasutra?"},
//                 {id: 3, message: "This is to really hard!!!"},
//                 {id: 4, message: "Yo"},
//                 {id: 5, message: "Yo"},
//                 {id: 6, message: "Yo"}
//             ]
//         },
//         profilePage: {
//             messageForNewPost: "",
//             postsData: [
//                 {id: 1, message: "Hello!", likesCount: 25},
//                 {id: 2, message: "How are you", likesCount: 30},
//                 {id: 3, message: "It's my first post", likesCount: 27},
//                 {id: 4, message: "Hello!", likesCount: 23}
//             ]
//         },
//         sideBar: {}
//     },
//     _callSubscriber() {                //личная функция стора, интерфейсный метод(API)
//         //перезатертая функция
//         console.log("state changed")
//     },
//     subscribe(observer) {
//         this._callSubscriber = observer
//     },            // не относится к методам меняющим стейт
//     getState() {
//         return this._state
//     },                     // не относится к методам меняющим стейт
//     changeNewText(newText: string) {
//         this._state.profilePage.messageForNewPost = newText
//         this._callSubscriber()
//     },     //меняет стейт
//     addPost() {                               //меняет стейт
//         let newPost: PostsDataType = {
//             id: 5,
//             message: this._state.profilePage.messageForNewPost,
//             likesCount: 42
//         }
//         this._state.profilePage.postsData.push(newPost)
//         this._state.profilePage.messageForNewPost = ""
//         this._callSubscriber();
//     },
//     dispatch(action) {               //экшен это объект у котогоро одно из св-тв будет type:"ADD_POST"
//         this._state.profilePage = profilePageReducer(this._state.profilePage, action)  //отправляем всю закоменченную ниже логику в редюсеры
//         this._state.messagesPage = messagesPageReducer(this._state.messagesPage, action)
//         this._state.sideBar = sideBarReducer(this._state.sideBar, action)
//         this._callSubscriber()
//     }
// }

// export type PostsDataType = {
//     id: number
//     message: string
//     likesCount: number
// }

// export type DialogsMessagesDataType = {
//     id: number
//     message: string
// }
//
// export type DialogsUsersDataType = {
//     id: number
//     name: string
// }


// export type ProfilePageType = {
//     postsData: Array<PostsDataType>
//     messageForNewPost: string
// }

export type SideBarType = {}

export type RootStateType = {
    messagesPage: MessagesPageType
    profilePage: ProfilePageType
    sideBar: SideBarType
}

export type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    changeNewText: (newText: string) => void
    addPost: () => void
    _callSubscriber: () => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsTypes) => void
}

// export type ActionsTypes =
//     ReturnType<typeof addPostActionCreator>
//     | ReturnType<typeof changeNewTextActionCreator>
//     | ReturnType<typeof addMessageForDialogsMessageCreator>
//     | ReturnType<typeof sendMessageForDialogsMessageCreator>
//     | ReturnType<typeof followAC>
//     | ReturnType<typeof unFollowAC>
//     | ReturnType<typeof setUsersAC>
