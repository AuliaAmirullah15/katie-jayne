"use client";
import ProductSwiper from "./product/productSwiper";
import { products } from "@/data/products";

const Trending = () => {
  return (
    <div className="mx-6 md:mx-12 my-12">
      <h1 className="text-main_brown text-4xl font-cardo">Whats trending</h1>
      <ProductSwiper products={products} />
    </div>
  );
};

export default Trending;
