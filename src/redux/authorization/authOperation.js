import { createAsyncThunk } from "@reduxjs/toolkit";
import getStoredState from "redux-persist/es/getStoredState";
import { registerUserApi, loginUserApi, logoutUserApi, getUserApi } from "../../utils/mockApi";

export const registerUser = createAsyncThunk(
    'registerUser',
    async (userData, { rejectWithValue }) => {
        try {
            const data = await registerUserApi(userData);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const loginUser = createAsyncThunk(
    'loginUser',
    async (userData, { rejectWithValue }) => {
        try {
            const data = await loginUserApi(userData);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const logoutUser = createAsyncThunk(
    'logoutUser',
    async (userData, { rejectWithValue }) => {
        try {
            const data = await logoutUserApi(userData);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
);

export const currentUser = createAsyncThunk(
    'currentUser',
    async (_, thunkApi) => {
        console.log('ok', thunkApi)
        try {
            const state = thunkApi.getState();
            const token = state.auth.token
            if (token === null) {
                return thunkApi.rejectWithValue()
            }
            const data = await getUserApi(token);
            console.log(data)
            return data;
        } catch (error) {
            return thunkApi.rejectWithValue(error)
        }
    }
)