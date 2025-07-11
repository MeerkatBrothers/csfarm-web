"use client";

import clsx from "clsx";

import ButtonProps from "@/components/atoms/button/props/buttonProps";
import ButtonStyleOptions from "@/components/atoms/button/options/buttonStyleOptions";
import Body1 from "@/components/atoms/typography/Body1";

interface TertiaryButtonProps extends ButtonProps {
  styles?: ButtonStyleOptions;
}

const TertiaryButton = ({ label, styles, disabled = false, onClick }: TertiaryButtonProps) => {
  return (
    <button className={clsx("w-full h-12", "md:w-auto md:px-4")} disabled={disabled} onClick={onClick}>
      <Body1 text={label} styles={{ color: disabled ? "text-gray-400" : styles?.labelColor ?? "text-black", weight: "font-medium" }} />
    </button>
  );
};

export default TertiaryButton;
