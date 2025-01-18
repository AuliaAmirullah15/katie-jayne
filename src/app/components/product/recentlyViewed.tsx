import { products } from "@/data/products";
import ProductSwiper from "./productSwiper";

export default function RecentlyViewed() {
  return (
    <div className="lg:container mx-auto md:px-4 py-8">
      <div className="flex flex-col items-center justify-center mx-4 md:mx-0">
        <h2 className="text-2xl text-main_brown">Recently Viewed</h2>
        <ProductSwiper products={products} />
      </div>
    </div>
  );
}
