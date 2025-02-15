import React, { ReactNode, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

export default function Accordion({
  title,
  children,
  outerSectionClassName,
  sectionClassName,
}: {
  title: string;
  children: ReactNode;
  outerSectionClassName?: string;
  sectionClassName?: string;
}) {
  const [isSectionOpen, setOpenSection] = useState(false);

  return (
    <div className={`border-t ${outerSectionClassName}`}>
      <div
        onClick={() => setOpenSection(!isSectionOpen)}
        className={`flex justify-between items-center cursor-pointer py-3 ${sectionClassName}`}
      >
        <h3 className="text-sm font-semibold">{title}</h3>
        <span className="text-sm font-semibold">
          {isSectionOpen ? (
            <FaChevronDown className="w-3 h-3 text-gray-500 transform rotate-180 transition-transform duration-300" />
          ) : (
            <FaChevronDown className="w-3 h-3 text-gray-500 transform rotate-0 transition-transform duration-300" />
          )}
        </span>
      </div>

      <div
        className={`overflow-hidden transition-all ease-in-out duration-500 ${
          isSectionOpen ? "h-auto" : "h-0"
        }`}
      >
        <div className="mt-2 text-gray-600">{children}</div>
      </div>
    </div>
  );
}
