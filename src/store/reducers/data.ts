import { createSlice } from "@reduxjs/toolkit";
import { omit } from "lodash";

interface IJokesDict {
  [id: number]: string;
}

interface IState {
  currentJoke: string;
  savedJokes: IJokesDict;
  customPerson: string;
  category: string;
}

const initialDataState: IState = {
  currentJoke: "",
  savedJokes: {},
  customPerson: "",
  category: ""
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setCurrentJoke(state, action) {
      state.currentJoke = action.payload;
    },
    addSavedJoke(state, action) {
      const { id, jokeVal } = action.payload;
      state.savedJokes[id] = jokeVal;
    },
    deleteSavedJoke(state, action) {
      const { id } = action.payload;
      state.savedJokes = omit(state.savedJokes, id);
    },
    setCustomPerson(state, action) {
      state.customPerson = action.payload;
    },
    setCategory(state, action) {
      state.category = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
