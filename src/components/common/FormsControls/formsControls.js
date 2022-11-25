import React from 'react'

import styles from './formsControls.module.css'

export const Input = ({ register, ...props }) => {
   return (
      <div className={styles.formControl + ' ' + (props.errors ? styles.error : '')}>
         <input
            {...register(props.name, {
               required: props.requiredMessage,
            })}
            type={props.type}
            placeholder={props.placeholder}
         />
         {props.errors && (
            <div className={styles.error}>
               <span>{props.errors.message}</span>
            </div>
         )}
      </div>
   )
}
