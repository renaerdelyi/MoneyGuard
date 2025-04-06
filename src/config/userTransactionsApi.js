import axios from 'axios';

export const userTransactionsApi = axios.create({
  baseURL: 'https://wallet.b.goit.study/api',
});

export const setToken = (token) => {
  userTransactionsApi.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  delete userTransactionsApi.defaults.headers.common.Authorization;
};
