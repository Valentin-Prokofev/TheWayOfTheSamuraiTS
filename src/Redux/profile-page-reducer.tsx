import {ActionsTypes, PostsDataType, ProfilePageType} from "./store";

export let initialState:ProfilePageType = {
    messageForNewPost: "",
    postsData: [
        {id: 1, message: "Hello!", likesCount: 25},
        {id: 2, message: "How are you", likesCount: 30},
        {id: 3, message: "It's my first post", likesCount: 27},
        {id: 4, message: "Hello!", likesCount: 23}
    ]
}

export const profilePageReducer = (state = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case "ADD-POST":
            let newPost: PostsDataType = {
                id: 5,
                message: state.messageForNewPost,
                likesCount: 42
            }
            state.postsData.push(newPost)   //запихиваем новый пост в стейт
            state.messageForNewPost = ""
            // _callSubscriber();            //теперь обновляем стейт в сторе
            return state                 //чтобы не писать брейк
        case "CHANGE-NEW-TEXT":
            state.messageForNewPost = action.newText
            // this._callSubscriber()         //теперь обновляем стейт в сторе
            return state
        default:                           // если экшн неп подошел возвращаем стейт без изминений
            return state
    }
    // оставим внизу иф на всякий
    // if (action.type === "ADD-POST") {        //добавление нового поста
    //     let newPost: PostsDataType = {
    //         id: 5,
    //         message: state.messageForNewPost,
    //         likesCount: 42
    //     }
    //     state.postsData.push(newPost)   //запихиваем новый пост в стейт
    //     state.messageForNewPost = ""
    //     // _callSubscriber();
    // } else if (action.type === "CHANGE-NEW-TEXT") {     // процесс изминения текс-ареи для нового поста
    //     state.messageForNewPost = action.newText
    //     // this._callSubscriber()
    // }
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