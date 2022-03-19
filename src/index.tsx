import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import state from "./Redux/state";


// let dialogsUsersData = [
//     {id: 1, name: "Dimych"},
//     {id: 2, name: "Andrey"},
//     {id: 3, name: "Sveta"},
//     {id: 4, name: "Sasha"},
//     {id: 5, name: "Victor"},
//     {id: 6, name: "Valera"}
// ]
//
// let dialogsMessagesData = [
//     {id: 1, message: "Hi!"},
//     {id: 2, message: "How is your it-kamasutra?"},
//     {id: 3, message: "This is to really hard!!!"},
//     {id: 4, message: "Yo"},
//     {id: 5, message: "Yo"},
//     {id: 6, message: "Yo"}
// ]
//
// let postsData = [
//     {id: 1, message: "Hello!", likesCount : 25},
//     {id: 2, message: "How are you", likesCount : 30},
//     {id: 3, message: "It's my first post", likesCount : 27},
//     {id: 4, message: "Hello!", likesCount : 23}
// ]


ReactDOM.render(
    <App
        dialogsUsersData={state.messagesPage.dialogsUsersData}
        dialogsMessagesData={state.messagesPage.dialogsMessagesData}
        postsData={state.profilePage.postsData}
        friendsData={state.friendsPage.friendsData}
    />,
  document.getElementById('root')
);