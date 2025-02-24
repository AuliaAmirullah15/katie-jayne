import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "@/app/stores";
import BasketItem from "@/app/types/basketItem";
import { FiltersState } from "@/app/stores/filtersSlice";
import { SortingState } from "@/app/stores/sortingSlice";
import AddToCartButton from "@/app/components/buttons/addToCartButton";
import mockImage from "@/public/mock-image.jpg";

// Mock Redux store
const mockStore = configureMockStore<
  RootState,
  ThunkDispatch<RootState, undefined, AnyAction>
>([]);

// Mock product data
const mockProduct: BasketItem = {
  id: 1,
  code: "123",
  name: "Test Product",
  subname: "Test Subname",
  description: "Test Description",
  price: 100,
  currency: "USD",
  image: mockImage,
  quantity: 3,
  thumbnails: [mockImage],
  details: [{ title: "Feature", description: "Feature description" }],
};

const emptyBasketItems: BasketItem[] = [];
const emptyFilters: FiltersState = {
  selectedFilters: [],
};
const emptySorting: SortingState = {
  selectedSorting: null,
};

describe("AddToCartButton Component should", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      favorites: [],
      basketItems: emptyBasketItems,
      filters: emptyFilters,
      sorting: emptySorting,
    });

    store.dispatch = jest.fn();
  });

  test("render the button correctly", () => {
    render(
      <Provider store={store}>
        <AddToCartButton
          product={mockProduct}
          totalPrice={mockProduct.quantity * mockProduct.price}
          onAddToCart={() => {}}
        />
      </Provider>
    );

    const button = screen.getByTestId("add-to-cart");
    expect(button).toBeInTheDocument();
  });
});
