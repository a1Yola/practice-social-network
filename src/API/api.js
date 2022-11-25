import axios from 'axios'

const API_KEY = '0a69778f-6885-4ee5-9502-2aaba9a8d25e'

const instance = axios.create({
   withCredentials: true,
   baseURL: `https://social-network.samuraijs.com/api/1.0/`,
   headers: {
      'API-KEY': API_KEY,
   },
})

export const authAPI = {
   login(email, password, rememberMe = false) {
      return instance.post(`auth/login`, { email, password, rememberMe }).then((response) => response.data)
   },
   logout() {
      return instance.delete(`auth/login`).then((response) => response.data)
   },
   getMyProfile() {
      return instance.get(`auth/me`).then((response) => response.data)
   },
}

export const usersAPI = {
   getUsers(currentPage, pageSize = 5) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`).then((response) => response.data)
   },
}

export const profileAPI = {
   getUserProfile(userId) {
      return instance.get(`profile/${userId}`).then((response) => response.data)
   },
   getStatus(userId) {
      return instance.get(`profile/status/${userId}`).then((response) => response.data)
   },
   updateStatus(status) {
      return instance.put(`profile/status`, { status }).then((response) => response.data)
   },
}

export const followAPI = {
   followUser(userId) {
      return instance.post(`follow/${userId}`).then((response) => response.data)
   },
   unfollowUser(userId) {
      return instance.delete(`follow/${userId}`).then((response) => response.data)
   },
}
