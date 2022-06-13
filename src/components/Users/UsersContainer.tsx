import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {
    followSuccess, getUsers,
    InitialStateType,
    setCurrentPage,
    unFollowSuccess,
} from "../../Redux/users-reduser";
import {UsersPresent} from "./UsersPresent";
import {Preloader} from "../common/Preloader/Preloader";
import {compose} from "redux";
import {withRouter} from "react-router-dom";

export type UsersPropsType = MapStatePropsType & MapDispatchPropsType

class UsersContainer extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <UsersPresent
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    usersPage={this.props.usersPage}
                    unFollow={this.props.unFollowSuccess}
                    follow={this.props.followSuccess}
                    followingInProgress={this.props.followingInProgress}
                />
            </>
        )
    }
}

export type MapStatePropsType = {
    usersPage: InitialStateType,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}

type MapDispatchPropsType = {
    followSuccess: (userId: number) => void
    unFollowSuccess: (userId: number) => void
    setCurrentPage: (page: number) => void
    getUsers: (currentPage: number, pageSize: number) => void
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        usersPage: state.users,
        pageSize: state.users.pageSize,
        totalUsersCount: state.users.totalUsersCount,
        currentPage: state.users.currentPage,
        isFetching: state.users.isFetching,
        followingInProgress: [],
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {
        followSuccess,
        unFollowSuccess,
        setCurrentPage,
        getUsers,
    }),
    withRouter,
)(UsersContainer)
