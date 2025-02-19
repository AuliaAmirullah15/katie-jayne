import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { RootState } from "@/app/stores";
// import { addFavorite, removeFavorite } from "@/app/stores/favoritesSlice";
import FavoriteButton from "@/app/components/buttons/favoriteButton";
import { faHeart as SolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as RegularHeart } from "@fortawesome/free-regular-svg-icons";
import { Product } from "@/app/types/product";
import mockImage from "@/public/mock-image.jpg"; // Replace with an actual image
import BasketItem from "@/app/types/basketItem"; // Ensure these types exist
import { FiltersState } from "@/app/stores/filtersSlice";
import { SortingState } from "@/app/stores/sortingSlice";

// Mock Redux store
const mockStore = configureMockStore<RootState>([thunk]);

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

// Define empty mock states for missing slices
const emptyBasketItems: BasketItem[] = []; // Adjust BasketItem type accordingly
const emptyFilters: FiltersState = {
  selectedFilters: [],
}; // Adjust FiltersState based on your app
const emptySorting: SortingState = {
  selectedSorting: null,
}; // Adjust SortingState based on your app

describe("FavoriteButton Component", () => {
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

  test("renders the button correctly", () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("shows outlined heart when not favorited", () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const heartIcon = screen.getByTitle("Add to favorites");
    expect(heartIcon).toBeInTheDocument();
    expect(heartIcon).toHaveAttribute("data-icon", RegularHeart.iconName);
  });

  test("shows filled heart when favorited", () => {
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
    expect(heartIcon).toHaveAttribute("data-icon", SolidHeart.iconName);
  });

  test("dispatches addFavorite when clicked and not favorited", () => {
    render(
      <Provider store={store}>
        <FavoriteButton product={mockProduct} />
      </Provider>
    );

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  });

  test("dispatches removeFavorite when clicked and already favorited", () => {
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

    const button = screen.getByRole("button");
    fireEvent.click(button);

    expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
  });
});
