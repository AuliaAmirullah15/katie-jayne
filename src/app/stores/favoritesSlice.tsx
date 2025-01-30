import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../types/product";

const loadFromLocalStorage = (): Product[] => {
  try {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  } catch (e) {
    console.error("Failed to load favorites from localStorage:", e);
    return [];
  }
};

const saveToLocalStorage = (favorites: Product[]) => {
  try {
    // Make Sure we retain the existing data from the local storage while ading the new basket item from the state (current session)
    const storedFavorites = localStorage.getItem("favorites");
    const parsedFavorites: Product[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];
    let updatedFavorites: Product[] = [];

    if (parsedFavorites.length > 0) {
      // Create a map for existing items for easier lookup
      const favoritesMap = new Map(
        parsedFavorites.map((item) => [item.id, item])
      );

      favorites.forEach((item) => {
        if (favoritesMap.has(item.id)) {
          // Update the existing item
          favoritesMap.set(item.id, { ...favoritesMap.get(item.id), ...item });
        } else {
          // Add the new item
          favoritesMap.set(item.id, item);
        }
      });

      // Convert map back to an array
      updatedFavorites = Array.from(favoritesMap.values());
    } else {
      // If nothing exists in localStorage, set the provided items directly
      updatedFavorites = favorites;
    }

    // Save updated favorites back to localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } catch (e) {
    console.error("Failed to save favorites to localStorage:", e);
  }
};

const removeItemFromLocalStorage = (itemId: number) => {
  try {
    // Load the current favorites from localStorage
    const storedFavorites = localStorage.getItem("favorites");
    const parsedFavorites: Product[] = storedFavorites
      ? JSON.parse(storedFavorites)
      : [];

    // Filter out the item with the given id
    const updatedFavorites = parsedFavorites.filter(
      (item) => item.id !== itemId
    );

    // Save the updated favorites back to localStorage
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
  } catch (e) {
    console.error("Failed to remove favorite item from localStorage: ", e);
  }
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: loadFromLocalStorage(),
  reducers: {
    addFavorite: (state, action: PayloadAction<Product>) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    removeFavorite: (state, action: PayloadAction<Product>) => {
      const index = state.findIndex(
        (favorite) => favorite.id === action.payload.id
      );

      if (index > -1) {
        state.splice(index, 1);
        removeItemFromLocalStorage(action.payload.id);
      }
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
