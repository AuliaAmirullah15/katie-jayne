import { useDispatch, useSelector } from "react-redux";
import Accordion from "../../accordion/accordion";
import { RootState } from "@/app/stores";
import { sorts } from "@/data/filters";
import { SortingOption, setSorting } from "@/app/stores/sortingSlice";

export const SortBySection = () => {
  const dispatch = useDispatch();

  const selectedSorting = useSelector(
    (state: RootState) => state.sorting.selectedSorting
  );

  const handleSorting = (sortingOption: SortingOption) => {
    dispatch(setSorting(sortingOption));
  };

  return (
    <Accordion
      title="SORT BY"
      titleChildren={
        selectedSorting && (
          <div className="text-xs capitalize">{selectedSorting.name}</div>
        )
      }
      outerSectionClassName="pb-0"
      sectionClassName="px-6"
      isProductListing={true}
    >
      {sorts.map((sort, index) => (
        <div
          key={index}
          className={`w-full ${
            index < sorts.length - 1 ? "border-b border-gray-200" : ""
          } ${
            selectedSorting?.id == sort.id && "bg-gray-200"
          } transition-all duration-300 `}
          onClick={() => handleSorting(sort)}
        >
          <div
            className={`flex flex-row w-full hover:cursor-pointer hover:bg-gray-200 transition-all duration-300 ${
              selectedSorting?.id === sort.id ? "border-l-4 border-black" : ""
            }`}
          >
            <span className="mx-6 my-3 uppercase">{sort.name}</span>
          </div>
        </div>
      ))}
    </Accordion>
  );
};
