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
    <button className={clsx("px-4 py-2 rounded-full", isActive ? "bg-primary-light" : "bg-service-gray-light")} onClick={onClick}>
      <Label2 text={label} styles={{ textColor: isActive ? "text-primary" : "text-service-gray" }} />
    </button>
  );
};

export default ToggleChip;
