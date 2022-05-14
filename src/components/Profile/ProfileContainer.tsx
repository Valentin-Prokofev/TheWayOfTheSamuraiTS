import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {ProfileType, setUserProfile} from "../../Redux/profile-page-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type MapStatePropsType = {
    profile: ProfileType | null
}

type MapDispatchPropsType = {
    setUserProfile: (userProfile: ProfileType) => void
}

type PathParamsType = {
    userId: string
}
type ProfileContainerPropsType = MapStatePropsType & MapDispatchPropsType

type MainProfileContainerPropsType = RouteComponentProps<PathParamsType> & ProfileContainerPropsType

class ProfileContainer extends React.Component<MainProfileContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId

        axios
            .get<ProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    profile: state.profilePage.profile
})

let WithUrlProfileContainer = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithUrlProfileContainer)

