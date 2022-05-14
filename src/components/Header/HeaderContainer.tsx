import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {setAuthUserData} from "../../Redux/auth-reduser";
import {AppStateType} from "../../Redux/redux-store";
import {usersAPI} from "../../api/api";

export type MapStatePropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type MapDispatchPropsType = {
    setAuthUserData: (userId: number, email: string, login: string, isAuth: boolean) => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {
    componentDidMount() {
            usersAPI.getAuthUser()
            .then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login, true)
                }
            })
    }

    render() {
        return <Header
            // setAuthUserData={this.props.setAuthUserData}
            // userId={this.props.userId}
            // email={this.props.email}
            // login={this.props.login}
            // isAuth={this.props.isAuth}
            {...this.props}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType  => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);

