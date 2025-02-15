import React, { useState } from "react";
import FiltersSection from "./filtersSection";
import ProductListingGrid from "./productListingGrid";
import ProductListingHeader from "./productListingHeader";
import ProductListingHighlight from "./productListingHighlight";
import { FilterSortingSidebar } from "./filterSortingSidebar";

const ProductListing = () => {
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  return (
    <div className="my-6 flex flex-col space-y-3">
      <ProductListingHeader
        onFilterButtonClick={() => setOverlayVisible(true)}
      />
      <ProductListingHighlight />
      <FiltersSection onFilterButtonClick={() => setOverlayVisible(true)} />
      <ProductListingGrid />

      <FilterSortingSidebar
        isOverlayVisible={isOverlayVisible}
        setOverlayVisible={() => setOverlayVisible(false)}
      />
    </div>
  );
};

export default ProductListing;
