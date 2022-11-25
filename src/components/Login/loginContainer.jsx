import React from 'react'
import { connect } from 'react-redux'
import { getErrorLoginMessageSelector, getIsAuthSelector } from '../../redux/selectors/authSelectors'

import { login } from './../../redux/reducers/authReducer'
import Login from './login'

let mapStateToProps = (state) => ({
   isAuth: getIsAuthSelector(state),
   errorMessage: getErrorLoginMessageSelector(state),
})

const LoginContainer = connect(mapStateToProps, { login })(Login)

export default LoginContainer
