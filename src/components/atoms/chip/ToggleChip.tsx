"use client";

import clsx from "clsx";

import Label2 from "@/components/atoms/typography/Label2";

interface ToggleChipProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

const ToggleChip = ({ label, isActive, onClick }: ToggleChipProps) => {
  return (
    <button className={clsx("px-4 py-2 rounded-full", isActive ? "bg-primary-100" : "bg-gray-100")} onClick={onClick}>
      <Label2 text={label} styles={{ color: isActive ? "text-primary-500" : "text-gray-500" }} />
    </button>
  );
};

export default ToggleChip;
