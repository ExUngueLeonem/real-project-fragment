import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ICompaniesState } from "./types";
import { api } from "api";
import { ICompany } from "entities/companies";

const initialState: ICompaniesState = { list: [] };

const slice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    reset: () => initialState,
    setCurrent: (state, { payload }: PayloadAction<ICompany | undefined>) => {
      state.current = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      api.endpoints.getCompanies.matchFulfilled,
      (state, { payload }) => {
        state.list = payload;
      }
    );
    builder.addMatcher(
      api.endpoints.addCompany.matchFulfilled,
      (state, { payload }) => {
        state.list.push(payload);
      }
    );
  },
});

export const actions = { ...slice.actions };
export const { reducer } = slice;