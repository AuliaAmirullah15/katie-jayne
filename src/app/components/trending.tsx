"use client";
import product1 from "@/assets/images/jpg/product1.jpg";
import product2 from "@/assets/images/jpg/product2.jpg";
import product3 from "@/assets/images/jpg/product3.jpg";
import product4 from "@/assets/images/jpg/product4.jpg";
import product5 from "@/assets/images/jpg/product5.jpg";
import { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface trendingProduct {
  id: number;
  name: string;
  price: number;
  image: StaticImageData;
}

const BasicSwiper = ({ products }: { products: Array<trendingProduct> }) => {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView="auto"
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {products.map((product) => (
        <SwiperSlide key={product.id}>
          <TrendingItem product={product} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

const TrendingItem = ({ product }: { product: trendingProduct }) => {
  return (
    <div className="relative lg:w-1/5 flex flex-col h-96 sm:h-50 group cursor-pointer">
      <div
        className="h-full relative bg-cover bg-center"
        style={{ backgroundImage: `url(${product.image.src})` }}
      >
        <div className="absolute bottom-0 left-0 w-full opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-y-0 translate-y-6">
          <div className="bg-white text-black text-sm py-4 px-4">
            <span>Buy Now</span>
          </div>
        </div>

        <div className="absolute bottom-0 group-hover:rotate-[135deg] group-hover:pt-3 right-4 p-4 text-black opacity-100 transition-all transform group-hover:translate-y-0 group-hover:opacity-100">
          <span className="text-xl ">+</span>
        </div>
      </div>

      <div className="p-4 text-gray-700">
        <h3 className="text-sm">{product.name}</h3>
        <p className="text-sm">£{product.price}</p>
      </div>
    </div>
  );
};

const Trending = () => {
  const products = [
    {
      id: 1,
      name: "Katie Crystal Cocktail Glasses",
      price: 95,
      image: product1,
    },
    {
      id: 2,
      name: "Katie Crystal Square Decanter",
      price: 180,
      image: product2,
    },
    {
      id: 3,
      name: "Katie Essentials Glass Tumblers",
      price: 50,
      image: product3,
    },
    {
      id: 4,
      name: "Katie Crystal Old Fashioned Tumblers",
      price: 98,
      image: product4,
    },
    {
      id: 5,
      name: "Katie Crystal Round Decanter",
      price: 140,
      image: product5,
    },
  ];

  return (
    <div className="mx-6 md:mx-12 my-12">
      <h1 className="text-main_brown text-4xl font-cardo">Whats trending</h1>
      <div className="flex lg:hidden py-8 h-[480px]">
        <BasicSwiper products={products} />
      </div>
      <div className="w-full hidden lg:flex space-x-4 py-8">
        {products.map((product) => (
          <TrendingItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Trending;
