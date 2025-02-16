export const FilterSortingHeader = ({
  onClearAll,
}: {
  onClearAll: () => void;
}) => {
  return (
    <div className="flex flex-row items-center justify-between ml-6 mr-16 my-6">
      <h2 className="text-xl font-bold tracking-wide">Filter & Sort</h2>
      <p
        className="text-gray-500 underline hover:cursor-pointer hover:text-black transition-all duration-300"
        onClick={onClearAll}
      >
        Clear All
      </p>
    </div>
  );
};
