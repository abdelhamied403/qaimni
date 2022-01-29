import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";
import app from "./slices/app.slice";

export const store = configureStore({
  reducer: {
    user,
    app,
  },
});
