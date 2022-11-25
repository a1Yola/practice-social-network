import { profileAPI } from '../../API/api'

const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const SET_STATUS = 'SET_STATUS'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'

let initialState = {
   postsData: [
      {
         id: 1,
         body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt in saepe est! Perspiciatis debitis architecto accusamus alias doloremque iure nulla impedit sint.',
         likes: 35,
      },
      { id: 2, body: 'Hiya', likes: 1227 },
   ],
   profile: null,
   status: '',
   isLoading: false,
}

const profileReducer = (state = initialState, action) => {
   switch (action.type) {
      case ADD_POST:
         let newPost = { id: 3, body: action.newPostBody, likes: 0 }
         return {
            ...state,
            postsData: [...state.postsData, newPost],
         }

      case SET_STATUS:
         return {
            ...state,
            status: action.status,
         }

      case SET_USER_PROFILE:
         return {
            ...state,
            profile: action.profile,
         }

      case TOGGLE_IS_LOADING:
         return {
            ...state,
            isLoading: action.isLoading,
         }

      default:
         return state
   }
}

export const addPost = (newPostBody) => ({ type: ADD_POST, newPostBody })
export const setUserProfile = (profile) => ({
   type: SET_USER_PROFILE,
   profile,
})
export const setStatus = (status) => ({
   type: SET_STATUS,
   status,
})
export const toggleIsLoading = (isLoading) => ({
   type: TOGGLE_IS_LOADING,
   isLoading,
})

export const getUserProfile = (userId) => (dispatch) => {
   dispatch(toggleIsLoading(true))

   profileAPI
      .getUserProfile(userId)
      .then((data) => {
         if (data !== undefined) {
            dispatch(setUserProfile(data))
         }
      })
      .finally(() => dispatch(toggleIsLoading(false)))
}

export const getUserStatus = (userId) => (dispatch) => {
   dispatch(toggleIsLoading(true))

   profileAPI
      .getStatus(userId)
      .then((data) => {
         dispatch(setStatus(data))
      })
      .finally(() => dispatch(toggleIsLoading(false)))
}

export const updateUserStatus = (status) => (dispatch) => {
   profileAPI.updateStatus(status).then((data) => {
      if (data.resultCode === 0) {
         dispatch(setStatus(status))
      }
   })
}

export default profileReducer
