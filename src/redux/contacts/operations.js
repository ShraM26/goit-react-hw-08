import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

// Базовый URL для API
const API_URL = 'https://connections-api.goit.global';

// Операция для получения всех контактов
export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
  try {
    const { data } = await axios.get(`${API_URL}/contacts`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Операция для добавления нового контакта
export const addContact = createAsyncThunk('contacts/addContact', async (contact, thunkAPI) => {
  try {
    const { data } = await axios.post(`${API_URL}/contacts`, contact);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Операция для удаления контакта по id
export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
  try {
    await axios.delete(`${API_URL}/contacts/${id}`);
    return id;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// Новая операция для поиска контактов
export const searchContacts = createAsyncThunk('contacts/searchContacts', async (query, thunkAPI) => {
  try {
    const { data } = await axios.get(`${API_URL}/contacts`, { params: { search: query } });
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});