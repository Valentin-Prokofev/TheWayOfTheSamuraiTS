import {ActionsTypes,} from "./redux-store";

export type DialogsMessagesDataType = {
    id: number
    message: string
}

export type DialogsUsersDataType = {
    id: number
    name: string
}

export type MessagesPageType = {
    dialogsUsersData: Array<DialogsUsersDataType>
    // newMessageForDialogs: string
    dialogsMessagesData: Array<DialogsMessagesDataType>
}

export let initialState = {
    dialogsUsersData: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Victor"},
        {id: 6, name: "Valera"}
    ] as Array<DialogsUsersDataType>,
    // newMessageForDialogs: "",
    dialogsMessagesData: [
        {id: 1, message: "Hi!"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "This is to really hard!!!"},
        {id: 4, message: "Yo"},
        {id: 5, message: "Yo"},
        {id: 6, message: "Yo"}
    ]  as Array<DialogsMessagesDataType>
}

export type InitialStateType = typeof initialState

export const messagesPageReducer = (state:InitialStateType = initialState, action: ActionsTypes):InitialStateType => {

    switch (action.type) {
        case "SEND-MESSAGE-FOR-DIALOGS": {
            let newMessageForDialogs: DialogsMessagesDataType = {    //засовываем новое сообщение в переменную
                id: 6,
                message: action.newMessageBody
            }
           return {...state,           //создаем копию объекта для иммутабельности данных
                // newMessageForDialogs: "",          // обнуляем после добавления
                dialogsMessagesData: [...state.dialogsMessagesData, newMessageForDialogs]    // создаем копию только той части стейта которую будем менять и запихиваем новое сообщеие в конец стейта
            }
        }
        default:
            return state
    }
}

export const sendMessageForDialogsMessageCreator = (newMessageBody: string) => {   //вспомогательная функция для отправки нового сообщения
    return {
        type: "SEND-MESSAGE-FOR-DIALOGS",
        newMessageBody
    } as const //воспринимаем return как константу чтобы тайпскрипт корректно протипизировал
}

