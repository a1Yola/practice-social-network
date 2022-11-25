import React from 'react'

import Preloader from '../../common/Preloader/preloader'
import styles from './profileInfo.module.css'
import userPhoto from '../../../assets/images/defaultUserPhoto.png'
import Contacts from './ProfileContacts/contacts'
import ProfileStatus from './ProfileStatus/profileStatus'

const ProfileInfo = (props) => {
   if (!props.profile) {
      return <Preloader />
   }

   return (
      <div>
         <div className={styles.backgroundImage}></div>
         <div className={styles.profileDescription}>
            <div>
               <img
                  className={styles.userPhoto}
                  src={props.profile.photos.large !== null ? props.profile.photos.large : userPhoto}
               />
            </div>
            <div>
               <ProfileStatus status={props.status} updateStatus={props.updateStatus} authUserId={props.authUserId} userId={props.profile.userId}/>
               <div>{props.profile.fullName}</div>
            </div>
            <Contacts contacts={props.profile.contacts} />
         </div>
      </div>
   )
}

export default ProfileInfo
