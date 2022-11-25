import React from 'react'
import { connect } from 'react-redux'

import Header from './header'
import { logout } from '../../redux/reducers/authReducer'
import {
   getIsAuthSelector,
   getUserNameSelector,
   getUserPhotoSelector,
} from '../../redux/selectors/authSelectors'

const HeaderContainer = (props) => {
   return <Header {...props} />
}

const mapStateToProps = (state) => ({
   isAuth: getIsAuthSelector(state),
   userName: getUserNameSelector(state),
   userPhoto: getUserPhotoSelector(state),
})

export default connect(mapStateToProps, { logout })(HeaderContainer)
