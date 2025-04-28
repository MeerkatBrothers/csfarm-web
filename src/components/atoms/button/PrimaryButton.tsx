"use client";

import clsx from "clsx";

import ButtonProps from "@/components/atoms/button/props/buttonProps";

const PrimaryButton = ({ label, disbled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full md:w-auto",
        "h-12",
        "md:px-4",
        "rounded-lg",
        "bg-primary",
        "text-md md:text-lg",
        "font-semibold",
        "text-white",
        "cursor-pointer",
        "disabled:bg-service-gray-medium disabled:text-service-gray disabled:cursor-not-allowed"
      )}
      disabled={disbled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default PrimaryButton;
