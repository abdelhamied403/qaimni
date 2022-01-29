import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: null,
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
  },
});

// setters
export const { setAlert } = app.actions;

export default app.reducer;
