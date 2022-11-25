import React from 'react'
import styles from './post.module.css'
import defaultPhoto from '../../../../assets/images/defaultUserPhoto.png'

const Post = (props) => (
   <div className={styles.post}>
      <div className={styles.contentForFlex}>
         <img src={defaultPhoto} />
         <div className={styles.postBody}>{props.body}</div>
      </div>
      <div className={styles.like}>
         <span>{props.likes} 👍</span>
      </div>
   </div>
)

export default Post
