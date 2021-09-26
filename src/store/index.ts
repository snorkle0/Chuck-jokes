import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import dataReducer from "./reducers/data";
import uiReducer from "./reducers/ui";
import { chuckJokesApi } from "../services/chuckJokes";

const store = configureStore({
  reducer: {
    data: dataReducer,
    ui: uiReducer,
    [chuckJokesApi.reducerPath]: chuckJokesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(chuckJokesApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;

setupListeners(store.dispatch);
