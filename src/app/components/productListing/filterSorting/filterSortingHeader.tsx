import { clearFilters } from "@/app/stores/filtersSlice";
import { clearSorting } from "@/app/stores/sortingSlice";
import { useDispatch } from "react-redux";

export const FilterSortingHeader = () => {
  const dispatch = useDispatch();

  const clearFiltersAndSort = () => {
    dispatch(clearFilters());
    dispatch(clearSorting());
  };

  return (
    <div className="flex flex-row items-center justify-between ml-6 mr-16 my-6">
      <h2 className="text-xl font-bold tracking-wide">Filter & Sort</h2>
      <p
        className="text-gray-500 underline hover:cursor-pointer hover:text-black transition-all duration-300"
        onClick={clearFiltersAndSort}
      >
        Clear All
      </p>
    </div>
  );
};
