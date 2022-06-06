import React from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {getStatusProfile, getUserProfile, ProfileType, updateStatusProfile} from "../../Redux/profile-page-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {compose} from "redux";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";

type MapStatePropsType = {
    profile: ProfileType | null
    status: string
    authorizedUserId: number | null
    isAuth: boolean
}

type MapDispatchPropsType = {
    getUserProfile: (numberId: number) => void
    getStatusProfile: (numberId: number) => void
    updateStatusProfile: () => void
}

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MainProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<MainProfileContainerPropsType> {
    componentDidMount() {
        let userId = +this.props.match.params.userId
        if (!userId && this.props.authorizedUserId !== null) {
            userId = this.props.authorizedUserId
        }
        this.props.getUserProfile(userId)
        this.props.getStatusProfile(userId)
    }

    render() {
        return (
            <Profile
                profile={this.props.profile}
                status={this.props.status}
                updateStatusProfile={this.props.updateStatusProfile}
            />
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose<React.ComponentType>(
    connect(mapStateToProps, {getUserProfile, getStatusProfile, updateStatusProfile}),
    withRouter,
    WithAuthRedirect
)(ProfileContainer)
