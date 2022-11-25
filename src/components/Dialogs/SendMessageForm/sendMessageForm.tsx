import React from 'react'
import { useForm } from 'react-hook-form'

import styles from './sendMessageForm.module.css'

type SendMessageFormData = {
   newMessageBody: string,
}

const SendMessageForm = (props) => {

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<SendMessageFormData>()

   const onSubmit = (data) => {
      props.sendMessage((data.newMessageBody.trim()))
      reset()
   }

   return (
      <div className={styles.sendMessageFormContainer}>
         <form onSubmit={handleSubmit(onSubmit)} className={styles.sendMessageForm}>

            <div className={styles.inputRow}>
               {errors?.newMessageBody && <span>{errors.newMessageBody.message}</span>}
               <input
                  className={styles.messageInput}
                  {...register('newMessageBody', {
                     required: ' ',
                     maxLength: {
                        value: 450,
                        message: "Максимальная длина сообщения 450 символов!"
                     }
                  })}
                  placeholder='Введите ваше сообщение'
                  type='text'
                  autoComplete='off'
               />
            </div>

            <div className={styles.sendMessageButton}>
               <button>Отправить</button>
            </div>
         </form>
      </div>
   )
}

export default SendMessageForm
