import React from 'react'
import { Redirect } from 'react-router-dom'

import LoginForm from './LoginForm/loginForm.tsx'
import styles from './login.module.css'

const Login = ({ ...props }) => {
   return props.isAuth ? (
      <Redirect to={'/profile'} />
   ) : (
      <div className={styles.login}>
         <LoginForm login={props.login} errorMessage={props.errorMessage} />
      </div>
   )
}

export default Login
