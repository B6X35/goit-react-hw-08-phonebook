import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  addContactApi,
  getContactsApi,
  removeContactApi,
} from "../../utils/mockApi";


export const addContact = createAsyncThunk(
  "addContact",
  async (contact, thunkApi) => {
      try {
          const contacts = await addContactApi(contact);
          return contacts;
      } catch (error) {
          return thunkApi.rejectWithValue(error)
      }
  }
)

export const getContacts = createAsyncThunk(
    "getContacts",
    async (_, thunkApi) => {
        try {
            const contacts = await getContactsApi();
            return contacts;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)

export const removeContact = createAsyncThunk(
  "removeContact",
  async (id, thunkApi) => {
    try {
      const respId = await removeContactApi(id);
      return respId;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);
