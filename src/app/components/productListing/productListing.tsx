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
import { filters } from "@/data/filters";

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

      <SidebarLayout
        isOverlayVisible={isOverlayVisible}
        title={
          <div className="flex flex-row items-center justify-between ml-6 mr-16 my-6">
            <h2 className="text-xl font-bold tracking-wide">Filter & Sort</h2>
            <p className="text-gray-500 underline">Clear All</p>
          </div>
        }
        onClose={() => setOverlayVisible(false)}
      >
        <div className="flex flex-col items-center justify-between my-6">
          <div className="flex flex-col space-y-4 mx-6 mb-4">
            <h4 className="text-sm font-bold">APPLIED FILTERS</h4>
            <div className="flex flex-row flex-wrap gap-2 w-full">
              <div className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max">
                <FontAwesomeIcon icon={faXmark} size="lg" />
                <p className="text-sm">Decanters</p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max">
                <FontAwesomeIcon icon={faXmark} size="lg" />
                <p className="text-sm">Crystal</p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max">
                <FontAwesomeIcon icon={faXmark} size="lg" />
                <p className="text-sm">Decanters</p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max">
                <FontAwesomeIcon icon={faXmark} size="lg" />
                <p className="text-sm">Crystal</p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max">
                <FontAwesomeIcon icon={faXmark} size="lg" />
                <p className="text-sm">Decanters</p>
              </div>
              <div className="inline-flex items-center space-x-2 bg-gray-200 p-2 rounded max-w-max">
                <FontAwesomeIcon icon={faXmark} size="lg" />
                <p className="text-sm">Crystal</p>
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
                  >
                    {filter.children?.map((filterOption, index) => (
                      <div key={index} className="flex flex-row">
                        <div className="flex flex-row mx-6 my-3">
                          <Checkbox />
                          <p className="ml-2 mr-1 text-md text-gray-700">
                            {filterOption.name}
                          </p>
                          <span className="text-sm text-gray-500 flex flex-col items-end justify-end">
                            [{filterOption.count}]
                          </span>
                        </div>
                      </div>
                    ))}
                  </Accordion>
                </div>
              );
            }

            if (filter.type === "singleoption") {
              return (
                <div key={key} className="flex flex-col space-y-4 w-full">
                  <Accordion
                    title={filter.name}
                    sectionClassName="mx-6 uppercase"
                  >
                    {(filter.children ?? []).map((filterOption, index, arr) => (
                      <div key={index} className="flex flex-row">
                        <div
                          className={`flex flex-row mx-6 ${
                            index < arr.length - 1 ? "my-3" : "mt-3"
                          }`}
                        >
                          <p className="mr-1 text-md text-gray-700">
                            {filterOption.name}
                          </p>
                          <span className="text-sm text-gray-500 flex flex-col items-end justify-end">
                            [{filterOption.count}]
                          </span>
                        </div>
                      </div>
                    ))}
                  </Accordion>
                </div>
              );
            }

            // if (filter.type === "grid") {
            //   return <div key={key}>Grid</div>;
            // }

            // if (filter.type === "range") {
            //   return <div key={key}>Range</div>;
            // }

            return null; // Ensure a valid return for all cases
          })}
        </div>
      </SidebarLayout>
    </div>
  );
};

export default ProductListing;
