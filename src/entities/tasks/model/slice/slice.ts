import { createSlice } from "@reduxjs/toolkit";
import { ITasksState } from "./types";

const initialState: ITasksState = {
  sourceSyncDict: {},
};

const slice = createSlice({
  initialState,
  name: "tasks",
  reducers: {
    reset: () => initialState,
  },
});

export const actions = { ...slice.actions };
export const { reducer } = slice;