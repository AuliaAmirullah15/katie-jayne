import Image from "next/image";
import filter from "@/assets/images/png/filter.png";

const FilterButton = () => {
  return (
    <button className="flex flex-row md:space-x-2 text-sm border-black border-1 px-3 py-2 tracking-widest font-bold">
      <span className="hidden md:block">FILTER & SORT</span>
      <span>
        <Image src={filter} alt="sort and filter" height={20} width={20} />
      </span>
    </button>
  );
};

export default FilterButton;
