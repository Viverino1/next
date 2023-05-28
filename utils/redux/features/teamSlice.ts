import { Contention } from "@/utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TeamState = {
    teamName: string,
    teamId: string,
    teamMembers: string[],
    contentions: Contention[],
};

const initialState = {
    teamName: "",
    teamId: "",
    teamMembers: [""],
    contentions: [],
} as TeamState;

export const teamSlice = createSlice({
    name: "team",
    initialState,
    reducers: {
        setTeamName: (state, action: PayloadAction<string>) => {
            state.teamName = action.payload;
        },
    },
});

export const {
    setTeamName
} = teamSlice.actions;

export default teamSlice;
