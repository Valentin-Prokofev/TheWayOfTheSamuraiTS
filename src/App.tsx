import React from 'react';
import style from './App.module.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import Friends from "./components/Friends/Friends";

export type dialogsUsersDataArray = {
    id: number
    name: string
}

export type dialogsMessagesDataArray = {
    id: number
    message: string
}

export type postsDataArray = {
    id: number
    message: string
    likesCount: number
}

export type friendsDataPropsType = {
    id: number
    friend: string
}

export type AppPropsType = {
    dialogsUsersData: Array<dialogsUsersDataArray>
    dialogsMessagesData: Array<dialogsMessagesDataArray>
    postsData:Array<postsDataArray>
    friendsData:Array<friendsDataPropsType>
}

const App = (props: AppPropsType) => {
    return (

        <Router>
            <div className={style.app_wrapper}>
                <Header/>
                <Navbar friendsData={props.friendsData}/>
                <div className={style.app_wrapper_content}>
                    <Route path="/profile" render={() => <Profile
                        postsData={props.postsData}
                    />}/>
                    <Route path="/dialogs" render={() => <Dialogs
                        dialogsUsersData={props.dialogsUsersData}
                        dialogsMessagesData={props.dialogsMessagesData}
                    />}/>
                    <Route path="/news" component={News}/>
                    <Route path="/music" component={Music}/>
                    <Route path="/settings" component={Settings}/>
                    {/*<Route path="/friends" render={()=><Friends*/}
                    {/*friendsData={props.friendsData}*/}
                    {/*/>}/>*/}
                </div>

            </div>
        </Router>
    );
}

export default App;
