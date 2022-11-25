import profileReducer from './profileReducer'
import messagesReducer from './dialogsReducer'
import sidebarReducer from './sidebarReducer'

let store = {
   _state: {
      dialogsPage: {
         dialogsData: [],
         messagesData: [],
         newMessageText: '',
      },
      profilePage: {
         postsData: [],
         newPostText: '',
      },
      sidebar: {
         friends: [
            { id: 1, name: 'Artem' },
            { id: 2, name: 'Katya' },
            { id: 3, name: 'Sergei' },
         ],
      },
   },
   _callSubscriber() {},

   getState() {
      return this._state
   },
   subscribe(observer) {
      this._callSubscriber = observer
   },

   dispatch(action) {
      this._state.profilePage = profileReducer(this._state.profilePage, action)
      this._state.dialogsPage = messagesReducer(this._state.dialogsPage, action)
      this._state.sidebar = sidebarReducer(this._state.sidebar, action)

      this._callSubscriber(this._state)
   },
}

export default store
window.store = store
