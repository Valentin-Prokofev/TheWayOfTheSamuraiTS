import React from 'react';


let store: StoreType = {               //  делаем ооп хранилище для инкапсуляции
    _state: {
        messagesPage: {
            dialogsUsersData: [
                {id: 1, name: "Dimych"},
                {id: 2, name: "Andrey"},
                {id: 3, name: "Sveta"},
                {id: 4, name: "Sasha"},
                {id: 5, name: "Victor"},
                {id: 6, name: "Valera"}
            ],
            newMessageForDialogs: "",
            dialogsMessagesData: [
                {id: 1, message: "Hi!"},
                {id: 2, message: "How is your it-kamasutra?"},
                {id: 3, message: "This is to really hard!!!"},
                {id: 4, message: "Yo"},
                {id: 5, message: "Yo"},
                {id: 6, message: "Yo"}
            ]
        },
        profilePage: {
            messageForNewPost: "",
            postsData: [
                {id: 1, message: "Hello!", likesCount: 25},
                {id: 2, message: "How are you", likesCount: 30},
                {id: 3, message: "It's my first post", likesCount: 27},
                {id: 4, message: "Hello!", likesCount: 23}
            ]
        },
        sideBar: {}
    },
    _callSubscriber() {                //личная функция стора, интерфейсный метод(API)
        //перезатертая функция
        console.log("state changed")
    },
    subscribe(observer) {
        this._callSubscriber = observer
    },            // не относится к методам меняющим стейт
    getState() {
        return this._state
    },                     // не относится к методам меняющим стейт
    changeNewText(newText: string) {
        this._state.profilePage.messageForNewPost = newText
        this._callSubscriber()
    },     //меняет стейт
    addPost() {                               //меняет стейт
        let newPost: PostsDataType = {
            id: 5,
            message: this._state.profilePage.messageForNewPost,
            likesCount: 42
        }
        this._state.profilePage.postsData.push(newPost)
        this._state.profilePage.messageForNewPost = ""
        this._callSubscriber();
    },
    dispatch(action) {               //экшен это объект у котогоро одно из св-тв будет type:"ADD_POST"
        if (action.type === "ADD-POST") {
            let newPost: PostsDataType = {
                id: 5,
                message: this._state.profilePage.messageForNewPost,
                likesCount: 42
            }
            this._state.profilePage.postsData.push(newPost)
            this._state.profilePage.messageForNewPost = ""
            this._callSubscriber();
        } else if (action.type === "CHANGE-NEW-TEXT") {
            this._state.profilePage.messageForNewPost = action.newText
            this._callSubscriber()
        }
    }
}


type PostsDataType = {
    id: number
    message: string
    likesCount: number
}

type DialogsMessagesDataType = {
    id: number
    message: string
}

type DialogsUsersDataType = {
    id: number
    name: string
}

export type MessagesPageType = {
    dialogsUsersData: Array<DialogsUsersDataType>
    newMessageForDialogs: string
    dialogsMessagesData: Array<DialogsMessagesDataType>
}

export type ProfilePageType = {
    postsData: Array<PostsDataType>
    messageForNewPost: string
}

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

// export type ActionsTypes = AddPostActionType | ChangeNewTextActionType
//
// type AddPostActionType = ReturnType<typeof addPostActionCreator> //типизируем на основании объекта приходящего в функции
//
// export type ChangeNewTextActionType = ReturnType<typeof changeNewTextActionCreator> //типизируем на основании объекта приходящего в функции

export type ActionsTypes = ReturnType<typeof addPostActionCreator> | ReturnType<typeof changeNewTextActionCreator> // тоже что закоменчено сверху на 3х строках

export const addPostActionCreator = () => {   //вспомогательная функция для упаковки экшена
    return {
        type: "ADD-POST"
    } as const    //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

export const changeNewTextActionCreator = (newText:string) => {  //вспомогательная функция для упаковки экшена
    return {
        type:"CHANGE-NEW-TEXT",
        newText: newText
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}


export default store;
// window.store = store;

// export const addMessage = () => {                           фУНКЦИЯ ОТВЕЧАЮЩАЯ ЗА ДОБАВЛЕНИЕ НОВОГО СООБЩЕНИЯ В DIALOGS
//     let newMessage: DialogsMessagesDataType = {                          ДЕЛАЛАСЬ КАК ДЗ
//         id: 7,
//         message: state.messagesPage.newMessageForDialogs
//     }
//     state.messagesPage.dialogsMessagesData.push(newMessage)
//     state.messagesPage.newMessageForDialogs = ""
//     renderEntireTree();
// }

// export const changeNewMessage = (newMessageText: string) => { фУНКЦИЯ ОТВЕЧАЮЩАЯ ЗА ДОБАВЛЕНИЕ НОВОГО СООБЩЕНИЯ В DIALOGS
//     state.messagesPage.newMessageForDialogs = newMessageText
//     console.log(newMessageText)
//     renderEntireTree()
// }