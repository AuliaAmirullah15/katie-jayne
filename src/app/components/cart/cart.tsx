import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import BasketItem from "@/app/types/basketItem";
import { addToBasket, removeFromBasket } from "@/app/stores/basketItemsSlice";
import quantityReducer from "@/app/reducers/quantityReducer";
import { useDispatch } from "react-redux";
import EmptyCart from "./emptyCart";
import FilledCart from "./filledCart";

export default function Cart() {
  const basketDispatch = useDispatch();
  const basketItems = useSelector((state: RootState) => state.basketItems);

  const updateBasketItemQuantity = (
    basketItem: BasketItem,
    type: "INCREMENT" | "DECREMENT"
  ) => {
    const newBasketItem = {
      ...basketItem,
      quantity: quantityReducer(basketItem.quantity, { type: type }),
    };
    basketDispatch(addToBasket(newBasketItem));
  };

  const removeBasketItem = (basketItem: BasketItem) => {
    basketDispatch(removeFromBasket(basketItem));
  };

  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col">
      <h2 className="text-center text-2xl mb-4">Shopping Bag</h2>

      {basketItems.length === 0 ? (
        <EmptyCart />
      ) : (
        <FilledCart
          basketItems={basketItems}
          updateBasketItemQuantity={updateBasketItemQuantity}
          removeBasketItem={removeBasketItem}
        />
      )}
    </div>
  );
}
