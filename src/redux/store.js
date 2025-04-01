import { configureStore } from '@reduxjs/toolkit';
import financeReducer from './financeSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import { persistedStatisticsReducer } from '../redux/statistics/slice';
import persistedTransactionsReducer from './transactions/slice';
import { modalReducer } from '../redux/modal/slice';

export const store = configureStore({
  reducer: {
    finance: financeReducer,
    statistics: persistedStatisticsReducer,
    transactions: persistedTransactionsReducer,
    modal: modalReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
