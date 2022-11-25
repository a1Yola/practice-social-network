import React from 'react'
import { connect } from 'react-redux'
import { addPost } from '../../../redux/reducers/profileReducer'
import { getPostsSelector } from '../../../redux/selectors/profileSelectors'

import MyPosts from './myPosts'

let mapStateToProps = (state) => ({
   posts: getPostsSelector(state),
})

const MyPostsContainer = connect(mapStateToProps, {
   addPost,
})(MyPosts)

export default MyPostsContainer
