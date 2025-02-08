import { productFilters } from "@/data/headerLinks";

const ProductFilters = () => {
  return (
    <ul className="flex flex-row space-x-10 text-gray-800 text-sm scroll-smooth snap-x">
      {productFilters.map((productFilter, key) => (
        <li
          key={key}
          className="group relative cursor-pointer flex flex-row items-center justify-between h-full grow py-4 hover:text-main_brown duration-300 transition-all"
        >
          <span className="relative">{productFilter}</span>
          <span className="absolute left-0 bottom-0 md:-bottom-1 w-0 h-[4px] bg-main_brown rounded-full transition-all duration-500 ease-in-out group-hover:w-full"></span>
        </li>
      ))}
    </ul>
  );
};

export default ProductFilters;
