import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Filter {
  id: string;
  groupId: string;
  name: string;
}

interface FiltersState {
  selectedFilters: Filter[];
}

const loadFiltersFromLocalStorage = (): FiltersState => {
  try {
    const storedFilters = localStorage.getItem("selectedFilters");
    return storedFilters ? JSON.parse(storedFilters) : { selectedFilters: [] };
  } catch (e) {
    console.error("Failed to load filters from localStorage:", e);
    return { selectedFilters: [] };
  }
};

const saveFiltersToLocalStorage = (filters: FiltersState) => {
  try {
    localStorage.setItem("selectedFilters", JSON.stringify(filters));
  } catch (e) {
    console.error("Failed to save filters to localStorage:", e);
  }
};

const initialState: FiltersState = loadFiltersFromLocalStorage();

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    addFilter: (state, action: PayloadAction<Filter>) => {
      const existingFilter = state.selectedFilters.find(
        (filter) => filter.id === action.payload.id
      );
      if (!existingFilter) {
        state.selectedFilters.push(action.payload);
        saveFiltersToLocalStorage(state);
      }
    },
    removeFilter: (state, action: PayloadAction<string>) => {
      state.selectedFilters = state.selectedFilters.filter(
        (filter) => filter.id !== action.payload
      );
      saveFiltersToLocalStorage(state);
    },
    clearFilters: (state) => {
      state.selectedFilters = [];
      saveFiltersToLocalStorage(state);
    },
  },
});

export const { addFilter, removeFilter, clearFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
