import { createSlice } from "@reduxjs/toolkit";

interface state {
  favoriteRegion: string;
}

const initialDataState: state = {
  favoriteRegion: "Lubuskie",
};

const dataSlice = createSlice({
  name: "data",
  initialState: initialDataState,
  reducers: {
    setFavRegion(state, action) {
      state.favoriteRegion = action.payload;
    },
  },
});

export const dataActions = dataSlice.actions;

export default dataSlice.reducer;
