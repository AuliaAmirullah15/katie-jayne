import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import QuantitySelector from "../inputs/quantitySelector";
import { formatCurrency } from "@/app/utils/currencyFormatter";
import BasketItem from "@/app/types/basketItem";

const ShoppingList: React.FC<{
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
      layout
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

export default ShoppingList;
