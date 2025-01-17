import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";
import basketItemsReducer from "./basketItemsSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
    basketItems: basketItemsReducer,
  },
});

// Infer types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
