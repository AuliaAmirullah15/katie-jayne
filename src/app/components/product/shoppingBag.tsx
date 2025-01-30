import React, { useEffect } from "react";
import Image from "next/image";
import QuantitySelector from "../inputs/quantitySelector";
import OverlayCloseButton from "../buttons/overlayCloseButton";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "@/app/stores/basketItemsSlice";
import BasketItem from "@/app/types/basketItem";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import quantityReducer from "@/app/reducers/quantityReducer";
import { useRouter } from "next/navigation";

interface ShoppingBagProps {
  isOverlayVisible: boolean;
  basketItems: BasketItem[];
  onClose: () => void;
}

const BasketItemList: React.FC<{
  basketItems: BasketItem[];
  updateBasketItemQuantity: (
    basketItem: BasketItem,
    type: "INCREMENT" | "DECREMENT"
  ) => void;
  removeBasketItem: (basketItem: BasketItem) => void;
}> = ({ basketItems, updateBasketItemQuantity, removeBasketItem }) => {
  return (
    <div className="flex-1 grow overflow-y-auto">
      {basketItems.map((basketItem, index) => (
        <div
          className={`grid grid-cols-12 gap-6 m-6 pb-8 ${
            index !== basketItems.length - 1
              ? "border-b-2 border-gray-300"
              : "border-0"
          }`}
          key={index}
        >
          <div className="col-span-4 flex flex-col relative">
            <Image
              src={basketItem.image}
              alt={basketItem.name}
              className="object-cover w-full max-h-[200px] h-full"
              layout="fill"
            />
          </div>
          <div className="col-span-7 flex flex-col">
            <p className="text-xl mb-2">{basketItem.name}</p>
            <p className="text-gray-700 text-lg mb-2">
              {formatCurrency(basketItem.price, basketItem.currency)}
            </p>
            <QuantitySelector
              quantity={basketItem.quantity}
              onIncrement={() =>
                updateBasketItemQuantity(basketItem, "INCREMENT")
              }
              onDecrement={() =>
                updateBasketItemQuantity(basketItem, "DECREMENT")
              }
            />
          </div>
          <div className="col-span-1 flex flex-col">
            <div
              className="text-2xl cursor-pointer"
              onClick={() => removeBasketItem(basketItem)}
            >
              &times;
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const CheckoutFooter: React.FC<{ onCheckout: () => void }> = ({
  onCheckout,
}) => {
  return (
    <div className="left-0 w-full p-4 bg-white border-t border-gray-300">
      <p className="text-center text-gray-600 mb-2">
        Shipping & taxes are calculated at checkout
      </p>
      <PrimaryButton
        buttonType={ButtonType.Secondary}
        className="w-full"
        onClick={onCheckout}
      >
        Go To Checkout
      </PrimaryButton>
    </div>
  );
};

const ShoppingBag: React.FC<ShoppingBagProps> = ({
  isOverlayVisible,
  basketItems,
  onClose,
}) => {
  const router = useRouter();
  const basketDispatch = useDispatch();

  useEffect(() => {
    if (isOverlayVisible) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => document.body.classList.remove("no-scroll");
  }, [isOverlayVisible]);

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
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-700 ${
        isOverlayVisible
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`fixed top-0 h-full bg-white z-50 flex flex-col transition-transform duration-500 ease-in-out ${
          isOverlayVisible
            ? "transform translate-x-0"
            : "transform translate-x-full"
        } 
        w-full md:w-[400px] right-0`}
      >
        <OverlayCloseButton onClick={onClose} />
        <h2 className="text-xl m-6">Shopping Bag</h2>
        <hr className="w-full border-t border-gray-300"></hr>

        <BasketItemList
          basketItems={basketItems}
          updateBasketItemQuantity={updateBasketItemQuantity}
          removeBasketItem={removeBasketItem}
        />

        <CheckoutFooter onCheckout={() => router.push(`/checkout`)} />
      </div>
    </div>
  );
};

export default ShoppingBag;
