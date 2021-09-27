import { createSlice } from "@reduxjs/toolkit";

export interface IUIParams {
  timesFetched: number;
  category: string;
  person: string;
}

interface state {
  queryParams: IUIParams;
}

const initialState: state = {
  queryParams: {
    timesFetched: 0,
    category: "",
    person: "",
  },
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    setQueryParams(state, action) {
      state.queryParams = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
