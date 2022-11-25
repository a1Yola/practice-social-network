import { createSelector } from 'reselect'

const getDialogs = (state) => {
   return state.dialogsPage.dialogsData
}
export const getDialogsSelector = createSelector(getDialogs, (dialogs) => {
   return dialogs
})

const getMessages = (state) => {
   return state.dialogsPage.messagesData
}
export const getMessagesSelector = createSelector(getMessages, (messages) => {
   return messages
})
