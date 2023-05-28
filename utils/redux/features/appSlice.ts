import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AppState = {
    side: "Affirmative" | "Negative",
    topic: string,
};

const initialState = {
    side: "Affirmative",
} as AppState;

export const appSlice = createSlice({
    name: "app",
    initialState,
    reducers: {
        setSide: (state, action: PayloadAction<"Affirmative" | "Negative">) => {
            state.side = action.payload;
        },
        setTopic: (state, action: PayloadAction<string>) => {
            state.topic = action.payload;
        },
    },
});

export const {
  setSide,
  setTopic,
} = appSlice.actions;

export default appSlice;
