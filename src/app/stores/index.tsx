import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import basketItemsReducer from "./basketItemsSlice";
import filtersReducer from "./filtersSlice";
import sortingReducer from "./sortingSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    basketItems: basketItemsReducer,
    filters: filtersReducer,
    sorting: sortingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
