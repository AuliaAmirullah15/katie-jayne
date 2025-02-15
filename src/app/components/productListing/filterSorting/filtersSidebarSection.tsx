import { Filter } from "@/data/filters";
import Accordion from "../../accordion/accordion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import {
  addFilter,
  removeFilter,
  updateFilter,
} from "@/app/stores/filtersSlice";
import Checkbox from "../../buttons/checkbox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import RangeBar from "../../buttons/rangeBar";
import { useState } from "react";

export const FiltersSidebarSection: React.FC<{ filters: Filter[] }> = ({
  filters,
}) => {
  const dispatch = useDispatch();

  const selectedFilters = useSelector(
    (state: RootState) => state.filters.selectedFilters
  );

  const [priceRange, setPriceRange] = useState<number[]>([20, 200]);

  const getSelectedFilterNames = (filterId: string) =>
    selectedFilters
      .filter((f) => f.groupId === filterId)
      .map((f) => f.name)
      .join(", ");

  const isFilterSelected = (filterId: string) =>
    selectedFilters.some((f) => f.groupId === filterId);

  const isFilterOptionSelected = (filterId: string) =>
    selectedFilters.some((f) => f.id === filterId);

  const toggleFilter = (id: string, groupId: string, name: string) => () =>
    isFilterOptionSelected(id)
      ? dispatch(removeFilter(id))
      : dispatch(addFilter({ id, groupId, name }));

  return filters.map((filter, key) => (
    <div
      key={filter.id}
      className={`${
        filter.type === "singleoption" && isFilterSelected(filter.id)
          ? "hidden"
          : "flex flex-col space-y-4 w-full"
      }`}
    >
      <Accordion
        title={filter.name}
        titleChildren={
          isFilterSelected(filter.id) && (
            <div className="text-xs capitalize">
              {getSelectedFilterNames(filter.id)}
            </div>
          )
        }
        sectionClassName="px-6 uppercase"
        outerSectionClassName={key === filters.length - 1 ? "border-b" : ""}
        isProductListing={true}
      >
        <div
          className={
            filter.type == "grid" ? "grid grid-cols-3 gap-3 p-4" : "w-full"
          }
        >
          {filter.children?.map((filterOption) => (
            <div key={filterOption.id} className="w-full">
              {filter.type === "multioption" && (
                <div
                  className="flex flex-row w-full hover:cursor-pointer text-gray-700 hover:bg-gray-200 transition-all duration-300"
                  onClick={toggleFilter(
                    filterOption.id,
                    filter.id,
                    filterOption.name
                  )}
                >
                  <div className="flex flex-row mx-6 my-3 w-full">
                    <Checkbox
                      isChecked={isFilterOptionSelected(filterOption.id)}
                    />
                    <p className="ml-2 mr-1 text-md">{filterOption.name}</p>
                    <span className="text-sm flex flex-col items-end justify-end">
                      [{filterOption.count}]
                    </span>
                  </div>
                </div>
              )}

              {filter.type === "singleoption" && (
                <div
                  className="flex flex-row hover:cursor-pointer hover:bg-gray-200 transition-all duration-300"
                  onClick={toggleFilter(
                    filterOption.id,
                    filter.id,
                    filterOption.name
                  )}
                >
                  <div className="flex flex-row mx-6 my-3">
                    <p className="mr-1 text-md">{filterOption.name}</p>
                    <span className="text-sm flex flex-col items-end justify-end">
                      [{filterOption.count}]
                    </span>
                  </div>
                </div>
              )}

              {filter.type === "grid" && (
                <div
                  key={filterOption.id}
                  className="flex flex-col items-center hover:cursor-pointer"
                  onClick={toggleFilter(
                    filterOption.id,
                    filter.id,
                    filterOption.name
                  )}
                >
                  <div
                    className={`w-10 h-10 rounded-full border border-gray-300 flex flex-row items-center justify-center ${filterOption.colour}`}
                    title={filterOption.name}
                  >
                    {isFilterOptionSelected(filterOption.id) ? (
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={filterOption.textColour}
                      />
                    ) : (
                      ""
                    )}
                  </div>
                  <span className="text-sm text-gray-700 mt-2">
                    {filterOption.name}
                  </span>
                </div>
              )}
            </div>
          ))}

          {!filter.children && filter.type === "range" && (
            <div className="flex flex-row w-full">
              <div className="flex flex-row mx-6 my-3 w-full">
                <RangeBar
                  min={20}
                  max={200}
                  value={priceRange}
                  onChange={(newValue) => {
                    setPriceRange(newValue);
                    dispatch(
                      updateFilter({
                        id: filter.id,
                        groupId: filter.id,
                        name: `Price: $${newValue[0]} - $${newValue[1]}`,
                        value: newValue,
                      })
                    );
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </Accordion>
    </div>
  ));
};
