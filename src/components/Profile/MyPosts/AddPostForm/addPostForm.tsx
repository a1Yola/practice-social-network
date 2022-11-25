import React from 'react'
import { useForm } from 'react-hook-form'
import { Input } from '../../../common/FormsControls/formsControls'

import styles from './addPostForm.module.css'

type AddPostFormData = {
   newPostBody: string,
}

const AddPostForm = (props) => {

   const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
   } = useForm<AddPostFormData>()

   const onSubmit = (data) => {
      props.addPost(data.newPostBody)
      reset()
   }

   return (
      <div className={styles.addPostFormContainer}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Input
               name={'newPostBody'}
               type={'text'}
               placeholder={'Что нового?'}
               register={register}
               requiredMessage={' '}
               errors={errors.newPostBody}
            />

            <div className={styles.formButton}>
               <button>Добавить пост</button>
            </div>

         </form>
      </div>
   )
}

export default AddPostForm
