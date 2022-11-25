import { followAPI, usersAPI } from '../../API/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let InitialState = {
   usersData: [],
   pageSize: 5,
   totalUsersCount: 0,
   currentPage: 1,
   isLoading: true,
   followingInProgress: [],
}

const usersReducer = (state = InitialState, action) => {
   switch (action.type) {
      case FOLLOW:
         return {
            ...state,
            usersData: state.usersData.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: true }
               }
               return user
            }),
         }

      case UNFOLLOW:
         return {
            ...state,
            usersData: state.usersData.map((user) => {
               if (user.id === action.userId) {
                  return { ...user, followed: false }
               }
               return user
            }),
         }

      case SET_USERS:
         return { ...state, usersData: action.users }

      case SET_CURRENT_PAGE:
         return { ...state, currentPage: action.currentPage }

      case SET_TOTAL_USERS_COUNT:
         return { ...state, totalUsersCount: action.usersCount }

      case TOGGLE_IS_LOADING:
         return { ...state, isLoading: action.isLoading }

      case TOGGLE_IS_FOLLOWING_PROGRESS:
         return {
            ...state,
            followingInProgress: action.isFetching
               ? [...state.followingInProgress, action.userId]
               : state.followingInProgress.filter((id) => id !== action.userId),
         }

      default:
         return state
   }
}

export const setUsers = (users) => ({ type: SET_USERS, users })
export const followSuccess = (userId) => ({ type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({ type: UNFOLLOW, userId })

export const setCurrentPage = (currentPage) => ({
   type: SET_CURRENT_PAGE,
   currentPage,
})
export const setTotalUsersCount = (usersCount) => ({
   type: SET_TOTAL_USERS_COUNT,
   usersCount,
})
export const toggleIsLoading = (isLoading) => ({
   type: TOGGLE_IS_LOADING,
   isLoading,
})
export const toggleFollowingProgress = (isFetching, userId) => ({
   type: TOGGLE_IS_FOLLOWING_PROGRESS,
   isFetching,
   userId,
})

export const requestUsers = (page, pageSize) => {
   return (dispatch) => {
      dispatch(toggleIsLoading(true))
      dispatch(setCurrentPage(page))

      usersAPI
         .getUsers(page, pageSize)
         .then((data) => {
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
         })
         .finally(() => dispatch(toggleIsLoading(false)))
   }
}

export const followUser = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId))

      followAPI
         .followUser(userId)
         .then((data) => {
            if (data.resultCode === 0) {
               dispatch(followSuccess(userId))
            }
         })
         .finally(() => dispatch(toggleFollowingProgress(false, userId)))
   }
}

export const unfollowUser = (userId) => {
   return (dispatch) => {
      dispatch(toggleFollowingProgress(true, userId))

      followAPI
         .unfollowUser(userId)
         .then((data) => {
            if (data.resultCode === 0) {
               dispatch(unfollowSuccess(userId))
            }
         })
         .finally(() => dispatch(toggleFollowingProgress(false, userId)))
   }
}

export default usersReducer
