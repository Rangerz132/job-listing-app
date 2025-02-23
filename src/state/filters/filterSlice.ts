import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FilterState {
  filters: string[];
}

const initialState: FilterState = {
  filters: [],
};

export const filterSlice = createSlice({
  name: "filters",
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
