import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { compose } from 'redux'

import { getUserProfile, getUserStatus, updateUserStatus } from '../../redux/reducers/profileReducer'
import {
   getIsLoadingSelector,
   getUserProfileSelector,
   getUserStatusSelector,
} from '../../redux/selectors/profileSelectors'
import { getAuthUserIdSelector, getIsAuthSelector } from '../../redux/selectors/authSelectors'
import Profile from './profile'
import Preloader from '../common/Preloader/preloader'

const ProfileContainer = (props) => {
   let userId = props.match.params.userId

   if (!userId && props.isAuth === true) {
      userId = props.authUserId
   }

   useEffect(() => {
      props.getUserProfile(userId)
   }, [userId])

   useEffect(() => {
      props.getUserStatus(userId)
   }, [userId])

   return props.isLoading ? (
      <Preloader />
   ) : !userId && props.isAuth === false ? (
      <Redirect to={'/login'} />
   ) : (
      <Profile {...props} />
   )
}

const mapStateToProps = (state) => ({
   profile: getUserProfileSelector(state),
   status: getUserStatusSelector(state),
   isLoading: getIsLoadingSelector(state),
   authUserId: getAuthUserIdSelector(state),
   isAuth: getIsAuthSelector(state),
})

export default compose(
   connect(mapStateToProps, { getUserProfile, getUserStatus, updateUserStatus }),
   withRouter
)(ProfileContainer)
