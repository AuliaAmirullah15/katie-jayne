import React, { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  const [isSectionOpen, setOpenSection] = useState(false);

  return (
    <div className="border-t border-b py-4">
      <div
        onClick={() => setOpenSection(!isSectionOpen)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="text-md md:text-lg font-semibold">{title}</h3>
        <span className="text-md md:text-lg font-semibold">
          {isSectionOpen ? (
            <FaChevronDown className="w-6 h-6 text-gray-500 transform rotate-180 transition-transform duration-300" />
          ) : (
            <FaChevronDown className="w-6 h-6 text-gray-500 transform rotate-0 transition-transform duration-300" />
          )}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all ease-in-out duration-500 ${
          isSectionOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="mt-6 text-gray-600">{children}</div>
      </div>
    </div>
  );
}
