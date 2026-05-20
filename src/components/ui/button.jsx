import React from "react";

export function Button({ className = "", variant, children, ...props }) {
  const base =
    "inline-flex items-center justify-center font-semibold transition focus:outline-none focus:ring-2 focus:ring-[#d4af37]/50 disabled:opacity-50 disabled:pointer-events-none";
  const variantClass =
    variant === "outline"
      ? "border"
      : "";
  return (
    <button className={`${base} ${variantClass} ${className}`} {...props}>
      {children}
    </button>
  );
}
