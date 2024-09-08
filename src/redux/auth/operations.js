import { createAsyncThunk } from '@reduxjs/toolkit';
import { clearContacts } from '../contacts/slice';
import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// Настройка заголовка авторизации
const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очистка заголовка авторизации
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const registerUser = createAsyncThunk('auth/register', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/users/signup', userData);
    setAuthHeader(response.data.token);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const loginUser = createAsyncThunk('auth/login', async (userData, thunkAPI) => {
  try {
    const response = await axios.post('/users/login', userData);
    setAuthHeader(response.data.token);
    localStorage.setItem('token', response.data.token);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { dispatch }) => {
    // Виконати логаут на сервері
    // Очистити контакти
    dispatch(clearContacts());
    return;
  }
);
export const fetchCurrentUser = createAsyncThunk('auth/refresh', async (_, thunkAPI) => {
  const state = thunkAPI.getState();
  const persistedToken = localStorage.getItem('token');

  if (!persistedToken) {
    return thunkAPI.rejectWithValue('No token found');
  }

  setAuthHeader(persistedToken);

  try {
    const response = await axios.get('/users/current');
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});