import { products } from "@/data/products";
import ProductSwiper from "./productSwiper";

export default function MoreLikeThis() {
  return (
    <div className="lg:container mx-auto md:px-4 py-8">
      <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
        <hr className="hidden md:block w-full border-t border-gray-300 mb-16" />
        <h2 className="text-2xl text-main_brown">You might also like these</h2>
        <ProductSwiper products={products} />
      </div>
    </div>
  );
}
