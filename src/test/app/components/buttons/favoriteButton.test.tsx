import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import { ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "@/app/stores";
import FavoriteButton from "@/app/components/buttons/favoriteButton";
import { Product } from "@/app/types/product";
import mockImage from "@/public/mock-image.jpg";
import BasketItem from "@/app/types/basketItem";
import { FiltersState } from "@/app/stores/filtersSlice";
import { SortingState } from "@/app/stores/sortingSlice";

// Mock Redux store
const mockStore = configureMockStore<
  RootState,
  ThunkDispatch<RootState, undefined, AnyAction>
>([]);

jest.mock("@/app/stores/favoritesSlice", () => ({
  addFavorite: jest.fn((product) => ({
    type: "favorites/addFavorite",
    payload: product,
  })),
  removeFavorite: jest.fn((product) => ({
    type: "favorites/removeFavorite",
    payload: product,
  })),
}));

// Mock product data
const mockProduct: Product = {
  id: 1,
  code: "123",
  name: "Test Product",
  subname: "Test Subname",
  description: "Test Description",
  price: 100,
  currency: "USD",
  image: mockImage,
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

describe("FavoriteButton Component should", () => {
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
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("show outlined heart when not favorited", () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const heartIcon = screen.getByTitle("Add to favorites");
    expect(heartIcon).toBeInTheDocument();
    expect(screen.getByLabelText("regular-heart")).toBeInTheDocument();
  });

  test("show filled heart when favorited", () => {
    store = mockStore({
      favorites: [mockProduct],
      basketItems: emptyBasketItems,
      filters: emptyFilters,
      sorting: emptySorting,
    });

    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const heartIcon = screen.getByTitle("Remove from favorites");
    expect(heartIcon).toBeInTheDocument();
    expect(screen.getByLabelText("solid-heart")).toBeInTheDocument();
  });

  test("dispatche addFavorite when clicked and not favorited", () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "favorites/addFavorite",
      payload: mockProduct,
    });
  });

  test("dispatche removeFavorite when clicked and already favorited", () => {
    store = mockStore({
      favorites: [mockProduct],
      basketItems: emptyBasketItems,
      filters: emptyFilters,
      sorting: emptySorting,
    });

    const dispatchSpy = jest.spyOn(store, "dispatch");

    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(dispatchSpy).toHaveBeenCalledWith({
      type: "favorites/removeFavorite",
      payload: mockProduct,
    });

    dispatchSpy.mockRestore();
  });

  test("set aria-label to solid heart when is favorited", () => {
    store = mockStore({
      favorites: [mockProduct],
      basketItems: emptyBasketItems,
      filters: emptyFilters,
      sorting: emptySorting,
    });

    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );
    const heartIcon = screen.getByTestId("heart-icon");
    expect(heartIcon).toHaveAttribute("aria-label", "solid-heart");
  });

  test("set aria-label to regular heart when is not favorited", () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );
    const heartIcon = screen.getByTestId("heart-icon");
    expect(heartIcon).toHaveAttribute("aria-label", "regular-heart");
  });
});
