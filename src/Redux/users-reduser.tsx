import {ActionsTypes} from "./redux-store";

export type LocationType = {
    city: string
    country: string
}
export type PhotosType = {
    small: string
    large: string
}
export type UserType = {
    id: number
    photos: PhotosType
    followed: boolean
    name: string
    status: string
    // location: LocationType
}

export let initialState:InitialStateType = {
    users: [
        // {
        //     id: 1,
        //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
        //     followed: false,
        //     fullName: "Dmitry",
        //     status: "i am a boss",
        //     location: {city: "Minsk", country: "Belarus"}
        // },
        // {
        //     id: 2,
        //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
        //     followed: true,
        //     fullName: "Sasha",
        //     status: "i am a boss too",
        //     location: {city: "Moscow", country: "Russia"}
        // },
        // {
        //     id: 3,
        //     photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxyDRU6K09ugr3QGhTFsr1q8fzB5zbH3cJLw&usqp=CAU",
        //     followed: false,
        //     fullName: "Anton",
        //     status: "i am a boss too",
        //     location: {city: "Kiev", country: "Ukraine"}
        // }
    ]
}

export type InitialStateType = {
    users: Array<UserType>
}

export const usersReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: true} : u)}
        case "UNFOLLOW":
            return {...state, users: state.users.map(u => u.id === action.id ? {...u, followed: false} : u)}
        case "SET-USERS":
            return {...state, users: [...state.users, ...action.users]}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        id: userId
    } as const
}

export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        id: userId
    } as const
}

export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: "SET-USERS",
        users: users
    } as const
}