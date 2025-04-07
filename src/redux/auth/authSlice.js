import { createSlice } from "@reduxjs/toolkit";
import { logoutThunk } from '../Operations/operations';

const initialState = {
  user: null,
  token: null,
  error: null, 
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.error = null; 
    },
    loginFailure: (state, action) => {
      state.error = action.payload; 
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.error = null; 
    },
  },
});

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authSlice.reducer;