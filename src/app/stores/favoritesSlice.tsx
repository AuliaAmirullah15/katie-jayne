import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const loadFromLocalStorage = (): string[] => {
  try {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (e) {
    console.error("Failed to load favorites from localStorage:", e);
    return [];
  }
};

const saveToLocalStorage = (favorites: string[]) => {
  try {
    // TODO: NEED TO RETAIN THE DATA FROM LOCALSTORAGE WHILE ALSO ADDING THE CURRENT STATE (SEE AddToBasket)
    localStorage.setItem("favorites", JSON.stringify(favorites));
  } catch (e) {
    console.error("Failed to save favorites to localStorage:", e);
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFromLocalStorage(),
  reducers: {
    addFavorite: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    removeFavorite: (state, action: PayloadAction<string>) => {
      const updatedFavorites = state.filter((id) => id !== action.payload);
      saveToLocalStorage(updatedFavorites);
      return updatedFavorites;
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
