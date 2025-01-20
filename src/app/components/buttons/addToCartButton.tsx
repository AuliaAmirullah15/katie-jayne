import BasketItem from "@/app/types/basketItem";
import PrimaryButton, { ButtonType } from "./primaryButton";
import { JSX } from "react";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { addToBasket } from "@/app/stores/basketItemsSlice";

export default function AddToCartButton({
  product,
  totalPrice,
  onAddToCart,
}: {
  product: BasketItem;
  totalPrice: number;
  onAddToCart: () => void;
}): JSX.Element {
  const dispatch = useDispatch();
  const addToCart = () => {
    dispatch(addToBasket(product));
    onAddToCart();
  };

  return (
    <PrimaryButton
      type="submit"
      className="w-full md:w-auto md:mt-0 mx-0 text-md flex-auto"
      buttonType={ButtonType.Secondary}
      onClick={addToCart}
    >
      Add To Cart {formatCurrency(totalPrice, product.currency)}
    </PrimaryButton>
  );
}
