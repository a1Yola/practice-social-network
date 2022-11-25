import React from 'react'

import MyPostsContainer from './MyPosts/myPostsContainer'
import ProfileInfo from './ProfileInfo/profileInfo'
// import styles from './profile.module.css'

const Profile = (props) => {
   return (
      <div>
         <ProfileInfo
            profile={props.profile}
            status={props.status}
            updateStatus={props.updateUserStatus}
            authUserId={props.authUserId}
         />
         <MyPostsContainer />
      </div>
   )
}

export default Profile
