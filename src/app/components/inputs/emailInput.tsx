import React from "react";

export default function EmailInput({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) {
  return (
    <input
      type="email"
      placeholder="Enter your email address"
      className={`w-full h-12 px-4 text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-main_brown mb-2 ${className}`}
      {...props}
    />
  );
}
