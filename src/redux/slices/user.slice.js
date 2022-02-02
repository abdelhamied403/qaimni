import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};

export const user = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    initUser: (state, action) => {
      state.user = JSON.parse(localStorage.getItem("user"))?.user
    }
  },
});

// setters
export const { setUser, initUser } = user.actions;

export default user.reducer;
