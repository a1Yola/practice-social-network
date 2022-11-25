import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { Input } from '../../common/FormsControls/formsControls'
import styles from './loginForm.module.css';

type LoginFormData = {
   email: string,
   password: string,
   rememberMe: boolean,
}

const LoginForm = (props) => {
   const {
      register,
      setError,
      handleSubmit,
      formState: { errors },
   } = useForm<LoginFormData>({ mode: 'onChange' })

   const onSubmit = (formData) => {
      props.login(formData.email, formData.password, formData.rememberMe)
   }

   useEffect(() => {
      const formError = { type: "server" }
      setError('email', formError)
      setError('password', formError)
      setError('rememberMe', formError)
   }, [props.errorMessage])

   return (

      <div className={styles.loginFormContainer}>
         <form onSubmit={handleSubmit(onSubmit)}>
            <Input
               name={'email'}
               type={'text'}
               placeholder={'Email'}
               register={register}
               requiredMessage={'Это поле обязательно!'}
               errors={errors.email}
            />

            <Input
               name={'password'}
               type={'password'}
               placeholder={'Password'}
               register={register}
               requiredMessage={'Это поле обязательно!'}
               errors={errors.password}
            />

            <div className={styles.inputCheckbox}>
               <input {...register('rememberMe')} type='checkbox' />
               <span>Запомнить меня?</span>
            </div>

            <div className={styles.formButton}>
               <button>Войти</button>
            </div>

            {errors?.email && errors?.password && errors?.rememberMe && <div className={styles.error}><span>{props.errorMessage}</span></div>}
         </form>
      </div>
   )
}

export default LoginForm
