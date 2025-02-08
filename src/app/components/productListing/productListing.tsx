import ProductFilters from "@/app/components/productListing/productFilters";
import FilterButton from "@/app/components/productListing/filterButton";
import { productList, newArrivals } from "@/data/products";
import London from "@/assets/images/jpg/london.jpeg";

import Image from "next/image";

const ProductListing = () => {
  return (
    <div className="my-6 flex flex-col space-y-3">
      <div className="mx-6 md:mx-14 flex flex-row items-center justify-between">
        <div className="flex flex-row items-end space-x-2">
          <h2 className="text-2xl font-bold">SHOP</h2>
          <span className="text-sm text-gray-500">[25]</span>
        </div>
        <div className="lg:hidden flex flex-row">
          <FilterButton />
        </div>
      </div>
      <div className="relative flex flex-col w-full pb-12">
        <div className="z-10 flex flex-col space-y-4">
          <h3 className="mx-6 md:mx-14 text-xl font-semibold">NEW ARRIVALS</h3>

          {/* NEW ARRIVAL PRODUCTS */}
          <div className="mx-0 md:mx-14">
            <div className="flex flex-row w-full space-x-2 overflow-x-auto scrollbar-hide">
              {newArrivals.map((product, key) => (
                <div
                  key={key}
                  className="flex-flex-col flex-none bg-white space-y-6 w-[250px] md:w-[clamp(120px,16vw,220px)]"
                >
                  <div className="flex flex-col w-full h-[200px] md:h-[120px]">
                    <Image
                      src={product.image}
                      alt="spring"
                      className="object-cover h-full w-full"
                    />
                  </div>
                  <div className="m-6 text-sm">
                    <p className="underline mb-2 font-semibold tracking-widest uppercase">
                      {product.label}
                    </p>
                    <p className="mb-6 text-gray-600">{product.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 flex flex-row w-full h-[75%]">
          <Image
            src={London}
            alt="New Arrivals"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <div className="my-12 mx-0 md:mx-14 flex items-stretch justify-between border-gray-200 border-b-2">
        <div className="mx-6 md:mx-0 flex flex-row overflow-x-auto whitespace-nowrap md:overflow-visible scrollbar-hide">
          <ProductFilters />
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center">
          <FilterButton />
        </div>
      </div>

      <div className="mx-0 md:mx-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-3 gap-y-6">
        {productList.map((product, key) => (
          <div
            key={key}
            className="relative flex flex-col h-96 sm:h-50 group cursor-pointer"
          >
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
                <span className="text-xl">+</span>
              </div>
            </div>
            <div className="p-4 text-gray-700">
              <h3 className="text-sm">{product.name}</h3>
              <p className="text-sm">£{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;
