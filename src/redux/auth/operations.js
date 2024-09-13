import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../components/helper";

const setHeaderAuthToken = (token) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};
const clearHeaderAuthToken = () => {
  delete API.defaults.headers.common["Authorization"];
};

export const register = createAsyncThunk(
  "auth/register",
  async (userData, thunkAPI) => {
    try {
      const response = await API.post("users/signup", { code: userData });
      setHeaderAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (userLogData, thunkAPI) => {
    try {
      const response = await API.post("users/login", userLogData);
      setHeaderAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getOAuthURL = createAsyncThunk(
  "auth/getOAuthURL",
  async (_, thunkAPI) => {
    try {
      const response = await API.get("auth/get-oauth-url");
      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginOAuth = createAsyncThunk(
  "auth/loginOAuth",
  async (userData, thunkAPI) => {
    try {
      const response = await API.post("auth/confirm-oauth", {
        code: userData,
      });
      setHeaderAuthToken(response.data.data.accessToken);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logOut = createAsyncThunk(
  "auth/logout",
  async (_, { thunkAPI }) => {
    try {
      await API.post("users/logout");
      clearHeaderAuthToken();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    try {
      const state = getState();
      setHeaderAuthToken(state.auth.token);
      const response = await API.get("users/current");
      return response.data;
    } catch (error) {
      clearHeaderAuthToken();
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const state = getState();
      if (!state.auth.token) {
        return false;
      }
    },
  }
);