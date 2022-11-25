import { createSelector } from 'reselect'

const getUsers = (state) => {
   return state.usersPage.usersData
}
export const getUsersSelector = createSelector(getUsers, (users) => {
   return users
})

const getPageSize = (state) => {
   return state.usersPage.pageSize
}
export const getPageSizeSelector = createSelector(getPageSize, (page) => {
   return page
})

const getTotalUsersCount = (state) => {
   return state.usersPage.totalUsersCount
}
export const getTotalUsersCountSelector = createSelector(getTotalUsersCount, (totalUsersCount) => {
   return totalUsersCount
})

export const getCurrentPage = (state) => {
   return state.usersPage.currentPage
}
export const getCurrentPageSelector = createSelector(getCurrentPage, (page) => {
   return page
})

export const getIsLoading = (state) => {
   return state.usersPage.isLoading
}
export const getIsLoadingSelector = createSelector(getIsLoading, (isLoading) => {
   return isLoading
})

export const getFollowingInProgress = (state) => {
   return state.usersPage.followingInProgress
}
export const getFollowingInProgressSelector = createSelector(
   getFollowingInProgress,
   (followingInProgress) => {
      return followingInProgress
   }
)
