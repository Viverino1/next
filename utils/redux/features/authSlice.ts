import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/utils/types";

type AuthState = {
  user: User,
  isLoggedIn: boolean,
};

const initialState = {
  user: {},
  isLoggedIn: false,
} as AuthState;

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
        setUser: (state, action: PayloadAction<User>) => {
            state.user = action.payload
            state.isLoggedIn = true;
        },
        clearUser: (state) => {
            state.user.displayName = "";
            state.user.email = "";
            state.user.photoURL = "";
            state.user.uid = "";
            state.isLoggedIn = false;
        }
    },
});

export const {
  setUser,
  clearUser,
} = authSlice.actions;

export default authSlice;
