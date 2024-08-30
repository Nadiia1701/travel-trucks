import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    form: ""
  },
  reducers: {
    changeFilter(state, action) {
      state.form = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;

// import { createSelector } from '@reduxjs/toolkit';
// export const selectNameFilter = (state) => state.filters.form;

// export const selectFilteredTrucks = createSelector(
//   [selectTrucks, selectNameFilter],
//   (trucks, formFilter) => {
//     return trucks.filter(truck => {
//       return truck.form.toLowerCase().includes(formFilter.toLowerCase());
//     });
//   }
// );