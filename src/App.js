import React, { useEffect } from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import HeaderContainer from './components/Header/headerContainer'
import Navbar from './components/Navbar/navbar'
import ProfileContainer from './components/Profile/profileContainer'
import News from './components/News/news'
import Music from './components/Music/music'
import UserSettings from './components/UserSettings/userSettings'
import DialogsContainer from './components/Dialogs/dialogsContainer'
import UsersContainer from './components/Users/usersContainer'
import LoginContainer from './components/Login/loginContainer'
import Preloader from './components/common/Preloader/preloader'

import { initializeApp } from './redux/reducers/appReducer'

import './App.css'

const App = (props) => {

   useEffect(() => {
      props.initializeApp()
   }, [props.initialized])

   return !props.initialized ? (
      <Preloader />
   ) : (
      <div className='App'>
         <HeaderContainer />
         <div className='appWrapper'>
            <Navbar />
            <div className='appContent'>
               <Route path='/dialogs' render={() => <DialogsContainer />} />
               <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
               <Route path='/users' render={() => <UsersContainer />} />
               <Route path='/login' render={() => <LoginContainer />} />
               <Route path='/news' component={News} />
               <Route path='/music' component={Music} />
               <Route path='/settings' component={UserSettings} />
            </div>
         </div>
      </div>
   )
}

const mapStateToProps = (state) => ({
   initialized: state.app.initialized,
})

export default connect(mapStateToProps, { initializeApp })(App)
