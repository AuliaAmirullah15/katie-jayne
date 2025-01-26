import { useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import Image from "next/image";
import QuantitySelector from "../inputs/quantitySelector";
import BasketItem from "@/app/types/basketItem";

function ShoppingListItem({ basketItem }: { basketItem: BasketItem }) {
  return (
    <div className="flex flex-col p-4 border-gray-300 border-2 space-y-2">
      <div className="flex flex-row">
        <div className="w-full text-center">{basketItem.name}</div>
        <div>&times;</div>
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
          // onIncrement={() =>
          //   updateBasketItemQuantity(basketItem, "INCREMENT")
          // }
          // onDecrement={() =>
          //   updateBasketItemQuantity(basketItem, "DECREMENT")
          // }
        />
      </div>
      <div className="w-full pt-4">
        <div className="flex flex-row border-gray-300 border-t-2 pt-4 justify-between">
          <p>Subtotal</p>
          <p>{basketItem.price}</p>
        </div>
      </div>
    </div>
  );
}

function ZCheckout() {
  return (
    <div className="w-1/3 bg-gray-800 text-white p-6 rounded shadow-md">
      <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
      <div className="space-y-2">
        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>$100.00</span>
        </div>
        <div className="flex justify-between">
          <span>Bag Total</span>
          <span>$100.00</span>
        </div>
      </div>
      <button className="w-full bg-yellow-500 text-black py-2 mt-4 rounded hover:bg-yellow-600 transition">
        Go to Checkout
      </button>
    </div>
  );
}

export default function Cart() {
  const basketItems = useSelector((state: RootState) => state.basketItems);

  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col">
      <h2 className="text-center text-2xl mb-4">Shopping Bag</h2>
      <div className="flex flex-row space-x-4">
        {/* Shopping Item List */}
        <div className="grow w-2/3">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {basketItems.map((basketItem, index) => (
              <ShoppingListItem key={index} basketItem={basketItem} />
            ))}
          </div>
        </div>

        {/* Checkout */}
        <ZCheckout />
      </div>
    </div>
  );
}
