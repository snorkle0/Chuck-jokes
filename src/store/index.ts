import { createSlice, configureStore } from "@reduxjs/toolkit";

import dataReducer from "./reducers/data";
import uiReducer from './reducers/ui'

const store = configureStore({
  reducer: { data: dataReducer, ui: uiReducer },
});

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>;


export default store;
