import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  countries: [],
  states: [],
};

export const vocab = createSlice({
  name: "vocab",
  initialState,
  reducers: {
    initCountries: (state, action) => {
      state.countries = action.payload;
    },
    initStates: (state, action) => {
      state.states = action.payload;
    },
    setVocab: (state, action) => {
      state.countries = action.payload[0];
      state.states = action.payload[1];
    },
  },
});

// setters
export const { initCountries, initStates, setVocab } = vocab.actions;

export default vocab.reducer;
