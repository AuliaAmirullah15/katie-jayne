import { AnimatePresence, motion } from "framer-motion";
import ShoppingList from "@/app/components/cart/shoppingList";
import Checkout from "@/app/components/cart/checkout";
import BasketItem from "@/app/types/basketItem";

const FilledCart: React.FC<{
  basketItems: BasketItem[];
  updateBasketItemQuantity: (
    basketItem: BasketItem,
    type: "INCREMENT" | "DECREMENT"
  ) => void;
  removeBasketItem: (basketItem: BasketItem) => void;
}> = ({ basketItems, updateBasketItemQuantity, removeBasketItem }) => (
  <div className="flex flex-col md:flex-row md:space-x-4 space-y-16 md:space-y-0">
    <div className="grow w-full md:w-2/3">
      <AnimatePresence>
        <div
          className={`grid gap-4 grid-cols-1 ${
            basketItems.length === 1 ? "lg:grid-cols-1" : "lg:grid-cols-2"
          }`}
        >
          {basketItems.map((basketItem) => (
            <ShoppingList
              key={basketItem.id}
              basketItem={basketItem}
              updateBasketItemQuantity={updateBasketItemQuantity}
              removeBasketItem={removeBasketItem}
            />
          ))}
        </div>
      </AnimatePresence>
    </div>

    <div className="w-full md:w-1/3">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
          layout
          className="md:sticky md:top-[110px] flex flex-col space-y-4"
        >
          <Checkout basketItem={basketItems[0]} />
        </motion.div>
      </AnimatePresence>
    </div>
  </div>
);

export default FilledCart;
