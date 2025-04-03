import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import {
  userTransactionsApi,
  setToken,
} from '../../config/userTransactionsApi';

export const fetchTransSumThunk = createAsyncThunk(
  'fetchTransSum',
  async (params, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;
    if (savedToken) {
      setToken(savedToken);
    } else {
      return thunkApi.rejectWithValue('User is not authorized');
    }
    try {
      const { data } = await userTransactionsApi.get('/transactions-summary', {
        params: {
          ...(params?.month !== undefined && { month: params.month }),
          ...(params?.year !== undefined && { year: params.year }),
        },
      });
      return data;
    } catch (error) {
      const { status } = error.response;
      if (status === 400) {
        toast.error('Validation error. Please check your input!', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else if (status === 401) {
        toast.error('User is not authorized!', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else {
        toast.error('Error fetching transaction summary!', {
          position: 'top-right',
          autoClose: 5000,
        });
      }
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
