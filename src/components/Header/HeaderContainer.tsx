import React from 'react';
import {Header} from "./Header";
import {connect} from "react-redux";
import {logout} from "../../Redux/auth-reduser";
import {AppStateType} from "../../Redux/redux-store";

export type MapStatePropsType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
}

type MapDispatchPropsType = {

    logout: () => void
}

type HeaderContainerPropsType = MapStatePropsType & MapDispatchPropsType

class HeaderContainer extends React.Component<HeaderContainerPropsType> {

    render() {
        return <Header
            {...this.props}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth,
    }
}


export default connect(mapStateToProps, {logout})(HeaderContainer);

