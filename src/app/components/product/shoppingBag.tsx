import React from "react";
import Image from "next/image";
import QuantitySelector from "../inputs/quantitySelector";
import OverlayCloseButton from "../buttons/overlayCloseButton";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import { useDispatch } from "react-redux";
import { removeFromBasket } from "@/app/stores/basketItemsSlice";
import BasketItem from "@/app/types/basketItem";

interface ShoppingBagProps {
  isOverlayVisible: boolean;
  basketItems: BasketItem[];
  onClose: () => void;
}

const ShoppingBag: React.FC<ShoppingBagProps> = ({
  isOverlayVisible,
  basketItems,
  onClose,
}) => {
  const basketDispatch = useDispatch();

  return (
    <div
      className={`fixed inset-0 z-50 bg-black bg-opacity-50 transition-opacity duration-500 ${
        isOverlayVisible ? "opacity-100 visible" : "opacity-0 invisible"
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

        {basketItems.map((basketItem, index) => (
          <div
            className="grid grid-cols-12 gap-6 m-6 pb-14 border-b-2 border-gray-300"
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
                dispatch={(action) =>
                  basketDispatch({
                    ...action,
                    basketItem,
                  })
                }
              />
            </div>
            <div className="col-span-1 flex flex-col">
              <div
                className="text-2xl cursor-pointer"
                onClick={() => basketDispatch(removeFromBasket(basketItem))}
              >
                &times;
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoppingBag;
