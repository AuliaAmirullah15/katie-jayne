import ProductFilters from "@/app/components/productListing/productFilters";
import FilterButton from "@/app/components/productListing/filterButton";

const ProductListing = () => {
  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col space-y-3">
      <div className="flex flex-row items-center justify-between">
        <h2 className="text-2xl">Shop</h2>
        <div className="lg:hidden flex flex-row">
          <FilterButton />
        </div>
      </div>
      <div className="flex items-stretch justify-between border-gray-200 border-b-2">
        <div className="flex flex-row overflow-x-auto whitespace-nowrap md:overflow-visible scrollbar-hide">
          <ProductFilters />
        </div>
        <div className="hidden lg:flex flex-row items-center justify-center">
          <FilterButton />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
