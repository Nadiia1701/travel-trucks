import { createSlice } from "@reduxjs/toolkit";
import { fetchTrucksList } from "./trucksOps";

const handlePending = (state) => {
    state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  state.items = [];
  state.hasNextPage = false;
};

const trucksSlice = createSlice({
  name: "trucks",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
    page: 1,
    limit: 5,
    total: 0,
    hasNextPage: false,
  },
  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTrucksList.pending, handlePending)
      .addCase(fetchTrucksList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        if (state.page === 1) {
          state.items = action.payload.items;
        } else {
          state.items = [...state.items, ...action.payload.items];
        }
        state.total = action.payload.total;
        state.hasNextPage = state.items.length < state.total;
      })
      .addCase(fetchTrucksList.rejected, handleRejected);
  },
});

export const { setPage } = trucksSlice.actions;
export const trucksReducer = trucksSlice.reducer;