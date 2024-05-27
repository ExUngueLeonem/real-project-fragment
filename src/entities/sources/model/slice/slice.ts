import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { ISourcesState } from "./types";
import { ICheckedDepartmentsDict } from "../types/checkedDepartmentsDict";

const initialState: ISourcesState = {
  current: "",
  checkedDepartments: {},
};

const slice = createSlice({
  initialState,
  name: "application",
  reducers: {
    setSelect: (state, { payload }: PayloadAction<string>) => {
      state.current = payload
    },
    resetSelect: (state) => {
      state.current = initialState.current;
    },
    changeCheckedDepartments: (state, { payload }: PayloadAction<{ name: string, checked: boolean }>) => {
      state.checkedDepartments[payload.name] = payload.checked;
    },
    changeAllCheckedDepartments: (state, { payload }: PayloadAction<ICheckedDepartmentsDict>) => {
      state.checkedDepartments = payload;
    },
    reset: () => initialState,
  },
});

export const actions = { ...slice.actions };
export const { reducer } = slice;