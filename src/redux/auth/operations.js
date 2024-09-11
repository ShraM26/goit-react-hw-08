import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { setAuthHeader, clearAuthHeader } from './auth'; 


axios.defaults.baseURL = 'https://connections-api.goit.global';


export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/signup', userData);
      setAuthHeader(response.data.token); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (userData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/users/login', userData);
      setAuthHeader(response.data.token); 
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      await axios.post('/users/logout'); 
      clearAuthHeader(); 
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);