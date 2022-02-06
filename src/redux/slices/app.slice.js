import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  alert: null,
  status: false,
  loading: false,
};

export const app = createSlice({
  name: "app",
  initialState,
  reducers: {
    setAlert: (state, action) => {
      state.alert = action.payload?.message || action.payload;
      state.status = action.payload?.status || 'error';
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

// setters
export const { setAlert, setLoading } = app.actions;

export default app.reducer;
