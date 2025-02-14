import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SortingState {
  selectedSorting: string | null; // Only one sorting option can be selected
}

const initialState: SortingState = {
  selectedSorting: null,
};

const sortingSlice = createSlice({
  name: "sorting",
  initialState,
  reducers: {
    setSorting: (state, action: PayloadAction<string>) => {
      state.selectedSorting = action.payload;
    },
    clearSorting: (state) => {
      state.selectedSorting = null;
    },
  },
});

export const { setSorting, clearSorting } = sortingSlice.actions;
export default sortingSlice.reducer;
