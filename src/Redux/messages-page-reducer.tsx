import {ActionsTypes, DialogsMessagesDataType, MessagesPageType} from "./state";

export const messagesPageReducer = (state: MessagesPageType, action: ActionsTypes) => {

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
        type:"ADD_MESSAGE-FOR-DIALOGS",
        body: newText
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

export const sendMessageForDialogsMessageCreator = () => {   //вспомогательная функция для отправки нового сообщения
    return {
        type:"SEND-MESSAGE-FOR-DIALOGS",
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

