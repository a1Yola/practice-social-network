import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'

import { followUser, requestUsers, setCurrentPage, unfollowUser } from '../../redux/reducers/usersReducer'
import {
   getCurrentPageSelector,
   getFollowingInProgressSelector,
   getIsLoadingSelector,
   getPageSizeSelector,
   getTotalUsersCountSelector,
   getUsersSelector,
} from '../../redux/selectors/usersSelectors'
import Users from './users'
import Preloader from '../common/Preloader/preloader'

const UsersContainer = (props) => {
   useEffect(() => {
      props.requestUsers(props.currentPage, props.pageSize)
   }, [props.currentPage, props.pageSize])

   let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
   let pages = []
   for (let i = 1; i <= pagesCount; i++) {
      if (pages.length < 10) {
         pages.push(i)
      }
   }

   const onPageChanged = (e) => {
      let currentPage = Number(e.target.textContent)
      props.setCurrentPage(currentPage)

      props.getUsers(currentPage, props.pageSize)
   }

   const onFollowClick = (userId) => {
      props.followUser(userId)
   }

   const onUnfollowClick = (userId) => {
      props.unfollowUser(userId)
   }

   return props.isLoading ? (
      <Preloader />
   ) : (
      <Users
         {...props}
         pages={pages}
         onPageChanged={onPageChanged}
         follow={onFollowClick}
         unfollow={onUnfollowClick}
      />
   )
}

const mapStateToProps = (state) => ({
   users: getUsersSelector(state),
   pageSize: getPageSizeSelector(state),
   totalUsersCount: getTotalUsersCountSelector(state),
   currentPage: getCurrentPageSelector(state),
   isLoading: getIsLoadingSelector(state),
   followingInProgress: getFollowingInProgressSelector(state),
})

export default compose(
   connect(mapStateToProps, {
      requestUsers,
      followUser,
      unfollowUser,
      setCurrentPage,
   })
)(UsersContainer)
