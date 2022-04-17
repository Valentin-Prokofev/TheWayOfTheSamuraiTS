import {ActionsTypes, DialogsMessagesDataType, MessagesPageType, ProfilePageType} from "./store";

export let initialState: MessagesPageType = {
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
}

export const messagesPageReducer = (state = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD_MESSAGE-FOR-DIALOGS":
            state.newMessageForDialogs = action.body
            return state
        case "SEND-MESSAGE-FOR-DIALOGS":
            let newMessageForDialogs: DialogsMessagesDataType = {
                id: 6,
                message: state.newMessageForDialogs
            }   //засовываем новое сообщение в переменную
            state.newMessageForDialogs = ""             // обнуляем после добавления
            state.dialogsMessagesData.push(newMessageForDialogs)  //запихиваем новое сообщеие в стейт
            return state
        default:
            return state
    }

    // if (action.type === "ADD_MESSAGE-FOR-DIALOGS") {          // процесс изминения текс-ареи для нового сообщения в дайлогс
    //     state.newMessageForDialogs = action.body
    // } else if (action.type === "SEND-MESSAGE-FOR-DIALOGS") {    // процесс добавления нового сообщения в дайлогс
    //     let newMessageForDialogs: DialogsMessagesDataType = {
    //         id: 6,
    //         message: state.newMessageForDialogs
    //     }   //засовываем новое сообщение в переменную
    //     state.newMessageForDialogs = ""             // обнуляем после добавления
    //     state.dialogsMessagesData.push(newMessageForDialogs)  //запихиваем новое сообщеие в стейт
    // }
}

export const addMessageForDialogsMessageCreator = (newText: string) => {   //вспомогательная функция для изминения текста нового сообщения
    return {
        type: "ADD_MESSAGE-FOR-DIALOGS",
        body: newText
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

export const sendMessageForDialogsMessageCreator = () => {   //вспомогательная функция для отправки нового сообщения
    return {
        type: "SEND-MESSAGE-FOR-DIALOGS",
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

