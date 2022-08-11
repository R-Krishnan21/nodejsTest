import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLogin: false
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
      login: (state) => {
        state.isLogin = true
      },
      logout: (state) => {
        state.isLogin = false
      }
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { login, logout } = userSlice.actions
  
  export default userSlice.reducer