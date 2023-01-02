import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    firstName: null,
    secondName: null,
    accessToken: null,
    refreshToken: null,
    email: null,
    value: 0
  },
  reducers: {
    setFirstName: (state, value) => {
      state.firstName = value
    },
    setSecondName: (state, value) => {
      state.secondName = value
    },
    setEmail: (state, value) => {
      state.email = value
    },
    setAccessToken: (state, value) => {
      state.accessToken = value
    },
  },
})

// Action creators are generated for each case reducer function
export const {setFirstName, setSecondName, setEmail, setAccessToken} = authSlice.actions

export default authSlice.reducer