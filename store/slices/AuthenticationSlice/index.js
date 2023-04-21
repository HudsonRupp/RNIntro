import { createSlice } from '@reduxjs/toolkit'
import {storeValue, readValue} from "../../../Helpers";

export const authenticationSlice = createSlice({
  name: 'auth',
  initialState: {
    authStatus: false
  },
  reducers: {
    change: (state, action) => {
      state.authStatus = action.payload;
    },
    logIn: state => {
        state.authStatus = true;
    },
    signOut: state => {
        state.authStatus = false;
    }
  }
})


export const { change, logIn, signOut } = authenticationSlice.actions

export default authenticationSlice.reducer