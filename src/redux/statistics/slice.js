import { createSlice } from '@reduxjs/toolkit';
import { fetchTransSumThunk } from './operations';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const initialState = {
  summary: [],
};

const slice = createSlice({
  name: 'statistics',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchTransSumThunk.fulfilled, (state, { payload }) => {
      state.summary = payload;
    });
  },
});

export const statisticsReducer = slice.reducer;

const statisticsPersistConfig = {
  key: 'statistics',
  storage,
  whitelist: ['statisticsData'],
};

export const persistedStatisticsReducer = persistReducer(
  statisticsPersistConfig,
  statisticsReducer
);
