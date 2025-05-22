import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "white" | "outline";
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
}) => {
  const baseClasses =
    "overflow-hidden px-5 py-3 text-base font-semibold leading-none rounded-[100px]";

  const variantClasses = {
    primary: "text-white bg-amber-500",
    secondary: "text-black bg-white",
    white: "text-black bg-white",
    outline: "text-white bg-amber-600 border-4 border-amber-100 border-solid",
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
};
