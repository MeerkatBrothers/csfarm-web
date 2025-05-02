"use client";

import clsx from "clsx";

import ButtonProps from "@/components/atoms/button/props/buttonProps";

const SecondaryButton = ({ label, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full md:w-auto",
        "h-12",
        "md:px-4",
        "rounded-lg",
        "bg-service-gray-medium",
        "text-base",
        "font-semibold",
        "text-white",
        "disabled:bg-service-gray-medium disabled:text-service-gray"
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default SecondaryButton;
