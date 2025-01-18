import React, { JSX, useState } from "react";
import { FaChevronDown } from "react-icons/fa";

interface contentsProps {
  title: string;
  description: string;
}

export default function Accordion({
  contents,
}: {
  contents: Array<contentsProps>;
}): JSX.Element {
  const [openSections, setOpenSections] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.map((isOpen, idx) => (idx === index ? !isOpen : isOpen))
    );
  };

  return (
    <>
      {contents.map((content: contentsProps, index: number) => (
        <div key={index} className="border-t border-b py-4">
          <div
            onClick={() => toggleSection(index)}
            className="flex justify-between items-center cursor-pointer"
          >
            <h3 className="text-md md:text-lg font-semibold">
              {content.title}
            </h3>
            <span className="text-md md:text-lg font-semibold">
              {openSections[index] ? (
                <FaChevronDown className="w-6 h-6 text-gray-500 transform rotate-180 transition-transform duration-300" />
              ) : (
                <FaChevronDown className="w-6 h-6 text-gray-500 transform rotate-0 transition-transform duration-300" />
              )}
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all ease-in-out duration-500 ${
              openSections[index] ? "h-auto" : "h-0"
            }`}
          >
            <div className="mt-6 text-gray-600">
              <p>{content.description}</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
