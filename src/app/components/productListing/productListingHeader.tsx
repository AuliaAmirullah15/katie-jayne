import FilterButton from "@/app/components/productListing/filterButton";

const ProductListingHeader = ({
  onFilterButtonClick,
}: {
  onFilterButtonClick: () => void;
}) => (
  <div className="mx-6 md:mx-14 flex flex-row items-center justify-between">
    <div className="flex flex-row items-end space-x-2">
      <h2 className="text-2xl font-bold">SHOP</h2>
      <span className="text-sm text-gray-500">[25]</span>
    </div>
    <div className="lg:hidden flex flex-row">
      <FilterButton onClick={onFilterButtonClick} />
    </div>
  </div>
);

export default ProductListingHeader;
