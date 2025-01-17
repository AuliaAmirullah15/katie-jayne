import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BasketItem {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  thumbnails: string[];
  quantity: number;
}
const loadFromLocalStorage = (): BasketItem[] => {
  try {
    const storedBasketItem = localStorage.getItem("basketItem");
    return storedBasketItem ? JSON.parse(storedBasketItem) : [];
  } catch (e) {
    console.error("Failed to load basket items from local storage: ", e);
    return [];
  }
};

const saveToLocalStorage = (basketItem: BasketItem[]) => {
  try {
    localStorage.setItem("basketItem", JSON.stringify(basketItem));
  } catch (e) {
    console.error("Failed to save basket items to localStorage: ", e);
  }
};

const basketItemsSlice = createSlice({
  name: "basketItems",
  initialState: loadFromLocalStorage(),
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      state.push(action.payload);
      saveToLocalStorage(state);
    },
    removeFromBasket: (state, action: PayloadAction<BasketItem>) => {
      const updatedBasketItems = state.filter(
        (basketItem) => basketItem.id !== action.payload.id
      );
      saveToLocalStorage(updatedBasketItems);
      return updatedBasketItems;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketItemsSlice.actions;
export default basketItemsSlice.reducer;
