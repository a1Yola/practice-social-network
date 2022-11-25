import React from 'react'

import DialogItem from './DialogItem/dialogItem'
import Message from './Message/message'
import SendMessageForm from './SendMessageForm/sendMessageForm.tsx'
import styles from './dialogs.module.css'

const Dialogs = (props) => {
   let dialogsComponents = props.dialogs.map((dialog) => (
      <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} />
   ))

   let messagesComponents = props.messages.map((mess) => (
      <Message key={mess.id} message={mess.message} isInterlocutor={mess.isInterlocutor} />
   ))

   return (
      <div className={styles.dialogs}>
         <div className={styles.dialogsItems}>{dialogsComponents}</div>
         <div className={styles.messages}>{messagesComponents}</div>
         <SendMessageForm sendMessage={props.sendMessage} />
      </div>
   )
}

export default Dialogs
