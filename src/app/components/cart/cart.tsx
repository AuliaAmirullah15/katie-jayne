import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import Image from "next/image";
import QuantitySelector from "../inputs/quantitySelector";
import BasketItem from "@/app/types/basketItem";
import { useEffect, useState } from "react";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import { addToBasket, removeFromBasket } from "@/app/stores/basketItemsSlice";
import quantityReducer from "@/app/reducers/quantityReducer";
import { useDispatch } from "react-redux";
import { motion, AnimatePresence } from "framer-motion";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import { FaChevronDown } from "react-icons/fa";

const ShoppingListItems: React.FC<{
  basketItem: BasketItem;
  updateBasketItemQuantity: (
    basketItem: BasketItem,
    type: "INCREMENT" | "DECREMENT"
  ) => void;
  removeBasketItem: (basketItem: BasketItem) => void;
}> = ({ basketItem, updateBasketItemQuantity, removeBasketItem }) => {
  const [subtotal, setSubtotal] = useState<number>(0);

  useEffect(() => {
    setSubtotal(basketItem.price * basketItem.quantity);
  }, [basketItem]);

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
      layout // For animating layout changes
      className="flex flex-col p-4 border-gray-300 border-2 space-y-2"
    >
      <div className="flex flex-row">
        <div className="w-full text-center">{basketItem.name}</div>
        <div
          className="cursor-pointer"
          onClick={() => removeBasketItem(basketItem)}
        >
          &times;
        </div>
      </div>
      <div className="w-full text-center text-gray-400 text-sm">
        {basketItem.subname}
      </div>
      <div className="flex flex-row justify-center py-4">
        <Image
          src={basketItem.image}
          alt="Product Image"
          width={200}
          height={200}
          className="object-cover"
          quality={100}
          priority
        />
      </div>
      <div className="w-full flex flex-row justify-center">
        <QuantitySelector
          quantity={basketItem.quantity}
          onIncrement={() => updateBasketItemQuantity(basketItem, "INCREMENT")}
          onDecrement={() => updateBasketItemQuantity(basketItem, "DECREMENT")}
        />
      </div>
      <div className="w-full pt-4">
        <div className="flex flex-row border-gray-300 border-t-2 pt-4 justify-between">
          <p>Subtotal</p>
          <p>{formatCurrency(subtotal, basketItem.currency)}</p>
        </div>
      </div>
    </motion.div>
  );
};

function Checkout() {
  const [isPromoCodeOpen, setIsPromoCodeOpen] = useState(false);

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
            <span>$100.00</span>
          </div>
          <div className="flex justify-between text-md mb-2">
            <span>Estimated Shipping</span>
            <span>Free</span>
          </div>
          <div className="flex justify-between text-md">
            <span>Bag Total</span>
            <span>$100.00</span>
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
}

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
      <div className="flex flex-row space-x-4">
        <div className="grow w-2/3">
          <AnimatePresence>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {basketItems.map((basketItem) => (
                <ShoppingListItems
                  key={basketItem.id}
                  basketItem={basketItem}
                  updateBasketItemQuantity={updateBasketItemQuantity}
                  removeBasketItem={removeBasketItem}
                />
              ))}
            </div>
          </AnimatePresence>
        </div>

        <div className="w-1/3 flex flex-col space-y-4">
          <Checkout />
        </div>
      </div>
    </div>
  );
}
