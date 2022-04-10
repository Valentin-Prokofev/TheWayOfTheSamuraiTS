import React from 'react';
import style from './App.module.css';
import {Route} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import state, {ActionsTypes, RootStateType, StoreType} from "./Redux/state";

type AppPropsType = {
    store: StoreType
    state: RootStateType
    // addPost: () => void
    // changeNewText: (newText: string) => void
    dispatch: (action: ActionsTypes) => void

    // addMessage: () => void                   ДЗ
    // changeNewMessage: (newMessage: string) => void
}

const App = (props: AppPropsType) => {
    const state = props.store.getState()

    return (
        <>
            <div className={style.app_wrapper}>
                <Header/>
                <Navbar/>
                <div className={style.app_wrapper_content}>
                    <Route path="/profile" render={() =>
                        <Profile
                        postsData={state.profilePage}
                        // addPostCallBack={props.addPost}ЮЮЮ
                        dispatch={props.dispatch}
                        message={state.profilePage.messageForNewPost}
                        // changeNewText={props.changeNewText}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        messagePageType={state.messagesPage}
                        // addMessage={props.addMessage} ФУНКЦИЯ ИЗ ДЗ
                        // changeNewMessage={props.changeNewMessage} ФУНКЦИЯ ИЗ ДЗ
                        messageForDialogs={state.messagesPage.newMessageForDialogs}
                    />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                </div>
            </div>
        </>
    );
}

export default App;
