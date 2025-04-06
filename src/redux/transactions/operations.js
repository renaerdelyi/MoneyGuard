import { createAsyncThunk } from '@reduxjs/toolkit';
import { userTransactionsApi } from '../../config/userTransactionsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// ✅ Adăugare tranzacție
export const addTransactionThunk = createAsyncThunk(
  'transactions/new',
  async (transaction, thunkApi) => {
    try {
      const { data } = await userTransactionsApi.post('/transactions', transaction);
      toast.success('Tranzacția a fost adăugată cu succes!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return data;
    } catch (error) {
      toast.error('Eroare la adăugarea tranzacției.');
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

// ✅ Editare tranzacție
export const updatedTransactionThunk = createAsyncThunk(
  'transactions/update',
  async ({ id, transactionData }, thunkAPI) => {
    try {
      const { data } = await userTransactionsApi.patch(`/transactions/${id}`, transactionData);
      toast.success('Tranzacția a fost actualizată!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return data;
    } catch (error) {
      toast.error('Eroare la actualizarea tranzacției.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ✅ Ștergere tranzacție
export const deleteTransactionThunk = createAsyncThunk(
  'transactions/delete',
  async (transactionId, thunkAPI) => {
    try {
      await userTransactionsApi.delete(`/transactions/${transactionId}`);
      toast.success('Tranzacția a fost ștearsă!', {
        position: 'top-right',
        autoClose: 5000,
      });
      return transactionId;
    } catch (error) {
      toast.error('Eroare la ștergerea tranzacției.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// ✅ Obține categorii tranzacții
export const getTransactionsCategoriesThunk = createAsyncThunk(
  'transactions/getCategories',
  async (_, thunkAPI) => {
    try {
      const { data } = await userTransactionsApi.get('/transaction-categories');
      return data;
    } catch (error) {
      toast.error('Nu s-au putut încărca categoriile.');
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const allTransactionThunk = createAsyncThunk(
  'transactions/all',
  async (_, thunkApi) => {
    const token = thunkApi.getState().auth.token;
    if (!token) return thunkApi.rejectWithValue("Token lipsă");
    userTransactionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;

    try {
      const { data } = await userTransactionsApi.get('/transactions');
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
