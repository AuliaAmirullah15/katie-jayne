"use client";
import React, { useState } from "react";

export enum ButtonType {
  Primary,
  Secondary,
}

export default function PrimaryButton({
  children,
  className,
  buttonType,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  className?: string;
  buttonType: ButtonType;
}) {
  const [style] = useState(() => {
    if (buttonType === ButtonType.Primary)
      return "bg-black text-white md:bg-white md:text-black";
    else return "bg-black text-white";
  });

  return (
    <button
      className={`px-6 py-3 ${style} rounded-full hover:bg-main_brown hover:text-white transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
