import BasketItem from "@/app/types/basketItem";
import PrimaryButton, { ButtonType } from "./primaryButton";
import { JSX } from "react";
import { formatCurrency } from "@/app/utils/currencyFormatter";

export default function AddToCartButton({
  product,
  totalPrice,
}: {
  product: BasketItem;
  totalPrice: number;
}): JSX.Element {
  return (
    <PrimaryButton
      type="submit"
      className="w-full md:w-auto md:mt-0 mx-0 text-md flex-auto"
      buttonType={ButtonType.Secondary}
    >
      Add To Cart {formatCurrency(totalPrice, product.currency)}
    </PrimaryButton>
  );
}
