import React from 'react'

import styles from './message.module.css'

const Message = (props) => {
   return (
      <div
         className={props.isInterlocutor ? styles.messageInterlocutor : styles.messageUser}>
         <img
            className={styles.avatar}
            src='https://cdn2.iconfinder.com/data/icons/interface-icons-line/54/Single_User-512.png'></img>
         <span>{props.message}</span>
      </div>
   )
}

export default Message
