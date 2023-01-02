import {createSlice} from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    firstName: null,
    secondName: null,
    accessToken: null,
    refreshToken: null,
    email: null,
    roles: null,
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
    setRoles: (state, value) => {
      state.roles = value
    },
    registerRequest(state){
      state.value += 1
    },
  },
})

// Action creators are generated for each case reducer function
export const {setFirstName, setSecondName, setEmail, setAccessToken, registerRequest} = authSlice.actions

export default authSlice.reducer