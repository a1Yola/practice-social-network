import { applyMiddleware, combineReducers, legacy_createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducer from './reducers/appReducer'
import sidebarReducer from './reducers/sidebarReducer'
import authReducer from './reducers/authReducer'
import profileReducer from './reducers/profileReducer'
import dialogsReducer from './reducers/dialogsReducer'
import usersReducer from './reducers/usersReducer'

let reducers = combineReducers({
   app: appReducer,
   sidebar: sidebarReducer,
   auth: authReducer,
   profilePage: profileReducer,
   dialogsPage: dialogsReducer,
   usersPage: usersReducer,
})

let store = legacy_createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store
