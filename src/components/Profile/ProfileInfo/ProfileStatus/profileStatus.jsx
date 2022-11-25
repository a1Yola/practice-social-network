import React, { useEffect, useState } from 'react'

import styles from './profileStatus.module.css'

const ProfileStatus = (props) => {
   const [isEditMode, setIsEditMode] = useState(false)
   const [status, setStatus] = useState(props.status)

   useEffect(() => {
      setStatus(props.status)
   }, [props.status])

   const handleSpanClick = () => {
      setIsEditMode(true)
   }

   const onStatusChange = (e) => {
      setStatus(e.currentTarget.value)
   }

   const handleKeyPress = (e) => {
      if (e.key === 'Enter') {
         props.updateStatus(status)
         setIsEditMode(false)
      }
   }

   const hideStatusInput = async () => {
      await props.updateStatus(status)
      setIsEditMode(false)
   }

   return (
      <div className={styles.profileStatus}>
         {props.authUserId === props.userId ? (
            !props.status || props.status === '' ? (
               <div>
                  <input
                     onChange={onStatusChange}
                     onBlur={hideStatusInput}
                     placeholder={'Установить статус'}
                  />
               </div>
            ) : !isEditMode ? (
               <div>
                  <span onDoubleClick={handleSpanClick}>{props.status}</span>
               </div>
            ) : (
               <div>
                  <input
                     autoFocus
                     onChange={onStatusChange}
                     onKeyPress={handleKeyPress}
                     onBlur={hideStatusInput}
                     value={status}
                  />
               </div>
            )
         ) : (
            <div>
               <span>{props.status}</span>
            </div>
         )}
      </div>
   )
}

export default ProfileStatus
