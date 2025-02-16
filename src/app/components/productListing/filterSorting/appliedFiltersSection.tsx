import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import { FilterState, removeFilter } from "@/app/stores/filtersSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export const AppliedFiltersSection = () => {
  const dispatch = useDispatch();

  const selectedFilters = useSelector(
    (state: RootState) => state.filters.selectedFilters
  );

  const handleRemoveFilter = (id: string) => () => {
    dispatch(removeFilter(id));
  };

  return (
    <div className="flex flex-col space-y-4 mx-6 mb-4">
      <h4 className="text-sm font-bold">APPLIED FILTERS</h4>
      <div className="flex flex-row flex-wrap gap-2 w-full">
        {selectedFilters.length > 0 ? (
          selectedFilters.map((filter: FilterState) => (
            <div
              key={filter.id}
              className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max cursor-pointer"
              onClick={handleRemoveFilter(filter.id)}
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
              <p className="text-sm">
                {filter.id === "price" && filter.value
                  ? `Price: $${filter.value[0]} - $${filter.value[1]}`
                  : filter.name}
              </p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No Filter Applied</p>
        )}
      </div>
    </div>
  );
};
