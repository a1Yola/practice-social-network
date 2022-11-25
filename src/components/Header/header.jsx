import React from 'react'
import { NavLink } from 'react-router-dom'

import userPhoto from '../../assets/images/defaultUserPhoto.png'
import styles from './header.module.css'

const Header = (props) => {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <img src='https://cdn-icons-png.flaticon.com/512/5448/5448104.png' />

            <div className={styles.loginBlock}>
               {props.isAuth ? (
                  <div className={styles.authUserInfo}>
                     <img src={props.userPhoto !== null ? props.userPhoto : userPhoto} />
                     {props.userName}
                     <button onClick={props.logout}>Выйти</button>
                  </div>
               ) : (
                  <NavLink to='/login'> Войти </NavLink>
               )}
            </div>
         </div>
      </header>
   )
}

export default Header
