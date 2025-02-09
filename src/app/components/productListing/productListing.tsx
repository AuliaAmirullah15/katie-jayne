import FiltersSection from "./filtersSection";
import ProductListingGrid from "./productListingGrid";
import ProductListingHeader from "./productListingHeader";
import ProductListingHighlight from "./productListingHighlight";

const ProductListing = () => {
  return (
    <div className="my-6 flex flex-col space-y-3">
      <ProductListingHeader />
      <ProductListingHighlight />
      <FiltersSection />
      <ProductListingGrid />
    </div>
  );
};

export default ProductListing;
