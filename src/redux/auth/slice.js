import { createSlice } from "@reduxjs/toolkit";
import {
  logOut,
  login,
  register,
  refreshUser,
  getOAuthURL,
  loginOAuth,
} from "./operations";
import toast from "react-hot-toast";

const handleRejected = (state, action) => {
  state.isLoggedIn = false;
  toast.error(`Something went wrong! ${action.payload}`);
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null,
    },
    token: null,
    OAuthURL: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
      })
      .addCase(register.rejected, handleRejected)
      .addCase(login.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        toast.success("Successfully logged in!");
      })
      .addCase(login.rejected, handleRejected)
      .addCase(getOAuthURL.fulfilled, (state, { payload }) => {
        state.OAuthURL = payload.url;
      })
      .addCase(loginOAuth.fulfilled, (state, { payload }) => {
        state.user = payload.data.user;
        state.token = payload.data.accessToken;
        state.isLoggedIn = true;
      })
      .addCase(logOut.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null,
        };
        state.token = null;
        state.isLoggedIn = false;
        toast.success("Successfully logged out!");
      })
      .addCase(logOut.rejected, handleRejected)
      .addCase(refreshUser.pending, (state, action) => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isRefreshing = false;
        state.isLoggedIn = true;
      })
      .addCase(refreshUser.rejected, (state) => {
        state.token = null;
        state.isRefreshing = false;
        state.isLoggedIn = false;
      });
  },
});

export const authReducer = authSlice.reducer;