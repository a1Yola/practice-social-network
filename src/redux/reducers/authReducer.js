import { authAPI, profileAPI } from '../../API/api'

const SET_AUTH_USER_DATA = 'SET_AUTH_USER_DATA'
const SET_USER_PHOTO = 'SET_USER_PHOTO'
const SET_ERROR_LOGIN_MESSAGE = 'SET_ERROR_LOGIN_MESSAGE'

let initialState = {
   userId: null,
   email: null,
   userName: null,
   isAuth: false,
   userPhoto: null,
   errorLoginMessage: null,
}

const authReducer = (state = initialState, action) => {
   switch (action.type) {
      case SET_AUTH_USER_DATA:
         return {
            ...state,
            ...action.payload,
         }

      case SET_USER_PHOTO:
         return {
            ...state,
            userPhoto: action.userPhoto,
         }

      case SET_ERROR_LOGIN_MESSAGE:
         return {
            ...state,
            errorLoginMessage: action.errorMessage,
         }

      default:
         return state
   }
}

const setAuthUserData = (userId, email, userName, isAuth) => ({
   type: SET_AUTH_USER_DATA,
   payload: { userId, email, userName, isAuth },
})

const setUserPhoto = (userPhoto) => ({
   type: SET_USER_PHOTO,
   userPhoto,
})

const setErrorLoginMessage = (errorMessage) => ({
   type: SET_ERROR_LOGIN_MESSAGE,
   errorMessage,
})

export const login = (email, password, rememberMe) => (dispatch) => {
   authAPI.login(email, password, rememberMe).then((data) => {
      if (data.resultCode === 0) {
         dispatch(getMyProfile())
         dispatch(setErrorLoginMessage(null))
      } else {
         dispatch(setErrorLoginMessage(data.messages[0]))
      }
   })
}

export const logout = () => (dispatch) => {
   authAPI.logout().then((data) => {
      if (data.resultCode === 0) {
         dispatch(setAuthUserData(null, null, null, false))
      }
   })
}

export const getMyProfile = () => (dispatch) => {
   return authAPI.getMyProfile().then((data) => {
      if (data.resultCode === 0) {
         let { id, email, login } = data.data
         dispatch(setAuthUserData(id, email, login, true))

         profileAPI.getUserProfile(id).then((data) => {
            dispatch(setUserPhoto(data.photos.small))
         })
      }
   })
}

export default authReducer
