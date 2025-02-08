import Image from "next/image";
import filter from "@/assets/images/png/filter.png";
import { productFilters } from "@/data/headerLinks";

const ProductListing = () => {
  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col">
      <h2 className="text-2xl mb-4">Shop</h2>
      <div className="flex items-stretch justify-between border-gray-200 border-b-2">
        <div className="flex flex-row">
          <ul className="flex flex-row space-x-10 text-gray-800 text-sm">
            {productFilters.map((productFilter, key) => (
              <li
                key={key}
                className="group relative cursor-pointer flex flex-row items-center justify-between h-full grow hover:text-main_brown duration-300 transition-all"
              >
                <span className="relative">{productFilter}</span>
                <span className="absolute left-0 -bottom-1 w-0 h-[4px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-row mb-2">
          <button className="flex flex-row space-x-2 text-sm border-black border-1 px-3 py-2 tracking-widest font-bold">
            <span>FILTER & SORT</span>
            <span>
              <Image
                src={filter}
                alt="sort and filter"
                height={20}
                width={20}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
