import React from 'react';
import style from './App.module.css';
import {Route, RouteComponentProps, withRouter} from 'react-router-dom';
import {Navbar} from "./components/Navbar/Navbar";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reduser";
import {AppStateType} from "./Redux/redux-store";
import {Preloader} from "./components/common/Preloader/Preloader";


class App extends React.Component<MainAppPropsType> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <>
                <div className={style.app_wrapper}>
                    <HeaderContainer/>
                    <Navbar/>
                    <div className={style.app_wrapper_content}>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer/>}/>
                        <Route path="/users" render={() => <UsersContainer/>}/>
                        <Route path="/news" component={News}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/settings" component={Settings}/>
                        <Route path="/login" component={Login}/>
                    </div>
                </div>
            </>
        );
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    initialized: state.app.initialized
})

type MapStatePropsType = {
    initialized: boolean
}
type MapDispatchPropsType = {
    initializeApp: () => void
}
type AppPropsType = MapDispatchPropsType & MapStatePropsType
type MainAppPropsType = RouteComponentProps & AppPropsType

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);

