import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "85c919be-d7d6-40d9-b3b0-ec2e8d66a880"
    }
})

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get(
            `users?page=${currentPage}&count=${pageSize}`
        )
            .then(response => {
                return response.data
            })
    },
    getAuthUser() {
        return instance.get(
            `auth/me`
        )
            .then(response => {
                return response.data
            })
    },
    unFollow(userId:number) {
        return instance.delete(
            `follow/${userId}`
        )
            .then(response => {
                return response.data
            })
    },
    follow(userId:number) {
        return instance.delete(
            `follow/${userId}`
        )
            .then(response => {
                return response.data
            })
    }
}



