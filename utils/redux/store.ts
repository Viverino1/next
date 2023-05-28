import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import publicSlice from "./features/publicSlice";
import appSlice from "./features/appSlice";
import teamSlice from "./features/teamSlice";

export const store = configureStore({
  reducer: {
    [authSlice.name]: authSlice.reducer,
    [publicSlice.name]: publicSlice.reducer,
    [appSlice.name]: appSlice.reducer,
    [teamSlice.name]: teamSlice.reducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;