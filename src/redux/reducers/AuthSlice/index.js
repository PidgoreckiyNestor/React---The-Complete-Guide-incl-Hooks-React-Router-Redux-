import { createSlice } from '@reduxjs/toolkit';

let initialState = { isAuth: false };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    }
  }
});

export const { login, logout } = authSlice.actions;

export const selectedAuth = (state) => state.auth;

export default authSlice.reducer;
