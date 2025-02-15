import SidebarLayout from "../layouts/sidebarLayout";
import { filters } from "@/data/filters";
import { ApplyFooter } from "./buttons/applyButton";
import { FilterSortingHeader } from "./filterSorting/filterSortingHeader";
import { AppliedFiltersSection } from "./filterSorting/appliedFiltersSection";
import { SortBySection } from "./filterSorting/sortBySection";
import { FiltersSidebarSection } from "./filterSorting/filtersSidebarSection";

export const FilterSortingSidebar = ({
  isOverlayVisible,
  setOverlayVisible,
}: {
  isOverlayVisible: boolean;
  setOverlayVisible: () => void;
}) => {
  return (
    <SidebarLayout
      isOverlayVisible={isOverlayVisible}
      title={<FilterSortingHeader />}
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

          <FiltersSidebarSection filters={filters} />
        </div>
      </div>

      <ApplyFooter onApply={() => console.log("Apply")} />
    </SidebarLayout>
  );
};
