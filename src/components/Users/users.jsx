import React from 'react'
import { NavLink } from 'react-router-dom'

import userPhoto from '../../assets/images/defaultUserPhoto.png'
import styles from './users.module.css'

const Users = (props) => {
   return (
      <div className={styles.users}>
         <div className={styles.pages}>
            {props.pages.map((p) => (
               <span className={props.currentPage === p && styles.selectedPage} onClick={props.onPageChanged}>
                  {p}
               </span>
            ))}
         </div>
         {props.users.map((user) => (
            <div key={user.id}>
               <span>
                  <div>
                     <NavLink to={'/profile/' + user.id}>
                        <img src={user.photos.large !== null ? user.photos.large : userPhoto} className={styles.userPhoto} />
                     </NavLink>
                  </div>
                  <div>
                     {user.followed ? (
                        <button
                           disabled={props.followingInProgress.some((id) => id == user.id)}
                           onClick={() => {
                              props.unfollow(user.id)
                           }}>
                           Unfollow
                        </button>
                     ) : (
                        <button
                           disabled={props.followingInProgress.some((id) => id == user.id)}
                           onClick={() => {
                              props.follow(user.id)
                           }}>
                           Follow
                        </button>
                     )}
                  </div>
               </span>
               <span>
                  <span>
                     <div>{user.name}</div>
                     <div>{user.status}</div>
                  </span>
                  <span>
                     <div>{'user.location.country'}</div>
                     <div>{'user.location.city'}</div>
                  </span>
               </span>
            </div>
         ))}
      </div>
   )
}

export default Users
