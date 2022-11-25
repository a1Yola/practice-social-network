import { createSelector } from 'reselect'

const getPosts = (state) => {
   return state.profilePage.postsData
}
export const getPostsSelector = createSelector(getPosts, (posts) => {
   return posts
})

const getUserProfile = (state) => {
   return state.profilePage.profile
}
export const getUserProfileSelector = createSelector(getUserProfile, (profile) => {
   return profile
})

const getUserStatus = (state) => {
   return state.profilePage.status
}
export const getUserStatusSelector = createSelector(getUserStatus, (status) => {
   return status
})

const getIsLoading = (state) => {
   return state.profilePage.isLoading
}
export const getIsLoadingSelector = createSelector(getIsLoading, (isLoading) => {
   return isLoading
})
