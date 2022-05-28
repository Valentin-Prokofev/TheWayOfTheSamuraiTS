import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        // "API-KEY": "85c919be-d7d6-40d9-b3b0-ec2e8d66a880"
        "API-KEY": "61438aeb-502d-474c-9295-8ea5ddc3a9e4"
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
    unFollow(userId:number) {
       return instance.delete(`follow/${userId}`)
    },
    follow(userId:number) {
       return instance.post(`follow/${userId}`)
    },
    getProfile(userId: number) {
        return instance.get(`profile/` + userId)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`)
    }
}



