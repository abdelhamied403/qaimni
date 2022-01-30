import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: null,
  loading: false,
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// setters
export const { setAlert, setLoading } = app.actions;

export default app.reducer;
