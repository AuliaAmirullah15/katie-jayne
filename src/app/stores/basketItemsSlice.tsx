import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import BasketItem from "../types/basketItem";

const loadFromLocalStorage = (): BasketItem[] => {
  try {
    const storedBasketItems = localStorage.getItem("basketItem");
    return storedBasketItems ? JSON.parse(storedBasketItems) : [];
  } catch (e) {
    console.error("Failed to load basket items from local storage: ", e);
    return [];
  }
};

const saveToLocalStorage = (basketItems: BasketItem[]) => {
  try {
    // Make Sure we reatin the existing data from the local storage while ading the new basket item from the state (current session)
    const storedBasketItem = localStorage.getItem("basketItem");
    const parsedBasket: BasketItem[] = storedBasketItem
      ? JSON.parse(storedBasketItem)
      : [];
    let updatedBasket: BasketItem[] = [];

    if (parsedBasket.length > 0) {
      // Create a map for existing items for easier lookup
      const basketMap = new Map(parsedBasket.map((item) => [item.id, item]));

      basketItems.forEach((item) => {
        if (basketMap.has(item.id)) {
          // Update the existing item
          basketMap.set(item.id, { ...basketMap.get(item.id), ...item });
        } else {
          // Add the new item
          basketMap.set(item.id, item);
        }
      });

      // Convert map back to an array
      updatedBasket = Array.from(basketMap.values());
    } else {
      // If nothing exists in localStorage, set the provided items directly
      updatedBasket = basketItems;
    }

    // Save updated basket back to localStorage
    localStorage.setItem("basketItem", JSON.stringify(updatedBasket));
  } catch (e) {
    console.error("Failed to save basket items to localStorage: ", e);
  }
};

const removeItemFromLocalStorage = (itemId: number) => {
  try {
    // Load the current basket from localStorage
    const storedBasketItem = localStorage.getItem("basketItem");
    const parsedBasket: BasketItem[] = storedBasketItem
      ? JSON.parse(storedBasketItem)
      : [];

    // Filter out the item with the given id
    const updatedBasket = parsedBasket.filter((item) => item.id !== itemId);

    // Save the updated basket back to localStorage
    localStorage.setItem("basketItem", JSON.stringify(updatedBasket));
  } catch (e) {
    console.error("Failed to remove item from localStorage: ", e);
  }
};

const basketItemsSlice = createSlice({
  name: "basketItems",
  initialState: loadFromLocalStorage(),
  reducers: {
    addToBasket: (state, action: PayloadAction<BasketItem>) => {
      const itemExistId = state.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemExistId > -1) {
        state[itemExistId] = action.payload;
      } else {
        state.push(action.payload);
      }

      saveToLocalStorage(state);
    },
    removeFromBasket: (state, action: PayloadAction<BasketItem>) => {
      const index = state.findIndex(
        (basketItem) => basketItem.id === action.payload.id
      );

      if (index > -1) {
        state.splice(index, 1);
        removeItemFromLocalStorage(action.payload.id);
      }
    },
  },
});

export const { addToBasket, removeFromBasket } = basketItemsSlice.actions;
export default basketItemsSlice.reducer;
