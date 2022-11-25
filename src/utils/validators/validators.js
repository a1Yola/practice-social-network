export const required = (value) => (value ? undefined : 'Поле не может быть пустым')

export const maxLength = (maxLength) => (value) => {
   if (value.length > maxLength) return `Max length is ${maxLength}`

   return undefined
}

export const sendMessageFormValidator = {
   requiredBody(value) {
      return value ? undefined : ' '
   },
   maxLength(maxLength) {
      return (value) => {
         return value.length > maxLength ? `Максимальная длина сообщения - ${maxLength} символов!` : undefined
      }
   },
}

export const loginFormValidator = {}

export const composeValidators =
   (...validators) =>
   (value) =>
      validators.reduce((error, validator) => error || validator(value), undefined)
