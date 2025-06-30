"use client";

import clsx from "clsx";

import ButtonProps from "@/components/atoms/button/props/buttonProps";
import Body1 from "@/components/atoms/typography/Body1";

const SecondaryButton = ({ label, disabled = false, onClick }: ButtonProps) => {
  return (
    <button
      className={clsx("w-full h-12 rounded-lg bg-gray-200 disabled:bg-gray-100", "md:w-auto md:px-4")}
      disabled={disabled}
      onClick={onClick}
    >
      <Body1 text={label} styles={{ color: disabled ? "text-gray-400" : "text-black", weight: "font-medium" }} />
    </button>
  );
};

export default SecondaryButton;
