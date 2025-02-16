import SidebarLayout from "../layouts/sidebarLayout";
import { filters } from "@/data/filters";
import { ApplyFooter } from "./buttons/applyButton";
import { FilterSortingHeader } from "./filterSorting/filterSortingHeader";
import { AppliedFiltersSection } from "./filterSorting/appliedFiltersSection";
import { SortBySection } from "./filterSorting/sortBySection";
import { FiltersSidebarSection } from "./filterSorting/filtersSidebarSection";
import { clearFilters } from "@/app/stores/filtersSlice";
import { clearSorting } from "@/app/stores/sortingSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import { useEffect, useState } from "react";

export const FilterSortingSidebar = ({
  isOverlayVisible,
  setOverlayVisible,
}: {
  isOverlayVisible: boolean;
  setOverlayVisible: () => void;
}) => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state: RootState) => state.filters.selectedFilters
  );

  const clearFiltersAndSort = () => {
    setPriceRange([20, 200]);
    dispatch(clearFilters());
    dispatch(clearSorting());
  };

  const [priceRange, setPriceRange] = useState<number[]>([20, 200]);

  useEffect(() => {
    const newPriceRange = (selectedFilters.find((f) => f.groupId === "fi0006")
      ?.value as number[]) || [20, 200];

    setPriceRange(newPriceRange);
  }, [selectedFilters]);

  return (
    <SidebarLayout
      isOverlayVisible={isOverlayVisible}
      title={<FilterSortingHeader onClearAll={clearFiltersAndSort} />}
      onClose={setOverlayVisible}
    >
      <div className="flex-1 grow w-full overflow-y-auto">
        <div className="flex flex-col items-center justify-between mt-6">
          <div className="w-full">
            <AppliedFiltersSection />
          </div>
          <div className="flex flex-col space-y-4 w-full">
            <SortBySection />
          </div>

          <FiltersSidebarSection
            filters={filters}
            priceRange={priceRange}
            setPriceRange={setPriceRange}
          />
        </div>
      </div>

      <ApplyFooter onApply={() => console.log("Apply")} />
    </SidebarLayout>
  );
};
