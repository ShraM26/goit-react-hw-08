import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "../../components/helper";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunk) => {
    try {
      const response = await API.get("/contacts");
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (item, thunk) => {
    try {
      const response = await API.post("/contacts", item);
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (id, thunk) => {
    try {
      const response = await API.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);

export const editContact = createAsyncThunk(
  "contacts/editContact",
  async ({ id, name, number }, thunk) => {
    try {
      const response = await API.patch(`/contacts/${id}`, { name, number });
      return response.data;
    } catch (error) {
      return thunk.rejectWithValue(error.message);
    }
  }
);