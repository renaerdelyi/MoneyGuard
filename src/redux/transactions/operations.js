import { createAsyncThunk } from '@reduxjs/toolkit';
import { userTransactionsApi } from '../../config/userTransactionsApi'; // ✅ Import corect
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const addTransactionThunk = createAsyncThunk(
  'transactions/new',
  async (transaction, thunkApi) => {
    try {
      const { data } = await userTransactionsApi.post(
        '/transactions',
        transaction
      ); // ✅ Corectat
      toast.success('Transaction added successfully!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const updatedTransactionThunk = createAsyncThunk(
  'transactions/update',
  async ({ id, transactionData }, thunkAPI) => {
    try {
      const { data } = await userTransactionsApi.patch(
        `/transactions/${id}`,
        transactionData
      ); // ✅ Corectat
      toast.success('Transaction updated successfully!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delete',
  async (transactionId, thunkAPI) => {
    try {
      await userTransactionsApi.delete(`/transactions/${transactionId}`); // ✅ Corectat
      toast.success('Transaction deleted successfully!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return transactionId;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Adaugă funcțiile lipsite

export const getTransactionsCategoriesThunk = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await userTransactionsApi.get(
        '/transactions/categories'
      );
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const allTransactionThunk = createAsyncThunk(
  'transactions/all',
  async (_, thunkAPI) => {
    try {
      const { data } = await userTransactionsApi.get('/transactions');
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
