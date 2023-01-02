import { configureStore } from '@reduxjs/toolkit'
// import { applyMiddleware, compose } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import rootReducer from './reducers'
// import loggerMiddleware from './middleware/logger'
// import monitorReducerEnhancer from './enhancers/monitorReducer'

import authSlice from '../features/auth/authSlice'

export default configureStore({
  reducer: {
    auth: authSlice,
  },
})