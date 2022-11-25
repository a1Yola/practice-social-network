import React from 'react'
import { NavLink } from 'react-router-dom'

import styles from './dialogItem.module.css'

const DialogItem = (props) => {

   let path = '/dialogs/' + props.id

   return (
      <div className={styles.dialog}>
         <img
            className={styles.friendAvatar}
            src='https://cdn2.iconfinder.com/data/icons/interface-icons-line/54/Single_User-512.png'></img>
         <NavLink to={path} activeClassName={styles.active}>
            {props.name}
         </NavLink>
      </div>
   )
}

export default DialogItem
