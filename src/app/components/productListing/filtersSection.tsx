import ProductFilters from "@/app/components/productListing/productFilters";
import FilterButton from "@/app/components/productListing/filterButton";

const FiltersSection = () => (
  <div className="my-12 mx-0 md:mx-14 flex items-stretch justify-between border-gray-200 border-b-2">
    <div className="mx-6 md:mx-0 flex flex-row overflow-x-auto whitespace-nowrap md:overflow-visible scrollbar-hide">
      <ProductFilters />
    </div>
    <div className="hidden lg:flex flex-row items-center justify-center">
      <FilterButton />
    </div>
  </div>
);

export default FiltersSection;
