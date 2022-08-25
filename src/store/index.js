import { combineReducers, configureStore } from "@reduxjs/toolkit";
import themeSlice from "./slices/themeSlice";

const reducers = combineReducers({
  theme: themeSlice,
});

export const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
