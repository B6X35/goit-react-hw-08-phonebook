import { createSlice } from "@reduxjs/toolkit";
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
} from "./authOperation";

const initialState = {
  user: {
    email: null,
    name: null,
  },
  token: null,
  isLoginUser: false,
  isFetchCurrentUser: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [registerUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [registerUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.isLoginUser = true;
      state.user = {
        name: payload.user.name,
        email: payload.user.email,
      };
    },
    [registerUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [loginUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [loginUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.token = payload.token;
      state.isLoginUser = true;
      state.user = {
        name: payload.user.name,
        email: payload.user.email,
      };
    },
    [loginUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    [currentUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
      state.isFetchCurrentUser = false
    },
    [currentUser.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.isFetchCurrentUser = false
      state.isLoginUser = true;
      state.user = {
        name: payload.name,
        email: payload.email,
      };
    },
    [currentUser.rejected]: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
      state.isFetchCurrentUser = false
    },
    [logoutUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [logoutUser.fulfilled]: (state) => {
      state.isLoading = false;
      state.token = null;
      state.isLoginUser = false;
      state.user = {
        name: null,
        email: null,
      };
    },
    [logoutUser.rejected]: () => {
      return initialState;
    },
  },
});

export default authSlice.reducer;
