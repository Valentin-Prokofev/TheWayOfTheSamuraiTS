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
import {ActionsTypes, StoreType} from "./Redux/store";

type AppPropsType = {
    store: StoreType
    dispatch: (action: ActionsTypes) => void
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
                        store={props.store}
                        messagePageType={state.messagesPage}
                        dispatch={props.dispatch}
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
