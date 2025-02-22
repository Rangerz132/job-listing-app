import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define a type for the slice state
interface FilterState {
  filters: string[];
}

// Define the initial state using that type
const initialState: FilterState = {
  filters: [],
};

export const filterSlice = createSlice({
  name: "filters",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<string>) => {
      if (!state.filters.includes(action.payload)) {
        state.filters.push(action.payload);
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      if (state.filters.includes(action.payload)) {
        state.filters.splice(state.filters.indexOf(action.payload), 1);
      }
    },
    clearFilters: (state) => {
      state.filters = [];
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filterSlice.actions;

export default filterSlice.reducer;
