import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import searchReducer from "./features/searchSlice";
import authReducer from "./features/authSlice";

export const store = configureStore({
  reducer: {
    counterReducer,
    searchReducer,
    authReducer
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
