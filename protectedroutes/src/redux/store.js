import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobSlice.js";

export const store = configureStore({
  reducer: {
    job: jobReducer,
  },
});

export default store;
