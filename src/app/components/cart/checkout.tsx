import { useState } from "react";
import { useSelector } from "react-redux";
import { FaChevronDown } from "react-icons/fa";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { selectBasketSubtotal } from "@/app/stores/basketItemsSlice";
import BasketItem from "@/app/types/basketItem";
import { formatCurrency } from "@/app/utils/currencyFormatter";

const Checkout: React.FC<{
  basketItem: BasketItem;
}> = ({ basketItem }) => {
  const [isPromoCodeOpen, setIsPromoCodeOpen] = useState(true);
  const subtotal = useSelector(selectBasketSubtotal);

  const togglePromoCode = () => {
    setIsPromoCodeOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-full border-gray-300 border-2 p-4 space-y-3">
        <div
          className="flex justify-between items-center cursor-pointer"
          onClick={togglePromoCode}
        >
          <h3 className="text-md md:text-lg">Got a Promo Code?</h3>
          <span>
            <FaChevronDown
              className={`w-6 h-6 text-gray-500 transform transition-transform duration-300 ${
                isPromoCodeOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </span>
        </div>

        {isPromoCodeOpen && (
          <div className="mt-4 space-y-3">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                placeholder="Enter promo code"
                className="flex-grow h-10 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <PrimaryButton
              type="submit"
              className="w-full"
              buttonType={ButtonType.Secondary}
            >
              Apply
            </PrimaryButton>
          </div>
        )}
      </div>

      <div>
        <div className="w-full border-gray-300 border-2 p-4">
          <h3 className="text-lg mb-4 font-semibold">Order Summary</h3>
          <div className="flex justify-between text-md mb-2">
            <span>Subtotal</span>
            <span>{formatCurrency(subtotal, basketItem.currency)}</span>
          </div>
          <div className="flex justify-between text-md mb-2">
            <span>Estimated Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-md">
            <span>Bag Total</span>
            <span>{formatCurrency(subtotal, basketItem.currency)}</span>
          </div>
          <div className="text-xs text-gray-500 mb-4">(20% VAT included)</div>
          <div className="text-xs text-gray-700">
            Shipping & taxes are calculated at checkout.
          </div>
        </div>
      </div>

      <PrimaryButton
        type="submit"
        className="w-full"
        buttonType={ButtonType.Secondary}
      >
        Secure Checkout
      </PrimaryButton>
    </>
  );
};

export default Checkout;
