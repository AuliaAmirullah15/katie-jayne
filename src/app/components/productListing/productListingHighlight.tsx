import Image from "next/image";
import London from "@/assets/images/jpg/london.jpeg";
import { newArrivals } from "@/data/products";

const ProductListingHighlight = () => (
  <div className="relative flex flex-col w-full pb-12">
    <div className="z-10 flex flex-col space-y-4">
      <h3 className="mx-6 md:mx-14 text-xl font-semibold">NEW ARRIVALS</h3>
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
                  alt={product.label}
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
);

export default ProductListingHighlight;
