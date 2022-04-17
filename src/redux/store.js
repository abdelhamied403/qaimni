import { configureStore } from "@reduxjs/toolkit";
import user from "./slices/user.slice";
import app from "./slices/app.slice";
import vocab from "./slices/vocab.slice";

export const store = configureStore({
  reducer: {
    user,
    app,
    vocab,
  },
});
