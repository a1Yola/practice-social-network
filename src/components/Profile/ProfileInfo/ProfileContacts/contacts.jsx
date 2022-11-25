import React from 'react'

import styles from './contacts.module.css'

const Contacts = (props) => {
   return (
      <div className={styles.profileContacts}>
         <div className={props.contacts.website == null ? styles.contactsHiddenItem : styles.contactsItem}>
            <img src='' />
            {props.contacts.website}
         </div>

         <div className={props.contacts.facebook == null ? styles.contactsHiddenItem : styles.contactsItem}>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174848.png' />
            {props.contacts.facebook}
         </div>

         <div className={props.contacts.vk == null ? styles.contactsHiddenItem : styles.contactsItem}>
            <img src='' />
            {props.contacts.vk}
         </div>

         <div className={props.contacts.twitter == null ? styles.contactsHiddenItem : styles.contactsItem}>
            <img src='https://cdn-icons-png.flaticon.com/512/174/174876.png' />
            {props.contacts.twitter}
         </div>

         <div className={props.contacts.instagram == null ? styles.contactsHiddenItem : styles.contactsItem}>
            <img src='https://cdn-icons-png.flaticon.com/512/1384/1384063.png' />
            {props.contacts.instagram}
         </div>
      </div>
   )
}

export default Contacts
