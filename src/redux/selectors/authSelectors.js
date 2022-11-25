import { createSelector } from 'reselect'

const getAuthUserId = (state) => {
   return state.auth.userId
}
export const getAuthUserIdSelector = createSelector(getAuthUserId, (userId) => {
   return userId
})

const getEmail = (state) => {
   return state.auth.email
}
export const getEmailSelector = createSelector(getEmail, (email) => {
   return email
})

const getUserName = (state) => {
   return state.auth.userName
}
export const getUserNameSelector = createSelector(getUserName, (userName) => {
   return userName
})

const getIsAuth = (state) => {
   return state.auth.isAuth
}
export const getIsAuthSelector = createSelector(getIsAuth, (isAuth) => {
   return isAuth
})

const getUserPhoto = (state) => {
   return state.auth.userPhoto
}
export const getUserPhotoSelector = createSelector(getUserPhoto, (userPhoto) => {
   return userPhoto
})

const getErrorLoginMessage = (state) => {
   return state.auth.errorLoginMessage
}
export const getErrorLoginMessageSelector = createSelector(getErrorLoginMessage, (errorLoginMessage) => {
   return errorLoginMessage
})
