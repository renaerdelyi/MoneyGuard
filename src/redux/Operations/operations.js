import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  userTransactionsApi,
  setToken,
  clearToken,
} from '../../config/userTransactionsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 🔐 REGISTER
export const register = createAsyncThunk(
  'auth/register',
  async (payload, thunkApi) => {
    try {
      const res = await userTransactionsApi.post('/auth/sign-up', payload);
      const token = res.data.token;
      setToken(token);
      localStorage.setItem('token', token); // ✅ ADĂUGAT

      toast.success('Înregistrare reușită!', {
        position: 'top-right',
        autoClose: 5000,
      });

      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Registration failed.';
      toast.error(`Eroare: ${message}`, {
        position: 'top-right',
        autoClose: 5000,
      });
      return thunkApi.rejectWithValue(message);
    }
  }
);


export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkApi) => {
    try {
      const res = await userTransactionsApi.post('/auth/sign-in', credentials);
      const token = res.data.token;
      setToken(token);
      localStorage.setItem('token', token); // ✅ ADĂUGAT

      const { username } = res.data.user;
      toast.success(`Bine ai revenit, ${username}!`, {
        position: 'top-right',
        autoClose: 5000,
      });

      return res.data;
    } catch (error) {
      const status = error.response?.status;
      const message = error.response?.data?.message || 'Eroare la autentificare';

      if (status === 400) {
        toast.error('Date invalide. Verifică emailul și parola.', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else if (status === 403) {
        toast.error('Parolă incorectă.', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else if (status === 404) {
        toast.error('Utilizator inexistent. Înregistrează-te!', {
          position: 'top-right',
          autoClose: 5000,
        });
      } else {
        toast.error(`Eroare: ${message}`, {
          position: 'top-right',
          autoClose: 5000,
        });
      }

      return thunkApi.rejectWithValue(message);
    }
  }
);


// 🔐 LOGOUT
export const logOut = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await userTransactionsApi.delete('/auth/sign-out');
    clearToken();

    toast.success('Delogare reușită!', {
      position: 'top-right',
      autoClose: 5000,
    });
  } catch (error) {
    const message = error.response?.data?.message || 'Logout failed.';
    const status = error.response?.status;

    if (status === 401) {
      toast.error('Neautorizat. Reconectează-te.', {
        position: 'top-right',
        autoClose: 5000,
      });
    }

    return thunkApi.rejectWithValue(message);
  }
});

// 🔁 REFRESH
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkApi) => {
    const savedToken = thunkApi.getState().auth.token;

    if (!savedToken) {
      return thunkApi.rejectWithValue('No token found.');
    }

    setToken(savedToken);
    console.log('Token actual:', savedToken);

    try {
      const res = await userTransactionsApi.get('/users/current');
      return res.data;
    } catch (error) {
      const message = error.response?.data?.message || 'Unable to fetch user data.';
      const status = error.response?.status;

      if (status === 401) {
        toast.error('Sesiune expirată. Te rugăm să te loghezi din nou.', {
          position: 'top-right',
          autoClose: 5000,
        });
      }

      return thunkApi.rejectWithValue(message);
    }
  }
);

export { logOut as logoutThunk };
