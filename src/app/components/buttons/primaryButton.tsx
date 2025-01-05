"use client";
import React, { useState } from "react";

export enum ButtonType {
  Primary,
  Secondary,
}
export default function PrimaryButton({
  title,
  className,
  type,
}: {
  title: string;
  className?: string;
  type: ButtonType;
}) {
  const [style] = useState(() => {
    if (type === ButtonType.Primary)
      return "bg-black text-white md:bg-white md:text-black";
    else return "bg-black text-white";
  });

  return (
    <button
      className={`px-6 py-3 ${style} rounded-full hover:bg-main_brown hover:text-white transition ${className}`}
    >
      {title}
    </button>
  );
}
