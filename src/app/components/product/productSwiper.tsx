import { Product } from "@/app/types/product";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const BasicSwiper = ({ products }: { products: Array<Product> }) => {
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

const TrendingItem = ({ product }: { product: Product }) => {
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
export default function ProductSwiper({ products }: { products: Product[] }) {
  return (
    <>
      <div className="flex flex-row items-start justify-start lg:hidden py-8 h-[480px] w-full">
        <BasicSwiper products={products} />
      </div>
      <div className="w-full hidden lg:flex space-x-4 py-8">
        {products.map((product) => (
          <TrendingItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
