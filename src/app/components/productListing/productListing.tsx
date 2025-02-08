import Image from "next/image";
import filter from "@/assets/images/png/filter.png";

const ProductListing = () => {
  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col">
      <h2 className="text-2xl mb-4">Shop</h2>
      <div className="flex items-stretch justify-between">
        <div className="flex flex-row">Categories</div>
        <div className="flex flex-row">
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
