import { createAsyncThunk } from '@reduxjs/toolkit';
import { userTransactionsApi, removeToken } from '../../config/userTransactionsApi';


export const logoutThunk = createAsyncThunk('auth/logout', async (_, thunkApi) => {
    try {
        const { data } = await userTransactionsApi.delete('/api/auth/sign-out');
        removeToken();
        return data;
    } catch (error) {
        return thunkApi.rejectWithValue(error.message);
    }
});