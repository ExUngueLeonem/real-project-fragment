import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IApplicationState, IMessage } from "./types";

const initialState: IApplicationState = {};

const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    setLock: (state, { payload }: PayloadAction<boolean>) => {
      state.isLocked = payload;
    },
    setMessage: (state, { payload }: PayloadAction<IMessage | undefined>) => {
      state.message = payload;
    },
  },
});

export const actions = { ...slice.actions };
export const { reducer } = slice;
