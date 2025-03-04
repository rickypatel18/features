import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./authSlice";

// Redux Persist Config
const persistConfig = {
  key: "auth",
  storage,
};

// Persisted Reducer
const persistedAuthReducer = persistReducer(persistConfig, authReducer);

// Create Store
const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }),

  // this middleware create some error in console => check removing middleware code
});

const persistor = persistStore(store);
export { store, persistor };
