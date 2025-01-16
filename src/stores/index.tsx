import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "./favoritesSlice";

const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});

// Infer types for better TypeScript support
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
