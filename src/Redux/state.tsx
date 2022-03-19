import React from 'react';


let state = {
    messagesPage: {
        dialogsUsersData: [
            {id: 1, name: "Dimych"},
            {id: 2, name: "Andrey"},
            {id: 3, name: "Sveta"},
            {id: 4, name: "Sasha"},
            {id: 5, name: "Victor"},
            {id: 6, name: "Valera"}
        ],
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
        postsData: [
            {id: 1, message: "Hello!", likesCount: 25},
            {id: 2, message: "How are you", likesCount: 30},
            {id: 3, message: "It's my first post", likesCount: 27},
            {id: 4, message: "Hello!", likesCount: 23}
        ]
    },
    friendsPage: {
        friendsData: [
            {id: 1, friend:"Sveta"},
            {id: 2, friend:"Sasha"},
            {id: 3, friend:"Victor"}

        ]
    }
}


export default state;