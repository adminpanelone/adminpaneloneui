import { SET_MESSAGE, CLEAR_MESSAGE, SEND_REQUEST_REGISTER } from "./types";

function makeActionCreator(type, ...argNames) {
  return function (...args) {
    const action = { type }
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index]
    })
    return action
  }
}

const SET_MESSAGE = 'SET_MESSAGE';
const CLEAR_MESSAGE = 'CLEAR_MESSAGE';
const SEND_REQUEST_REGISTER = 'SEND_REQUEST_REGISTER';

// export const setMessage = (message) => ({
//   type: SET_MESSAGE,
//   payload: message,
// });

// export const clearMessage = () => ({
//   type: CLEAR_MESSAGE,
// });

// export function sendRequestRegister(text) {
//   return {
//     type: SEND_REQUEST_REGISTER,
//     text
//   }
// }

export const setMessage = makeActionCreator(SET_MESSAGE, 'text')
export const clearMessage = makeActionCreator(CLEAR_MESSAGE, '')
export const sendRequestRegister = makeActionCreator(SEND_REQUEST_REGISTER, 'text')