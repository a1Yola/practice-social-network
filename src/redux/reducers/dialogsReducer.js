const SEND_MESSAGE = 'SEND-MESSAGE'

let initialState = {
   dialogsData: [
      { id: 1, name: 'Vlad' },
      { id: 2, name: 'Artem' },
      { id: 3, name: 'Arina' },
      { id: 4, name: 'Maria' },
   ],
   messagesData: [
      { id: 1, message: 'Hi', isInterlocutor: 1 },
      { id: 2, message: 'Whassup', isInterlocutor: 0 },
      { id: 3, message: 'Hiya', isInterlocutor: 1 },
      { id: 4, message: 'Yo', isInterlocutor: 0 },
   ],
}

const dialogsReducer = (state = initialState, action) => {
   switch (action.type) {
      case SEND_MESSAGE:
         let newMessage = {
            id: 5,
            message: action.newMessageBody,
            isInterlocutor: 0,
         }
         return {
            ...state,
            messagesData: [...state.messagesData, newMessage],
         }

      default:
         return state
   }
}

export const sendMessage = (newMessageBody) => ({ type: SEND_MESSAGE, newMessageBody })

export default dialogsReducer
