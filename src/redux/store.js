import { configureStore } from "@reduxjs/toolkit";
import { trucksReducer } from "./trucksSlice";
// import { filtersReducer } from "./filtersSlise";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
});