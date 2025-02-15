import { ProductDetails } from "@/app/types/product";
import React, { JSX } from "react";
import Accordion from "@/app/components/accordion/accordion";

export default function ProductAccordion({
  contents,
}: {
  contents: Array<ProductDetails>;
}): JSX.Element {
  return (
    <>
      {contents.map((content: ProductDetails, index: number) => (
        <Accordion
          key={index}
          title={content.title}
          outerSectionClassName={
            index === contents.length - 1 ? "border-b" : ""
          }
        >
          <p className="text-sm mb-4">{content.description}</p>
        </Accordion>
      ))}
    </>
  );
}
