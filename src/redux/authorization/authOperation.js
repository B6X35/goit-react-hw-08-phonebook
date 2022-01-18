import { createAsyncThunk } from "@reduxjs/toolkit";
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
    async (userData, { rejectWithValue }) => {
        try {
            const data = await getUserApi(userData);
            return data;
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)