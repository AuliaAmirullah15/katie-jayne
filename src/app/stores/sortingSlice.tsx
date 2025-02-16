import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface SortingOption {
  id: string;
  name: string;
}

interface SortingState {
  selectedSorting: SortingOption | null;
}

const loadSortingFromLocalStorage = (): SortingState => {
  try {
    const storedSorting = localStorage.getItem("selectedSorting");
    return storedSorting
      ? JSON.parse(storedSorting)
      : { selectedSorting: null };
  } catch (e) {
    console.error("Failed to load sorting from localStorage:", e);
    return { selectedSorting: null };
  }
};

const saveSortingToLocalStorage = (sorting: SortingState) => {
  try {
    localStorage.setItem("selectedSorting", JSON.stringify(sorting));
  } catch (e) {
    console.error("Failed to save sorting to localStorage:", e);
  }
};

const initialState: SortingState = loadSortingFromLocalStorage();

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<SortingOption>) => {
      state.selectedSorting = action.payload;
      saveSortingToLocalStorage(state);
    },
    clearSorting: (state) => {
      state.selectedSorting = null;
      saveSortingToLocalStorage(state);
    },
  },
});

export const { setSorting, clearSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
