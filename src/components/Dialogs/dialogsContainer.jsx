import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withAuthRedirect } from '../../hoc/withAuthRedirect'

import { sendMessage } from '../../redux/reducers/dialogsReducer'
import { getDialogsSelector, getMessagesSelector } from '../../redux/selectors/dialogsSelectors'
import Dialogs from './dialogs'

let mapStateToProps = (state) => ({
   dialogs: getDialogsSelector(state),
   messages: getMessagesSelector(state),
})

export default compose(connect(mapStateToProps, { sendMessage }), withAuthRedirect)(Dialogs)
