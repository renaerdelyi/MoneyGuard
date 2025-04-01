import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import authReducer from "./auth/authSlice"; 
import financeReducer from "./financeSlice"; 

// Configurare pentru persistarea doar a `token`
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"], 
};

// Aplicăm persistReducer DOAR la authReducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,  // Autentificare persistată
    finance: financeReducer,  // Finance fără persistare
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }),
});

export const persistor = persistStore(store);