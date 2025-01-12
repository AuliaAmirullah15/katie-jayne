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
      return "bg-black text-white md:bg-white md:text-black";
    else if (buttonType === ButtonType.Secondary) return "bg-black text-white";
    else if (buttonType === ButtonType.Ternary) return "bg-white text-black";
    else return "bg-white text-black outline border-black";
  });

  const [disabledStyle] = useState(() => {
    return buttonType === ButtonType.Outlined
      ? "bg-white text-gray-400 border-gray-200 outline cursor-not-allowed"
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
