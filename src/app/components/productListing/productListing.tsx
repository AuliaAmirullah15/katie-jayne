import React, { useState } from "react";
import FiltersSection from "./filtersSection";
import ProductListingGrid from "./productListingGrid";
import ProductListingHeader from "./productListingHeader";
import ProductListingHighlight from "./productListingHighlight";
import SidebarLayout from "../layouts/sidebarLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Accordion from "../accordion/accordion";
import Checkbox from "../buttons/checkbox";
import { Filter, filters } from "@/data/filters";
import RangeBar from "../buttons/rangeBar";
import PrimaryButton, { ButtonType } from "../buttons/primaryButton";
import {
  addFilter,
  clearFilters,
  removeFilter,
} from "@/app/stores/filtersSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/app/stores";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const ApplyFooter: React.FC<{ onApply: () => void }> = ({ onApply }) => {
  return (
    <div className="left-0 w-full p-4 bg-white border-t border-gray-300">
      <PrimaryButton
        buttonType={ButtonType.Secondary}
        className="w-full"
        onClick={onApply}
      >
        Apply
      </PrimaryButton>
    </div>
  );
};

const ProductListing = () => {
  const dispatch = useDispatch();
  const selectedFilters = useSelector(
    (state: RootState) => state.filters.selectedFilters
  );
  const [isOverlayVisible, setOverlayVisible] = useState(false);

  const handleAddFilter = (id: string, groupId: string, name: string) => () => {
    dispatch(addFilter({ id, groupId, name }));
  };

  const handleRemoveFilter = (id: string) => () => {
    dispatch(removeFilter(id));
  };

  return (
    <div className="my-6 flex flex-col space-y-3">
      <ProductListingHeader
        onFilterButtonClick={() => setOverlayVisible(true)}
      />
      <ProductListingHighlight />
      <FiltersSection onFilterButtonClick={() => setOverlayVisible(true)} />
      <ProductListingGrid />

      <SidebarLayout
        isOverlayVisible={isOverlayVisible}
        title={
          <div className="flex flex-row items-center justify-between ml-6 mr-16 my-6">
            <h2 className="text-xl font-bold tracking-wide">Filter & Sort</h2>
            <p
              className="text-gray-500 underline"
              onClick={() => dispatch(clearFilters())}
            >
              Clear All
            </p>
          </div>
        }
        onClose={() => setOverlayVisible(false)}
      >
        <div className="flex-1 grow w-full overflow-y-auto">
          <div className="flex flex-col items-center justify-between mt-6">
            <div className="w-full">
              <div className="flex flex-col space-y-4 mx-6 mb-4">
                <h4 className="text-sm font-bold">APPLIED FILTERS</h4>
                <div className="flex flex-row flex-wrap gap-2 w-full">
                  {selectedFilters.length > 0 ? (
                    selectedFilters.map((filter: Filter) => (
                      <div
                        key={filter.id}
                        className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max cursor-pointer"
                        onClick={handleRemoveFilter(filter.id)}
                      >
                        <FontAwesomeIcon icon={faXmark} size="lg" />
                        <p className="text-sm">{filter.name}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500">No Filter Applied</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-4 w-full">
              <Accordion title="SORT BY" sectionClassName="mx-6">
                <div className="flex flex-row border-b border-gray-200">
                  <span className="mx-6 my-3">PRICE (LOW - HIGH)</span>
                </div>
                <div className="flex flex-row border-b border-gray-200">
                  <span className="mx-6 my-3">NEWEST</span>
                </div>
                <div className="flex flex-row border-b border-gray-200">
                  <span className="mx-6 my-3">TOP SELLERS</span>
                </div>
                <div className="flex flex-row">
                  <span className="mx-6 mt-3">PRICE (HIGH - LOW)</span>
                </div>
              </Accordion>
            </div>

            {filters.map((filter, key) => {
              if (filter.type === "multioption") {
                return (
                  <div key={key} className="flex flex-col space-y-4 w-full">
                    <Accordion
                      title={filter.name}
                      sectionClassName="mx-6 uppercase"
                      outerSectionClassName={
                        key === filters.length - 1 ? "border-b" : ""
                      }
                    >
                      {filter.children?.map((filterOption, index) => (
                        <div key={index} className="flex flex-row">
                          <div
                            className="flex flex-row mx-6 my-3 hover:cursor-pointer text-gray-700 hover:text-main_brown transition-all duration-300"
                            onClick={
                              selectedFilters.some(
                                (selectedFilter) =>
                                  selectedFilter.id === filterOption.id
                              )
                                ? handleRemoveFilter(filterOption.id)
                                : handleAddFilter(
                                    filterOption.id,
                                    filter.id,
                                    filterOption.name
                                  )
                            }
                          >
                            <Checkbox
                              isChecked={selectedFilters.some(
                                (selectedFilter) =>
                                  selectedFilter.id === filterOption.id
                              )}
                            />
                            <p className="ml-2 mr-1 text-md">
                              {filterOption.name}
                            </p>
                            <span className="text-sm flex flex-col items-end justify-end">
                              [{filterOption.count}]
                            </span>
                          </div>
                        </div>
                      ))}
                    </Accordion>
                  </div>
                );
              }

              if (
                filter.type === "singleoption" &&
                !selectedFilters.some(
                  (selectedFilter) => selectedFilter.groupId === filter.id
                )
              ) {
                return (
                  <div key={key} className="flex flex-col space-y-4 w-full">
                    <Accordion
                      title={filter.name}
                      sectionClassName="mx-6 uppercase"
                      outerSectionClassName={
                        key === filters.length - 1 ? "border-b" : ""
                      }
                    >
                      {(filter.children ?? []).map(
                        (filterOption, index, arr) => (
                          <div
                            key={index}
                            className="flex flex-row hover:cursor-pointer"
                            onClick={
                              selectedFilters.some(
                                (selectedFilter) =>
                                  selectedFilter.id === filterOption.id
                              )
                                ? handleRemoveFilter(filterOption.id)
                                : handleAddFilter(
                                    filterOption.id,
                                    filter.id,
                                    filterOption.name
                                  )
                            }
                          >
                            <div
                              className={`flex flex-row mx-6 hover:text-main_brown transition-all duration-300 ${
                                index < arr.length - 1 ? "my-3" : "mt-3"
                              }`}
                            >
                              <p className="mr-1 text-md">
                                {filterOption.name}
                              </p>
                              <span className="text-sm flex flex-col items-end justify-end">
                                [{filterOption.count}]
                              </span>
                            </div>
                          </div>
                        )
                      )}
                    </Accordion>
                  </div>
                );
              }

              if (filter.type === "grid") {
                return (
                  <div key={key} className="flex flex-col space-y-4 w-full">
                    <Accordion
                      title={filter.name}
                      sectionClassName="mx-6 uppercase"
                      outerSectionClassName={
                        key === filters.length - 1 ? "border-b" : ""
                      }
                    >
                      <div className="grid grid-cols-3 gap-3 p-4">
                        {filter.children?.map((colorOption) => (
                          <div
                            key={colorOption.id}
                            className="flex flex-col items-center hover:cursor-pointer"
                            onClick={
                              selectedFilters.some(
                                (selectedFilter) =>
                                  selectedFilter.id === colorOption.id
                              )
                                ? handleRemoveFilter(colorOption.id)
                                : handleAddFilter(
                                    colorOption.id,
                                    filter.id,
                                    colorOption.name
                                  )
                            }
                          >
                            <div
                              className={`w-10 h-10 rounded-full border border-gray-300 flex flex-row items-center justify-center ${colorOption.colour}`}
                              title={colorOption.name}
                            >
                              {selectedFilters.some(
                                (selectedFilters) =>
                                  selectedFilters.id === colorOption.id
                              ) ? (
                                <FontAwesomeIcon
                                  icon={faCheck}
                                  className={colorOption.textColour}
                                />
                              ) : (
                                ""
                              )}
                            </div>
                            <span className="text-sm text-gray-700 mt-2">
                              {colorOption.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </Accordion>
                  </div>
                );
              }

              if (filter.type === "range") {
                return (
                  <div key={key} className="flex flex-col space-y-4 w-full">
                    <Accordion
                      title={filter.name}
                      sectionClassName="mx-6 uppercase"
                      outerSectionClassName={
                        key === filters.length - 1 ? "border-b" : ""
                      }
                    >
                      <div className="flex flex-row w-full">
                        <div className="flex flex-row mx-6 my-3 w-full">
                          <RangeBar min={20} max={200} />
                        </div>
                      </div>
                    </Accordion>
                  </div>
                );
              }
            })}
          </div>
        </div>

        <ApplyFooter onApply={() => console.log("Apply")} />
      </SidebarLayout>
    </div>
  );
};

export default ProductListing;
