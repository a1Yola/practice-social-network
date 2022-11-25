import React from 'react'
import AddPostForm from './AddPostForm/addPostForm.tsx'

import styles from './myPosts.module.css'
import Post from './Post/post'

const MyPosts = (props) => {
   let postsElements = props.posts.map((post) => <Post key={post.id} body={post.body} likes={post.likes} />)

   return (
      <div className={styles.postsContent}>
         <h2>My posts</h2>
         <AddPostForm addPost={props.addPost} />
         <div className={styles.posts}>{postsElements}</div>
      </div>
   )
}

export default MyPosts
