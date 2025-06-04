"use client";

import clsx from "clsx";

import ButtonProps from "@/components/atoms/button/props/buttonProps";
import Body1 from "@/components/atoms/typography/Body1";

const PrimaryButton = ({ label, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full h-12 rounded-lg bg-primary-500",
        "md:w-auto md:px-4",
        "disabled:bg-service-gray-medium disabled:text-service-gray",
      )}
      disabled={disabled}
      onClick={onClick}
    >
      <Body1 text={label} styles={{ color: "text-white", weight: "font-bold" }} />
    </button>
  );
};

export default PrimaryButton;
