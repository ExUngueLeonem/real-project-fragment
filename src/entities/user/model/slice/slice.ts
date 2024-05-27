import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "./types";
import { api } from "api";

const initialState: IUserState = {
  isLogged: false,
};

const slice = createSlice({
  initialState,
  name: "application",
  reducers: {
    logout: (store) => {
      store.token = undefined;
      store.isLogged = false;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.login.matchFulfilled,
      (state, { payload }) => {
        state.isLogged = true;
        state.token = payload.access;
      }
    );
  },
});

export const actions = { ...slice.actions };
export const { reducer } = slice;
