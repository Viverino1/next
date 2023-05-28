import { Card } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type PublicState = {
  topics: string[],
  cards: Card[],
};

const initialState = {
  topics: ["HSR", "GPC", "RTW"],
  cards: [],
} as PublicState;

export const publicSlice = createSlice({
    name: "public",
    initialState,
    reducers: {
        setTopics: (state, action: PayloadAction<string[]>) => {
            state.topics = action.payload;
        },
    },
});

export const {
  setTopics,
} = publicSlice.actions;

export default publicSlice;
