import ProductFilters from "@/app/components/productListing/productFilters";
import FilterButton from "@/app/components/productListing/filterButton";

const ProductListing = () => {
  return (
    <div className="my-6 mx-6 md:mx-14 flex flex-col">
      <h2 className="text-2xl mb-4">Shop</h2>
      <div className="flex items-stretch justify-between border-gray-200 border-b-2">
        <div className="flex flex-row">
          <ProductFilters />
        </div>
        <div className="flex flex-row mb-2">
          <FilterButton />
        </div>
      </div>
    </div>
  );
};

export default ProductListing;
