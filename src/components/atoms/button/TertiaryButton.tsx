"use client";

import clsx from "clsx";

import ButtonProps from "@/components/atoms/button/props/buttonProps";
import ButtonStyleOptions from "@/components/atoms/button/options/buttonStyleOptions";

interface TertiaryButtonProps extends ButtonProps {
  styles?: ButtonStyleOptions;
}

const TertiaryButton = ({
  label,
  styles,
  disbled = false,
  onClick,
}: TertiaryButtonProps) => {
  return (
    <button
      className={clsx(
        "w-full md:w-auto",
        "h-12",
        "md:px-4",
        "text-md md:text-lg",
        "font-semibold",
        styles?.labelColor ?? "text-service-black",
        "cursor-pointer",
        "disabled:text-service-gray disabled:cursor-not-allowed"
      )}
      disabled={disbled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default TertiaryButton;
