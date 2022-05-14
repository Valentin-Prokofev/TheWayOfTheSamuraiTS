import {ActionsTypes} from "./redux-store";

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string | null
    large: string | null
}

export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
}

export type InitialStateType = {
    users: Array<UserType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    isFetching: boolean,
    followingInProgress: Array<number>,
}

export let initialState:InitialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 2,
    isFetching: false,
    followingInProgress: [],
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: action.users}
        case "SET-CURRENT-PAGE":
            return {...state, currentPage: action.payload.page}
        case "SET-TOTAL-USERS-COUNT":
            return {...state, totalUsersCount: action.payload.totalPageCount}
        case "TOGGLE-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-FOLLOWING-PROGRESS":
            return {...state,
                followingInProgress: action.payload.isFetching
                    ? [...state.followingInProgress, action.payload.userId]
                    : state.followingInProgress.filter(id => id !== action.payload.userId)
            }
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        id: userId
    } as const
}
export const unFollow = (userId: number) => {
    return {
        type: "UNFOLLOW",
        id: userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}
export const setCurrentPage = (page: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        payload: {
            page
        }
    } as const
}
export const setTotalUsersCount = (totalPageCount: number) => {
    return {
        type: "SET-TOTAL-USERS-COUNT",
        payload: {
            totalPageCount
        }
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        payload: {
            isFetching
        }
    } as const
}

export const toggleIsFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: "TOGGLE-FOLLOWING-PROGRESS",
        payload: {
            isFetching,
            userId,
        }
    } as const
}