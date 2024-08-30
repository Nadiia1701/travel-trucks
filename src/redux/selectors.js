export const selectTrucks = (state) => state.trucks.items;
export const selectIsLoading = (state) => state.trucks.isLoading;
export const selectError = (state) => state.trucks.error;
export const selectPage = (state) => state.trucks.page;
export const selectHasNextPage = state => state.trucks.hasNextPage;
export const selectTruck = state => state.trucks.selectedItem;