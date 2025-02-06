"use client";
import React, { useState } from "react";

export enum ButtonType {
  Primary,
  Secondary,
  Ternary,
  Outlined,
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
      return "bg-black border-black border-2 text-white md:bg-white md:border-white md:text-black hover:border-2 hover:border-main_brown";
    else if (buttonType === ButtonType.Secondary)
      return "bg-black text-white border-black border-2 hover:border-main_brown";
    else if (buttonType === ButtonType.Ternary)
      return "bg-white border-white border-2 text-black hover:border-2 hover:border-main_brown";
    else
      return "bg-white text-black border-2 border-black hover:border-2 hover:border-main_brown";
  });

  const [disabledStyle] = useState(() => {
    return buttonType === ButtonType.Outlined
      ? "bg-white border-2 text-gray-400 border-gray-200 cursor-not-allowed"
      : "opacity-50 cursor-not-allowed";
  });

  return (
    <button
      className={`px-6 py-3 rounded-full transition ${className} ${
        props.disabled
          ? disabledStyle
          : style + " hover:bg-main_brown hover:text-white"
      }`}
      {...props}
    >
      {children}
    </button>
  );
}
